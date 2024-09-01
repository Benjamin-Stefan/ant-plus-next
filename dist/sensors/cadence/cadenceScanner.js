import { updateState } from "./cadenceUtils.js";
import { CadenceScanState } from "./cadenceScanState.js";
import { CadenceSensor } from "./cadenceSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";
/**
 * Represents a scanner for Cadence sensors.
 * Extends the AntPlusScanner class to handle scanning and state updates for multiple cadence sensors.
 */
export class CadenceScanner extends AntPlusScanner {
    constructor() {
        super(...arguments);
        /**
         * The wheel circumference used for cadence calculations, in meters.
         * Defaults to 2.199 meters (70 cm wheel).
         * @type {number}
         */
        this.wheelCircumference = 2.199;
        /**
         * A dictionary to store the states of detected Cadence sensors by their device ID.
         * @private
         * @type {{ [id: number]: CadenceScanState }}
         */
        this.states = {};
    }
    /**
     * Returns the device type code for Cadence sensors.
     *
     * @protected
     * @returns {number} The device type code for Cadence sensors.
     */
    deviceType() {
        return CadenceSensor.deviceType;
    }
    /**
     * Sets the wheel circumference for cadence calculations.
     *
     * @public
     * @param {number} wheelCircumference - The wheel circumference in meters.
     * @returns {void}
     *
     * @example
     * scanner.setWheelCircumference(2.105); // Sets the wheel circumference to 2.105 meters
     */
    setWheelCircumference(wheelCircumference) {
        this.wheelCircumference = wheelCircumference;
    }
    /**
     * Creates a new state entry for a sensor if it does not already exist.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * scanner.createStateIfNew(12345); // Creates a new state for device ID 12345 if it does not exist.
     */
    createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new CadenceScanState(deviceId);
        }
    }
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
    updateRssiAndThreshold(deviceId, rssi, threshold) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }
    /**
     * Updates the state of a sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {Buffer} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
     * scanner.updateState(12345, dataBuffer); // Updates the state for device ID 12345.
     */
    updateState(deviceId, data) {
        updateState(this, this.states[deviceId], data);
    }
}
//# sourceMappingURL=cadenceScanner.js.map