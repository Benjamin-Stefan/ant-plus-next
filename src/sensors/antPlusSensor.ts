import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
import { USBDriverBase } from "../types/usbDriverBase.js";

/**
 * Abstract base class for managing a specific ANT+ sensor, extending the functionality
 * of the AntPlusBaseSensor class. Provides methods for attaching sensors and decoding data.
 */
export abstract class AntPlusSensor extends AntPlusBaseSensor {
    /**
     * Constructs an instance of the AntPlusSensor class.
     *
     * @param {USBDriverBase} stick - The USB driver instance used for communication with the ANT+ stick.
     */
    constructor(stick: USBDriverBase) {
        super(stick);
        this.decodeDataCbk = this.decodeData.bind(this);
    }

    /**
     * Unsupported method for scanning sensors. Throws an error when called.
     *
     * @protected
     * @throws {Error} Always throws an error indicating that scanning is unsupported.
     */
    protected scan(): Promise<void> {
        throw new Error("scanning unsupported");
    }

    /**
     * Attaches to a specific ANT+ sensor by configuring the channel, type, device ID, device type,
     * transmission type, timeout, and period.
     *
     * @protected
     * @param {number} channel - The channel number to use for communication with the sensor.
     * @param {string} type - The type of sensor to attach to.
     * @param {number} deviceId - The unique ID of the device to attach to.
     * @param {number} deviceType - The type of the device (e.g., heart rate monitor, speed sensor).
     * @param {number} transmissionType - The transmission type used by the sensor.
     * @param {number} timeout - The timeout period for communication in seconds.
     * @param {number} period - The communication period with the sensor in milliseconds.
     * @returns {Promise<void>} A promise that resolves when the sensor is successfully attached.
     *
     * @example
     * // Example usage:
     * const sensor = new AntPlusSensor();
     * sensor.attachSensor(1, 'heartRate', 12345, 120, 5, 60, 8070);
     */
    protected async attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number): Promise<void> {
        return await super.attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period);
    }

    /**
     * Decodes the incoming data from the ANT+ sensor and updates the sensor state.
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
    private async decodeData(data: Buffer): Promise<void> {
        switch (data.readUInt8(Messages.BUFFER_INDEX_MSG_TYPE)) {
            case Constants.MESSAGE_CHANNEL_BROADCAST_DATA:
            case Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA:
            case Constants.MESSAGE_CHANNEL_BURST_DATA:
                if (this.deviceId === 0 && this.channel) {
                    await this.write(Messages.requestMessage(this.channel, Constants.MESSAGE_CHANNEL_ID));
                }
                this.updateState(this.deviceId, data);
                break;
            case Constants.MESSAGE_CHANNEL_ID:
                this.deviceId = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA);
                this.transmissionType = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            default:
                break;
        }
    }
}
