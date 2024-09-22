import { AntPlusScanner } from "../antPlusScanner.js";
/**
 * Represents a scanner for Fitness Equipment sensors.
 * Extends the AntPlusScanner class to handle scanning and state updates for multiple fitness equipment sensors.
 */
export declare class FitnessEquipmentScanner extends AntPlusScanner {
    /**
     * Returns the device type code for Fitness Equipment sensors.
     *
     * @protected
     * @returns {number} The device type code for Fitness Equipment sensors.
     */
    protected deviceType(): number;
    /**
     * A dictionary to store the states of detected Fitness Equipment sensors by their device ID.
     * @private
     * @type {{ [id: number]: FitnessEquipmentScanState }}
     */
    private states;
    /**
     * Creates a new state entry for a sensor if it does not already exist.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     * @example
     * scanner.createStateIfNew(12345); // Creates a new state for device ID 12345 if it does not exist.
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
     * @example
     * scanner.updateRssiAndThreshold(12345, -70, 30); // Updates the RSSI and threshold for device ID 12345.
     */
    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    /**
     * Updates the state of a sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {DataView} data - The raw data buffer received from the sensor.
     * @returns {void}
     * @example
     * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
     * scanner.updateState(12345, dataBuffer); // Updates the state for device ID 12345.
     */
    protected updateState(deviceId: number, data: DataView): void;
}
//# sourceMappingURL=fitnessEquipmentScanner.d.ts.map