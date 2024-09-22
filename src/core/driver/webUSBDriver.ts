import { BaseSensor } from "../../sensors/baseSensor";
import { USBDriverBase } from "../../types/usbDriverBase";
import EventEmitter from "events";
import { supportHardware } from "./usbDriverUtils";
import { Messages } from "../../utils/messages";
import { Constants } from "../../types/constants";

/**
 * WebUSBDriver is a class that manages the connection and communication with USB devices using the WebUSB API.
 * It handles device setup, communication, and sensor attachment.
 *
 * @extends EventEmitter
 * @implements USBDriverBase
 */
export class WebUSBDriver extends EventEmitter implements USBDriverBase {
    /**
     * Stores the USB devices currently in use.
     * @type {USBDevice[]}
     * @private
     */
    private static deviceInUse: USBDevice[] = [];

    /**
     * The current USB device.
     * @type {USBDevice|undefined}
     * @private
     */
    private device: USBDevice | undefined;

    /**
     * The USB interface of the connected device.
     * @type {USBInterface|undefined}
     * @private
     */
    private iface: USBInterface | undefined;

    /**
     * The input endpoint for communication.
     * @type {USBEndpoint|undefined}
     * @private
     */
    private inEndpoint: USBEndpoint | undefined;

    /**
     * The output endpoint for communication.
     * @type {USBEndpoint|undefined}
     * @private
     */
    private outEndpoint: USBEndpoint | undefined;

    /**
     * Stores any leftover data from previous USB reads.
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
     * The sensors attached to the driver.
     * @type {BaseSensor[]}
     * @private
     */
    private attachedSensors: BaseSensor[] = [];

    /**
     * Controller for aborting asynchronous operations.
     * @type {AbortController}
     * @private
     */
    private abortController: AbortController;

    /**
     * Signal for aborting asynchronous operations.
     * @type {AbortSignal}
     * @private
     */
    private signal: AbortSignal;

    /**
     * The maximum number of channels available for communication.
     * @type {number}
     */
    maxChannels: number = 0;

    /**
     * Indicates whether the device can scan.
     * @type {boolean}
     */
    _canScan: boolean = false;

    /**
     * Initializes the WebUSBDriver instance, setting up the abort controller and signal.
     */
    constructor() {
        super();
        this.setMaxListeners(50);
        this.abortController = new AbortController();
        this.signal = this.abortController.signal;
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
     * Opens a connection to the USB device and initializes the endpoints.
     *
     * @returns {Promise<boolean>} Resolves with true if the device was successfully opened, otherwise false.
     */
    public async open(): Promise<boolean> {
        try {
            if (!this.device) {
                this.device = await navigator.usb.requestDevice({ filters: supportHardware });
            }

            await this.device.open();
            this.iface = this.device.configuration?.interfaces[0];

            if (!this.iface) {
                throw new Error("No interface configuration found.");
            }

            await this.device.claimInterface(this.iface.interfaceNumber);

            WebUSBDriver.deviceInUse.push(this.device);

            this.inEndpoint = this.iface.alternate.endpoints.find((e) => e.direction === "in");
            this.outEndpoint = this.iface.alternate.endpoints.find((e) => e.direction === "out");

            if (!this.inEndpoint || !this.outEndpoint) {
                throw new Error("In or Out endpoint not found.");
            }

            await this.reset();
            await this.readLoop();

            return true;
        } catch (error) {
            console.log(error);
            await this.close();
            return false;
        }
    }

    /**
     * Continuously reads data from the USB device.
     * Recursively calls itself after each read until aborted.
     *
     * @private
     * @returns {Promise<void>} Resolves when the read loop is completed or aborted.
     */
    private async readLoop(): Promise<void> {
        if (this.signal.aborted || !this.inEndpoint) {
            return;
        }

        try {
            const result = await this.device?.transferIn(this.inEndpoint.endpointNumber, this.inEndpoint.packetSize);
            if (!result || !result.data) {
                return this.readLoop();
            }

            let buffer = new Uint8Array(result.data.buffer);

            if (this.leftover) {
                buffer = this.concatUint8Arrays(this.leftover, buffer);
                this.leftover = undefined;
            }

            const dataView = new DataView(buffer.buffer);

            if (dataView.getUint8(0) !== 0xa4) {
                console.error("SYNC missing");
                return this.readLoop();
            }

            let beginBlock = 0;
            const len = buffer.length;

            while (beginBlock < len) {
                if (beginBlock + 1 === len) {
                    this.leftover = buffer.slice(beginBlock);
                    break;
                }

                const blockLen = dataView.getUint8(beginBlock + 1);
                const endBlock = beginBlock + blockLen + 4;

                if (endBlock > len) {
                    this.leftover = buffer.slice(beginBlock);
                    break;
                }

                const readData = buffer.slice(beginBlock, endBlock);
                await this.read(readData);
                beginBlock = endBlock;
            }
        } catch (error) {
            if (!this.signal.aborted) {
                throw error;
            }
        }

        return this.readLoop();
    }

    /**
     * Closes the connection to the USB device and cleans up.
     *
     * @returns {Promise<void>} Resolves when the device is closed.
     */
    public async close(): Promise<void> {
        this.cancelReadLoop();
        await this.detachAll();

        if (this.device) {
            try {
                await this.device.close();
            } catch (error) {
                console.error("Error closing device:", error);
            }

            const devIdx = WebUSBDriver.deviceInUse.indexOf(this.device);
            if (devIdx >= 0) {
                WebUSBDriver.deviceInUse.splice(devIdx, 1);
            }

            this.emit("shutdown");
            this.device = undefined;
        }
    }

    /**
     * Cancels the current read loop by aborting the signal.
     */
    public cancelReadLoop() {
        if (!this.signal.aborted) {
            this.abortController.abort();
            console.log("Read loop abort requested.");
        }
    }

    /**
     * Processes the data received from the USB device.
     *
     * @param {Uint8Array} data The data received from the USB device.
     * @returns {Promise<void>} Resolves when the data has been processed.
     */
    public async read(data: Uint8Array): Promise<void> {
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
     * @param {Uint8Array} data The data to be sent to the USB device.
     * @returns {Promise<void>} Resolves when the data has been written.
     */
    public async write(data: Uint8Array): Promise<void> {
        if (this.device && this.outEndpoint) {
            await this.device.transferOut(this.outEndpoint.endpointNumber, data);
        }
    }

    /**
     * Resets the device and channels, and sends a reset message to the system.
     *
     * @returns {Promise<void>} Resolves when the reset is completed.
     */
    public async reset(): Promise<void> {
        await this.detachAll();
        this.maxChannels = 0;
        this.usedChannels = 0;
        await this.write(Messages.resetSystem());
    }

    /**
     * Attaches a sensor to the driver and assigns it a channel.
     *
     * @param {BaseSensor} sensor The sensor to attach.
     * @param {boolean} forScan Whether the sensor is being attached for scanning.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully attached, otherwise false.
     */
    public async attach(sensor: BaseSensor, forScan: boolean): Promise<boolean> {
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
     * @param {BaseSensor} sensor The sensor to detach.
     * @returns {Promise<boolean>} Resolves with true if the sensor was successfully detached, otherwise false.
     */
    public async detach(sensor: BaseSensor): Promise<boolean> {
        const idx = this.attachedSensors.indexOf(sensor);
        if (idx < 0) {
            return Promise.resolve(false);
        }

        this.usedChannels = this.usedChannels < 0 ? 0 : this.usedChannels - 1;
        this.attachedSensors.splice(idx, 1);

        return Promise.resolve(true);
    }

    /**
     * Checks if a device is currently connected.
     *
     * @returns {Promise<boolean>} Resolves with true if a device is present, otherwise false.
     */
    public async isPresent(): Promise<boolean> {
        return Promise.resolve(!!this.device);
    }

    /**
     * Checks if the device is currently scanning.
     *
     * @returns {Promise<boolean>} Resolves with true if the device is scanning, otherwise false.
     */
    public async isScanning(): Promise<boolean> {
        return Promise.resolve(this.usedChannels === -1);
    }

    /**
     * Detaches all sensors from the driver.
     *
     * @private
     * @returns {Promise<void>} Resolves when all sensors have been detached.
     */
    private async detachAll(): Promise<void> {
        for (const sensor of this.attachedSensors.slice()) {
            await sensor.detach();
        }

        this.attachedSensors = [];
    }

    /**
     * Concatenates two Uint8Array objects into one.
     *
     * @private
     * @param {Uint8Array} arr1 The first array.
     * @param {Uint8Array} arr2 The second array.
     * @returns {Uint8Array} The concatenated result.
     */
    private concatUint8Arrays(arr1: Uint8Array, arr2: Uint8Array): Uint8Array {
        const result = new Uint8Array(arr1.length + arr2.length);
        result.set(arr1, 0);
        result.set(arr2, arr1.length);
        return result;
    }
}
