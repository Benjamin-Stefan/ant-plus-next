import { AntPlusScanner } from "../antPlusScanner.js";
/**
 * Represents a scanner for Bicycle Power sensors.
 * Extends the AntPlusScanner class to handle scanning for multiple Bicycle Power sensors.
 *
 * @category Sensors
 */
export declare class BicyclePowerScanner extends AntPlusScanner {
    /**
     * Returns the device type for Bicycle Power sensors.
     *
     * @protected
     * @returns {number} The device type identifier for Bicycle Power sensors.
     */
    protected deviceType(): number;
    /**
     * A collection of states for each detected Bicycle Power sensor, keyed by device ID.
     * @private
     * @type {{ [id: number]: BicyclePowerScanState }}
     */
    private states;
    /**
     * Creates a new state entry for a Bicycle Power sensor if it does not already exist.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     */
    protected createStateIfNew(deviceId: number): void;
    /**
     * Updates the RSSI (Received Signal Strength Indicator) and threshold for a specific Bicycle Power sensor.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {number} rssi - The received signal strength indicator value.
     * @param {number} threshold - The threshold value for the RSSI.
     * @returns {void}
     */
    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    /**
     * Updates the state of a specific Bicycle Power sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {DataView} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // assume this function gets data from a sensor
     * scanner.updateState(12345, dataBuffer);
     */
    protected updateState(deviceId: number, data: DataView): void;
}
//# sourceMappingURL=bicyclePowerScanner.d.ts.map