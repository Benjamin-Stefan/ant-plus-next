import { AntPlusScanner } from "../antPlusScanner.js";
/**
 * Represents a scanner for Heart Rate sensors.
 * Extends the AntPlusScanner class to handle scanning and state updates for multiple Heart Rate sensors.
 *
 * @category Sensors
 */
export declare class HeartRateScanner extends AntPlusScanner {
    /**
     * Returns the device type code for Heart Rate sensors.
     *
     * @protected
     * @returns {number} The device type code for Heart Rate sensors.
     */
    protected deviceType(): number;
    /**
     * A dictionary to store the states of detected Heart Rate sensors by their device ID.
     * @private
     * @type {{ [id: number]: HeartRateScanState }}
     */
    private states;
    /**
     * A dictionary to store page information for each detected Heart Rate sensor by their device ID.
     * @private
     * @type {{ [id: number]: Page }}
     */
    private pages;
    /**
     * Creates a new state entry and page information for a sensor if they do not already exist.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * scanner.createStateIfNew(12345); // Creates a new state and page info for device ID 12345 if they do not exist.
     */
    protected createStateIfNew(deviceId: number): void;
    /**
     * Updates the RSSI (Received Signal Strength Indicator) and signal threshold for a specific sensor.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {number} rssi - The received signal strength indicator of the device.
     * @param {number} threshold - The signal threshold value for the device.
     * @returns {void}
     *
     * @example
     * scanner.updateRssiAndThreshold(12345, -70, 30); // Updates the RSSI and threshold for device ID 12345.
     */
    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    /**
     * Updates the state of a sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {Uint8Array} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
     * scanner.updateState(12345, dataBuffer); // Updates the state for device ID 12345.
     */
    protected updateState(deviceId: number, data: DataView): void;
}
//# sourceMappingURL=heartRateScanner.d.ts.map