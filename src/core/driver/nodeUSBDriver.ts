import { BaseSensor } from "@/sensors/baseSensor";
import { Constants } from "@/types/constants";
import { DebugOptions } from "@/types/debugOptions";
import { USBDriverBase } from "@/types/usbDriverBase";
import { Messages } from "@/utils/messages";
import EventEmitter from "events";
import * as usb from "usb";

export class NodeUSBDriver extends EventEmitter implements USBDriverBase {
    private static deviceInUse: usb.Device[] = [];
    private device: usb.Device | undefined;
    private iface: usb.Interface | undefined;
    private detachedKernelDriver = false;
    private inEndpoint: (usb.InEndpoint & EventEmitter) | undefined;
    private outEndpoint: (usb.OutEndpoint & EventEmitter) | undefined;
    private leftover: Buffer | undefined;
    private usedChannels: number = 0;
    private attachedSensors: BaseSensor[] = [];

    maxChannels: number = 0;
    _canScan: boolean = false;

    /**
     * Creates an instance of USBDriver.
     *
     * @param {number} idVendor - The vendor ID of the USB device.
     * @param {number} idProduct - The product ID of the USB device.
     * @param {DebugOptions} [debugOptions={}] - Optional debug options for USB operations.
     * @param {boolean} [webUsb=false] - Optional option for webUsb. If set true, then idVensor and idProduct is irgnored.
     */
    constructor(
        private idVendor: number,
        private idProduct: number,
        debugOptions: DebugOptions = {}
    ) {
        super();
        this.setMaxListeners(50);
        usb.usb.setDebugLevel(debugOptions.usbDebugLevel || 0);
    }

    async canScan(): Promise<boolean> {
        return Promise.resolve(this._canScan);
    }

    async open(): Promise<boolean> {
        const devices = this.getDevices();

        while (devices.length) {
            try {
                const device = devices.shift();
                if (!device) {
                    continue;
                }

                this.device = device;
                this.device.open();
                this.iface = this.device.interfaces![0];

                try {
                    if (this.iface && this.iface.isKernelDriverActive()) {
                        this.detachedKernelDriver = true;
                        this.iface.detachKernelDriver();
                    }
                } catch {
                    // Ignore kernel driver errors;
                }

                this.iface.claim();
                break;
            } catch {
                // Ignore the error and try with the next device, if present
                if (this.device) {
                    this.device.close();
                }

                this.device = undefined;
                this.iface = undefined;
            }
        }

        if (!this.device) {
            return Promise.resolve(false);
        }

        NodeUSBDriver.deviceInUse.push(this.device);

        if (!this.iface) {
            throw new Error("Interface not initialized.");
        }

        this.inEndpoint = this.iface.endpoints[0] as usb.InEndpoint;

        this.inEndpoint.on("data", (data: Buffer) => {
            this.onData(data).catch((error) => {
                console.error(error);
            });
        });

        this.inEndpoint.on("error", (err: Error) => {
            console.error("ERROR RECV: ", err);
        });

        this.inEndpoint.on("end", () => {
            //console.info("STOP RECV");
        });

        this.inEndpoint.startPoll();

        this.outEndpoint = this.iface.endpoints[1] as usb.OutEndpoint;

        await this.reset();

        return Promise.resolve(true);
    }

    async close(): Promise<void> {
        await this.detachAll();

        if (this.inEndpoint) {
            this.inEndpoint.stopPoll(() => {
                if (this.iface) {
                    this.iface.release(true, () => {
                        if (this.detachedKernelDriver) {
                            this.detachedKernelDriver = false;
                            try {
                                this.iface?.attachKernelDriver();
                            } catch {
                                // Ignore kernel driver errors;
                            }
                        }
                        this.iface = undefined;
                        if (this.device) {
                            this.device.reset(() => {
                                this.device?.close();
                                this.emit("shutdown");
                                const devIdx = NodeUSBDriver.deviceInUse.indexOf(this.device!);
                                if (devIdx >= 0) {
                                    NodeUSBDriver.deviceInUse.splice(devIdx, 1);
                                }
                                if (usb.usb.listenerCount("attach")) {
                                    usb.usb.emit("attach", this.device!);
                                }
                                this.device = undefined;
                            });
                        }
                    });
                }
            });
        }
    }

    async read(data: Buffer): Promise<void> {
        //console.debug("DATA RECV: ", data);
        const messageId = data.readUInt8(2);
        if (messageId === Constants.MESSAGE_STARTUP) {
            await this.write(Messages.requestMessage(0, Constants.MESSAGE_CAPABILITIES));
        } else if (messageId === Constants.MESSAGE_CAPABILITIES) {
            this.maxChannels = data.readUInt8(3);
            this._canScan = (data.readUInt8(7) & 0x06) === 0x06;
            await this.write(Messages.setNetworkKey());
        } else if (messageId === Constants.MESSAGE_CHANNEL_EVENT && data.readUInt8(4) === Constants.MESSAGE_NETWORK_KEY) {
            this.emit("startup", data);
        } else {
            this.emit("read", data);
        }
    }

    async write(data: Buffer): Promise<void> {
        await new Promise<void>((resolve, reject) => {
            if (this.outEndpoint) {
                //console.debug("DATA SEND: ", data);
                this.outEndpoint.transfer(data, (error) => {
                    if (error) {
                        console.error("ERROR SEND: ", error);
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            }
        });
    }

    async reset(): Promise<void> {
        await this.detachAll();
        this.maxChannels = 0;
        this.usedChannels = 0;
        await this.write(Messages.resetSystem());
    }

    async attach(sensor: BaseSensor, forScan: boolean): Promise<boolean> {
        if (this.usedChannels < 0) {
            return Promise.resolve(false);
        }

        if (forScan) {
            if (this.usedChannels !== 0) {
                return Promise.resolve(false);
            }

            this.usedChannels = -1;
        } else {
            if (this.maxChannels <= this.usedChannels) {
                return Promise.resolve(false);
            }

            ++this.usedChannels;
        }

        this.attachedSensors.push(sensor);

        return Promise.resolve(true);
    }

    async detach(sensor: BaseSensor): Promise<boolean> {
        const idx = this.attachedSensors.indexOf(sensor);
        if (idx < 0) {
            return Promise.resolve(false);
        }

        if (this.usedChannels < 0) {
            this.usedChannels = 0;
        } else {
            --this.usedChannels;
        }

        this.attachedSensors.splice(idx, 1);

        return Promise.resolve(true);
    }

    async isPresent(): Promise<boolean> {
        return Promise.resolve(this.getDevices().length > 0);
    }

    async isScanning(): Promise<boolean> {
        return Promise.resolve(this.usedChannels === -1);
    }

    /**
     * Retrieves a list of USB devices matching the specified vendor and product IDs.
     *
     * @private
     * @returns {usb.usb.Device[]} An array of USB devices that match the specified criteria.
     */
    private getDevices(): usb.usb.Device[] {
        const allDevices = usb.getDeviceList();

        return allDevices.filter((d) => d.deviceDescriptor.idVendor === this.idVendor && d.deviceDescriptor.idProduct === this.idProduct).filter((d) => NodeUSBDriver.deviceInUse.indexOf(d) === -1);
    }

    /**
     * Detaches all sensors from the USB driver.
     */
    private async detachAll(): Promise<void> {
        const copy = this.attachedSensors;

        for (const sensor of copy) {
            await sensor.detach();
        }
    }

    private async onData(data: Buffer) {
        if (!data.length) {
            return;
        }

        if (this.leftover) {
            data = Buffer.concat([this.leftover, data]);
            this.leftover = undefined;
        }

        if (data.readUInt8(0) !== 0xa4) {
            throw new Error("SYNC missing");
        }

        const len = data.length;
        let beginBlock = 0;
        while (beginBlock < len) {
            if (beginBlock + 1 === len) {
                this.leftover = data.slice(beginBlock);
                break;
            }
            const blockLen = data.readUInt8(beginBlock + 1);
            const endBlock = beginBlock + blockLen + 4;
            if (endBlock > len) {
                this.leftover = data.slice(beginBlock);
                break;
            }
            const readData = data.slice(beginBlock, endBlock);
            await this.read(readData);
            beginBlock = endBlock;
        }
    }
}
