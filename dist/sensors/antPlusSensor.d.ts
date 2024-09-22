import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { USBDriverBase } from "../types/usbDriverBase.js";
/**
 * Abstract base class for managing a specific ANT+ sensor, extending the functionality
 * of the AntPlusBaseSensor class. Provides methods for attaching sensors and decoding data.
 */
export declare abstract class AntPlusSensor extends AntPlusBaseSensor {
    /**
     * Constructs an instance of the AntPlusSensor class.
     *
     * @param {USBDriverBase} stick - The USB driver instance used for communication with the ANT+ stick.
     */
    constructor(stick: USBDriverBase);
    /**
     * Unsupported method for scanning sensors. Throws an error when called.
     *
     * @protected
     * @throws {Error} Always throws an error indicating that scanning is unsupported.
     */
    protected scan(): Promise<void>;
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
    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number): Promise<void>;
    /**
     * Decodes the incoming data from the ANT+ sensor and updates the sensor state.
     *
     * @private
     * @param {DataView} data - The raw data buffer received from the ANT+ sensor.
     * @returns {void}
     *
     * @example
     * // Example usage:
     * const dataBuffer = getDataFromSensor(); // assume this function gets data from a sensor
     * decodeData(dataBuffer);
     */
    private decodeData;
}
//# sourceMappingURL=antPlusSensor.d.ts.map