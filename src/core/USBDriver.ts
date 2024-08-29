import { EventEmitter } from "events";
import * as usb from "usb";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
import { ICancellationToken } from "../types/cancellationToken.js";
import { CancellationTokenListener } from "../utils/cancellationTokenListener.js";
import { BaseSensor } from "../sensors/BaseSensor.js";

export class USBDriver extends EventEmitter {
    private static deviceInUse: usb.Device[] = [];
    private device: usb.Device;
    private iface: usb.Interface;
    private detachedKernelDriver = false;
    private inEp: usb.InEndpoint & EventEmitter;
    private outEp: usb.OutEndpoint & EventEmitter;
    private leftover: Buffer;
    private usedChannels: number = 0;
    private attachedSensors: BaseSensor[] = [];

    maxChannels: number = 0;
    canScan: boolean = false;

    constructor(
        private idVendor: number,
        private idProduct: number,
        dbgLevel = 0
    ) {
        super();
        this.setMaxListeners(50);
        usb.usb.setDebugLevel(dbgLevel);
    }

    private getDevices() {
        const allDevices = usb.getDeviceList();

        return allDevices.filter(d => d.deviceDescriptor.idVendor === this.idVendor && d.deviceDescriptor.idProduct === this.idProduct).filter(d => USBDriver.deviceInUse.indexOf(d) === -1);
    }

    public is_present(): boolean {
        return this.getDevices().length > 0;
    }

    public open(): boolean {
        const devices = this.getDevices();
        while (devices.length) {
            try {
                this.device = devices.shift();
                this.device.open();
                this.iface = this.device.interfaces[0];
                try {
                    if (this.iface.isKernelDriverActive()) {
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
                this.device.close();
                this.device = undefined;
                this.iface = undefined;
            }
        }
        if (!this.device) {
            return false;
        }
        USBDriver.deviceInUse.push(this.device);

        this.inEp = this.iface.endpoints[0] as usb.InEndpoint;

        this.inEp.on("data", (data: Buffer) => {
            if (!data.length) {
                return;
            }

            if (this.leftover) {
                data = Buffer.concat([this.leftover, data]);
                this.leftover = undefined;
            }

            if (data.readUInt8(0) !== 0xa4) {
                throw "SYNC missing";
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
                this.read(readData);
                beginBlock = endBlock;
            }
        });

        this.inEp.on("error", (err: any) => {
            //console.log('ERROR RECV: ', err);
        });

        this.inEp.on("end", () => {
            //console.log('STOP RECV');
        });

        this.inEp.startPoll();

        this.outEp = this.iface.endpoints[1] as usb.OutEndpoint;

        this.reset();

        return true;
    }

    public openAsync(cb: (err: Error) => void): ICancellationToken {
        let ct: CancellationTokenListener;
        const doOpen = () => {
            try {
                const result = this.open();
                if (result) {
                    ct._completed = true;
                    try {
                        cb(undefined);
                    } catch {
                        // ignore errors
                    }
                } else {
                    return false;
                }
            } catch (err) {
                cb(err);
            }
            return true;
        };
        const fn = d => {
            if (!d || (d.deviceDescriptor.idVendor === this.idVendor && d.deviceDescriptor.idProduct === this.idProduct)) {
                if (doOpen()) {
                    usb.usb.removeListener("attach", fn);
                }
            }
        };
        usb.usb.on("attach", fn);
        if (this.is_present()) {
            setImmediate(() => usb.usb.emit("attach", this.device));
        }
        return (ct = new CancellationTokenListener(fn, cb));
    }

    public close() {
        this.detach_all();
        this.inEp.stopPoll(() => {
            this.iface.release(true, () => {
                if (this.detachedKernelDriver) {
                    this.detachedKernelDriver = false;
                    try {
                        this.iface.attachKernelDriver();
                    } catch {
                        // Ignore kernel driver errors;
                    }
                }
                this.iface = undefined;
                this.device.reset(() => {
                    this.device.close();
                    this.emit("shutdown");
                    const devIdx = USBDriver.deviceInUse.indexOf(this.device);
                    if (devIdx >= 0) {
                        USBDriver.deviceInUse.splice(devIdx, 1);
                    }
                    if (usb.usb.listenerCount("attach")) {
                        usb.usb.emit("attach", this.device);
                    }
                    this.device = undefined;
                });
            });
        });
    }

    public reset() {
        this.detach_all();
        this.maxChannels = 0;
        this.usedChannels = 0;
        this.write(Messages.resetSystem());
    }

    public isScanning(): boolean {
        return this.usedChannels === -1;
    }

    public attach(sensor: BaseSensor, forScan: boolean): boolean {
        if (this.usedChannels < 0) {
            return false;
        }
        if (forScan) {
            if (this.usedChannels !== 0) {
                return false;
            }
            this.usedChannels = -1;
        } else {
            if (this.maxChannels <= this.usedChannels) {
                return false;
            }
            ++this.usedChannels;
        }
        this.attachedSensors.push(sensor);
        return true;
    }

    public detach(sensor: BaseSensor): boolean {
        const idx = this.attachedSensors.indexOf(sensor);
        if (idx < 0) {
            return false;
        }
        if (this.usedChannels < 0) {
            this.usedChannels = 0;
        } else {
            --this.usedChannels;
        }
        this.attachedSensors.splice(idx, 1);
        return true;
    }

    public detach_all() {
        const copy = this.attachedSensors;
        copy.forEach((sensor: BaseSensor) => sensor.detach());
    }

    public write(data: Buffer) {
        //console.log('DATA SEND: ', data);
        this.outEp.transfer(data, error => {
            if (error) {
                //console.log('ERROR SEND: ', error);
            }
        });
    }

    public read(data: Buffer) {
        //console.log('DATA RECV: ', data);
        const messageID = data.readUInt8(2);
        if (messageID === Constants.MESSAGE_STARTUP) {
            this.write(Messages.requestMessage(0, Constants.MESSAGE_CAPABILITIES));
        } else if (messageID === Constants.MESSAGE_CAPABILITIES) {
            this.maxChannels = data.readUInt8(3);
            this.canScan = (data.readUInt8(7) & 0x06) === 0x06;
            this.write(Messages.setNetworkKey());
        } else if (messageID === Constants.MESSAGE_CHANNEL_EVENT && data.readUInt8(4) === Constants.MESSAGE_NETWORK_KEY) {
            this.emit("startup", data);
        } else {
            this.emit("read", data);
        }
    }
}
