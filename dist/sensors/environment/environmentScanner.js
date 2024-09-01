import { updateState } from "./environmentUtils.js";
import { EnvironmentScanState } from "./environmentScanState.js";
import { EnvironmentSensor } from "./environmentSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";
/**
 * Represents a scanner for Environment sensors.
 * Extends the AntPlusScanner class to handle scanning and state updates for multiple environment sensors.
 */
export class EnvironmentScanner extends AntPlusScanner {
    constructor() {
        super(...arguments);
        /**
         * A dictionary to store the states of detected Environment sensors by their device ID.
         * @private
         * @type {{ [id: number]: EnvironmentScanState }}
         */
        this.states = {};
    }
    /**
     * Returns the device type code for Environment sensors.
     *
     * @protected
     * @returns {number} The device type code for Environment sensors.
     */
    deviceType() {
        return EnvironmentSensor.deviceType;
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
            this.states[deviceId] = new EnvironmentScanState(deviceId);
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
//# sourceMappingURL=environmentScanner.js.map