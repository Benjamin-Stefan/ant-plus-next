import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
import { USBDriver } from "../core/usbDriver.js";

/**
 * Abstract base class for scanning and decoding data from ANT+ sensors.
 * This class provides methods to scan for sensors, handle sensor data, and manage sensor states.
 */
export abstract class AntPlusScanner extends AntPlusBaseSensor {
    /**
     * Returns the type of device being scanned for.
     *
     * @protected
     * @returns {number} The numeric code representing the device type.
     */
    protected abstract deviceType(): number;

    /**
     * Creates a new state for the device if it does not already exist.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the device.
     */
    protected abstract createStateIfNew(deviceId: number): void;

    /**
     * Updates the RSSI (Received Signal Strength Indicator) and the signal threshold for the specified device.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the device.
     * @param {number} rssi - The received signal strength indicator of the device.
     * @param {number} threshold - The signal threshold value for the device.
     */
    protected abstract updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;

    /**
     * Constructs an instance of the AntPlusScanner class.
     *
     * @param {USBDriver} stick - The USB driver instance used for communication with the ANT+ stick.
     */
    constructor(stick: USBDriver) {
        super(stick);
        this.decodeDataCbk = this.decodeData.bind(this);
    }

    /**
     * Initiates a scan for ANT+ sensors by receiving broadcast messages.
     *
     * @public
     * @returns {Promise<void>} A promise that resolves when the scanning process is complete.
     *
     * @example
     * // Example usage:
     * const scanner = new AntPlusScanner();
     * scanner.scan();
     */
    public scan() {
        return super.scan("receive");
    }

    /**
     * Unsupported method for attaching to a sensor. Throws an error when called.
     *
     * @protected
     * @throws {Error} Always throws an error indicating that attaching is unsupported.
     */
    protected attach() {
        throw new Error("attach unsupported");
    }

    /**
     * Unsupported method for sending data to a sensor. Throws an error when called.
     *
     * @protected
     * @throws {Error} Always throws an error indicating that sending is unsupported.
     */
    protected send() {
        throw new Error("send unsupported");
    }

    /**
     * Decodes the incoming data from the ANT+ sensors and updates the sensor state.
     *
     * @private
     * @param {Buffer} data - The raw data buffer received from the ANT+ sensor.
     * @returns {void}
     *
     * @example
     * // Example usage:
     * const dataBuffer = getDataFromSensor(); // assume this function gets data from a sensor
     * decodeData(dataBuffer);
     */
    private decodeData(data: Buffer) {
        if (data.length <= Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 3 || !(data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN) & 0x80)) {
            console.log("wrong message format", data.toString("hex"));
            return;
        }

        const deviceId = data.readUInt16LE(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 1);
        const deviceType = data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 3);

        if (deviceType !== this.deviceType()) {
            return;
        }

        this.createStateIfNew(deviceId);

        if (data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN) & 0x40) {
            if (data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 5) === 0x20) {
                this.updateRssiAndThreshold(deviceId, data.readInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 6), data.readInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 7));
            }
        }

        switch (data.readUInt8(Messages.BUFFER_INDEX_MSG_TYPE)) {
            case Constants.MESSAGE_CHANNEL_BROADCAST_DATA:
            case Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA:
            case Constants.MESSAGE_CHANNEL_BURST_DATA:
                this.updateState(deviceId, data);
                break;
            default:
                break;
        }
    }
}
