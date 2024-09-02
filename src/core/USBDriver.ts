import { EventEmitter } from "events";
import * as usb from "usb";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
import { BaseSensor } from "../sensors/baseSensor.js";
import { DebugOptions } from "../types/debugOptions.js";

/**
 * Class representing a USB driver that handles communication with USB devices.
 * Extends EventEmitter to emit various events related to USB operations.
 */
export class USBDriver extends EventEmitter {
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
    canScan: boolean = false;

    /**
     * Creates an instance of USBDriver.
     *
     * @param {number} idVendor - The vendor ID of the USB device.
     * @param {number} idProduct - The product ID of the USB device.
     * @param {DebugOptions} [debugOptions={}] - Optional debug options for USB operations.
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

    /**
     * Retrieves a list of USB devices matching the specified vendor and product IDs.
     *
     * @private
     * @returns {usb.usb.Device[]} An array of USB devices that match the specified criteria.
     */
    private getDevices(): usb.usb.Device[] {
        const allDevices = usb.getDeviceList();

        return allDevices.filter((d) => d.deviceDescriptor.idVendor === this.idVendor && d.deviceDescriptor.idProduct === this.idProduct).filter((d) => USBDriver.deviceInUse.indexOf(d) === -1);
    }

    /**
     * Checks if a USB device matching the specified criteria is present.
     *
     * @returns {boolean} True if a matching device is present; otherwise, false.
     *
     * @example
     * ```typescript
     * if (usbDriver.isPresent()) {
     *   console.log("Device is present.");
     * }
     * ```
     */
    public isPresent(): boolean {
        return this.getDevices().length > 0;
    }

    /**
     * Opens a connection to a matching USB device and initializes the interface.
     *
     * @returns {boolean} True if a device is successfully opened; otherwise, false.
     *
     * @example
     * ```typescript
     * if (usbDriver.open()) {
     *   console.log("Device opened successfully.");
     * } else {
     *   console.log("Failed to open device.");
     * }
     * ```
     */
    public open(): boolean {
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
            return false;
        }

        USBDriver.deviceInUse.push(this.device);

        if (!this.iface) {
            throw new Error("Interface not initialized.");
        }

        this.inEndpoint = this.iface.endpoints[0] as usb.InEndpoint;

        this.inEndpoint.on("data", (data: Buffer) => {
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
                this.read(readData);
                beginBlock = endBlock;
            }
        });

        this.inEndpoint.on("error", (err: Error) => {
            console.error("ERROR RECV: ", err);
        });

        this.inEndpoint.on("end", () => {
            //console.info("STOP RECV");
        });

        this.inEndpoint.startPoll();

        this.outEndpoint = this.iface.endpoints[1] as usb.OutEndpoint;

        this.reset();

        return true;
    }

    /**
     * Asynchronously opens a connection to a USB device and listens for the "attach" event.
     *
     * @param {AbortSignal} signal - An AbortSignal to control the asynchronous operation.
     * @returns {Promise<void>} A promise that resolves when the connection is successfully opened.
     *
     * @example
     * ```typescript
     * const controller = new AbortController();
     * usbDriver.openAsync(controller.signal).catch(console.error);
     * ```
     */
    public async openAsync(signal: AbortSignal): Promise<void> {
        const controller = new AbortController();
        signal.addEventListener("abort", () => controller.abort());

        const doOpen = (): Promise<void> => {
            return new Promise((resolve, reject) => {
                try {
                    const result = this.open();
                    if (result) {
                        resolve();
                    } else {
                        reject(new Error("Open failed"));
                    }
                } catch (err) {
                    reject(err instanceof Error ? err : new Error("Unknown error"));
                }
            });
        };

        const fn = (d: usb.Device) => {
            if (!d || (d.deviceDescriptor.idVendor === this.idVendor && d.deviceDescriptor.idProduct === this.idProduct)) {
                doOpen()
                    .then(() => {
                        usb.usb.removeListener("attach", fn);
                    })
                    .catch((err) => {
                        if (!controller.signal.aborted) {
                            console.error(err); // handle errors
                        }
                    });
            }
        };

        usb.usb.on("attach", fn);
        if (this.isPresent()) {
            setImmediate(() => usb.usb.emit("attach", this.device!));
        }

        await new Promise<void>((resolve, reject) => {
            controller.signal.addEventListener("abort", () => {
                usb.usb.removeListener("attach", fn);
                reject(new Error("Operation canceled"));
            });
        });
    }

    /**
     * Closes the connection to the USB device and releases all resources.
     */
    public close() {
        this.detach_all();
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
                                const devIdx = USBDriver.deviceInUse.indexOf(this.device!);
                                if (devIdx >= 0) {
                                    USBDriver.deviceInUse.splice(devIdx, 1);
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

    /**
     * Resets the USB device and prepares it for operation.
     */
    public reset() {
        this.detach_all();
        this.maxChannels = 0;
        this.usedChannels = 0;
        this.write(Messages.resetSystem());
    }

    /**
     * Checks if the device is currently in scanning mode.
     *
     * @returns {boolean} True if the device is scanning; otherwise, false.
     */
    public isScanning(): boolean {
        return this.usedChannels === -1;
    }

    /**
     * Attaches a sensor to the USB driver for data handling.
     *
     * @param {BaseSensor} sensor - The sensor to attach.
     * @param {boolean} forScan - Indicates if the attachment is for scanning purposes.
     * @returns {boolean} True if the sensor is successfully attached; otherwise, false.
     */
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

    /**
     * Detaches a sensor from the USB driver.
     *
     * @param {BaseSensor} sensor - The sensor to detach.
     * @returns {boolean} True if the sensor is successfully detached; otherwise, false.
     */
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

    /**
     * Detaches all sensors from the USB driver.
     */
    public detach_all() {
        const copy = this.attachedSensors;
        copy.forEach((sensor: BaseSensor) => sensor.detach());
    }

    /**
     * Writes data to the USB device's output endpoint.
     *
     * @param {Buffer} data - The data buffer to write to the output endpoint.
     */
    public write(data: Buffer) {
        if (this.outEndpoint) {
            //console.debug("DATA SEND: ", data);
            this.outEndpoint.transfer(data, (error) => {
                if (error) {
                    console.error("ERROR SEND: ", error);
                }
            });
        }
    }

    /**
     * Reads data from the USB device's input endpoint and handles it accordingly.
     *
     * @param {Buffer} data - The data buffer received from the input endpoint.
     */
    public read(data: Buffer) {
        //console.debug("DATA RECV: ", data);
        const messageId = data.readUInt8(2);
        if (messageId === Constants.MESSAGE_STARTUP) {
            this.write(Messages.requestMessage(0, Constants.MESSAGE_CAPABILITIES));
        } else if (messageId === Constants.MESSAGE_CAPABILITIES) {
            this.maxChannels = data.readUInt8(3);
            this.canScan = (data.readUInt8(7) & 0x06) === 0x06;
            this.write(Messages.setNetworkKey());
        } else if (messageId === Constants.MESSAGE_CHANNEL_EVENT && data.readUInt8(4) === Constants.MESSAGE_NETWORK_KEY) {
            this.emit("startup", data);
        } else {
            this.emit("read", data);
        }
    }
}
