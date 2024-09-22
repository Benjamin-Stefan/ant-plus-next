import { BaseSensor } from "../../sensors/baseSensor";
import { Constants } from "../../types/constants";
import { DebugOptions } from "../../types/debugOptions";
import { USBDriverBase } from "../../types/usbDriverBase";
import { Messages } from "../../utils/messages";
import EventEmitter from "events";
import * as usb from "usb";

/**
 * NodeUSBDriver class handles the connection and communication with USB devices using the node-usb library.
 * It manages device setup, communication, sensor attachment, and data processing.
 *
 * @extends EventEmitter
 * @implements USBDriverBase
 */
export class NodeUSBDriver extends EventEmitter implements USBDriverBase {
    /**
     * List of USB devices currently in use.
     * @type {usb.Device[]}
     * @private
     */
    private static deviceInUse: usb.Device[] = [];

    /**
     * The USB device instance.
     * @type {usb.Device|undefined}
     * @private
     */
    private device: usb.Device | undefined;

    /**
     * The USB interface of the device.
     * @type {usb.Interface|undefined}
     * @private
     */
    private iface: usb.Interface | undefined;

    /**
     * Indicates if the kernel driver was detached.
     * @type {boolean}
     * @private
     */
    private detachedKernelDriver = false;

    /**
     * The input endpoint for reading data.
     * @type {(usb.InEndpoint & EventEmitter)|undefined}
     * @private
     */
    private inEndpoint: (usb.InEndpoint & EventEmitter) | undefined;

    /**
     * The output endpoint for sending data.
     * @type {(usb.OutEndpoint & EventEmitter)|undefined}
     * @private
     */
    private outEndpoint: (usb.OutEndpoint & EventEmitter) | undefined;

    /**
     * Stores leftover data from previous reads.
     * @type {Uint8Array|undefined}
     * @private
     */
    private leftover: Uint8Array | undefined;

    /**
     * The number of channels currently used.
     * @type {number}
     * @private
     */
    private usedChannels: number = 0;

    /**
     * List of attached sensors.
     * @type {BaseSensor[]}
     * @private
     */
    private attachedSensors: BaseSensor[] = [];

    /**
     * The maximum number of channels available for communication.
     * @type {number}
     */
    maxChannels: number = 0;

    /**
     * Indicates if the device can scan for channels.
     * @type {boolean}
     */
    _canScan: boolean = false;

    /**
     * Creates an instance of NodeUSBDriver.
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
     * Checks if the device can scan for channels.
     *
     * @returns {Promise<boolean>} Resolves with true if the device can scan, otherwise false.
     */
    async canScan(): Promise<boolean> {
        return Promise.resolve(this._canScan);
    }

    /**
     * Opens a connection to the USB device and sets up endpoints for communication.
     *
     * @returns {Promise<boolean>} Resolves with true if the device is successfully opened, otherwise false.
     */
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
                    // Ignore kernel driver errors
                }

                this.iface.claim();
                break;
            } catch (error) {
                // thow if LIBUSB_ERROR_ACCESS
                //console.error(error);
                // Ignore errors and try with the next device
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
        this.inEndpoint.on("data", (data: Uint8Array) => {
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

    /**
     * Closes the connection to the USB device and releases the interface.
     *
     * @returns {Promise<void>} Resolves when the device is closed.
     */
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
                                // Ignore kernel driver errors
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

    /**
     * Reads data from the USB device and processes it.
     *
     * @param {Uint8Array} data - The data received from the USB device.
     * @returns {Promise<void>} Resolves when the data has been processed.
     */
    async read(data: Uint8Array): Promise<void> {
        const dataView = new DataView(data.buffer);
        const messageId = dataView.getUint8(2);

        if (messageId === Constants.MESSAGE_STARTUP) {
            await this.write(Messages.requestMessage(0, Constants.MESSAGE_CAPABILITIES));
        } else if (messageId === Constants.MESSAGE_CAPABILITIES) {
            this.maxChannels = dataView.getUint8(3);
            this._canScan = (dataView.getUint8(7) & 0x06) === 0x06;
            await this.write(Messages.setNetworkKey());
        } else if (messageId === Constants.MESSAGE_CHANNEL_EVENT && dataView.getUint8(4) === Constants.MESSAGE_NETWORK_KEY) {
            this.emit("startup", data);
        } else {
            this.emit("read", data);
        }
    }

    /**
     * Writes data to the USB device.
     *
     * @param {Uint8Array} data - The data to be sent to the USB device.
     * @returns {Promise<void>} Resolves when the data has been written.
     */
    async write(data: Uint8Array): Promise<void> {
        await new Promise<void>((resolve, reject) => {
            if (this.outEndpoint) {
                this.outEndpoint.transfer(Buffer.from(data), (error) => {
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

    /**
     * Resets the device and its channels, and sends a reset message to the system.
     *
     * @returns {Promise<void>} Resolves when the reset is completed.
     */
    async reset(): Promise<void> {
        await this.detachAll();
        this.maxChannels = 0;
        this.usedChannels = 0;
        await this.write(Messages.resetSystem());
    }

    /**
     * Attaches a sensor to the driver and assigns it a channel.
     *
     * @param {BaseSensor} sensor - The sensor to attach.
     * @param {boolean} forScan - Whether the sensor is being attached for scanning.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully attached, otherwise false.
     */
    async attach(sensor: BaseSensor, forScan: boolean): Promise<boolean> {
        if (this.usedChannels < 0) {
            return Promise.resolve(false);
        }

        if (forScan && this.usedChannels !== 0) {
            return Promise.resolve(false);
        }

        if (!forScan && this.maxChannels <= this.usedChannels) {
            return Promise.resolve(false);
        }

        this.usedChannels = forScan ? -1 : this.usedChannels + 1;
        this.attachedSensors.push(sensor);

        return Promise.resolve(true);
    }

    /**
     * Detaches a sensor from the driver.
     *
     * @param {BaseSensor} sensor - The sensor to detach.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully detached, otherwise false.
     */
    async detach(sensor: BaseSensor): Promise<boolean> {
        const idx = this.attachedSensors.indexOf(sensor);
        if (idx < 0) {
            return Promise.resolve(false);
        }

        this.usedChannels = this.usedChannels < 0 ? 0 : this.usedChannels - 1;
        this.attachedSensors.splice(idx, 1);

        return Promise.resolve(true);
    }

    /**
     * Checks if a USB device is present.
     *
     * @returns {Promise<boolean>} Resolves with true if a device is present, otherwise false.
     */
    async isPresent(): Promise<boolean> {
        return Promise.resolve(this.getDevices().length > 0);
    }

    /**
     * Checks if the driver is currently scanning.
     *
     * @returns {Promise<boolean>} Resolves with true if the driver is scanning, otherwise false.
     */
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
     *
     * @private
     * @returns {Promise<void>} Resolves when all sensors are detached.
     */
    private async detachAll(): Promise<void> {
        const copy = this.attachedSensors;
        for (const sensor of copy) {
            await sensor.detach();
        }
    }

    /**
     * Handles data received from the USB device and processes the messages.
     *
     * @private
     * @param {Uint8Array} data - The data received from the USB device.
     * @returns {Promise<void>} Resolves when the data has been processed.
     */
    private async onData(data: Uint8Array) {
        if (!data.length) {
            return;
        }

        if (this.leftover) {
            data = this.concatUint8Arrays(this.leftover, data);
            this.leftover = undefined;
        }

        const dataView = new DataView(data.buffer);

        if (dataView.getUint8(0) !== 0xa4) {
            throw new Error("SYNC missing");
        }

        const len = data.length;
        let beginBlock = 0;
        while (beginBlock < len) {
            if (beginBlock + 1 === len) {
                this.leftover = data.slice(beginBlock);
                break;
            }
            const blockLen = dataView.getUint8(beginBlock + 1);
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

    /**
     * Concatenates two Uint8Array objects into one.
     *
     * @private
     * @param {Uint8Array} arr1 - The first array.
     * @param {Uint8Array} arr2 - The second array.
     * @returns {Uint8Array} The concatenated result.
     */
    private concatUint8Arrays(arr1: Uint8Array, arr2: Uint8Array): Uint8Array {
        const result = new Uint8Array(arr1.length + arr2.length);
        result.set(arr1, 0);
        result.set(arr2, arr1.length);
        return result;
    }
}
