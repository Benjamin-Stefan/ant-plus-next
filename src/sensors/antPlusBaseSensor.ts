import { BaseSensor } from "./baseSensor.js";

/**
 * Abstract base class for ANT+ sensors, extending the functionality of the BaseSensor class.
 * This class provides methods to scan and attach ANT+ sensors with specific configurations.
 */
export abstract class AntPlusBaseSensor extends BaseSensor {
    /**
     * Initiates a scan for ANT+ sensors of a specific type.
     *
     * @protected
     * @param {string} type - The type of sensor to scan for.
     * @returns {Promise<void>} A promise that resolves when the scan is complete.
     *
     * @example
     * // Example usage:
     * const sensor = new AntPlusSensor();
     * sensor.scan('heartRate');
     */
    protected async scan(type: string): Promise<void> {
        return await super.scan(type, 57);
    }

    /**
     * Attaches to a specific ANT+ sensor by configuring the channel, type, device ID, device type, transmission type, timeout, and period.
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
        return await super.attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period, 57);
    }
}
