import { AntPlusScanner } from "../antPlusScanner.js";
import { updateState } from "./speedUtils.js";
import { SpeedScanState } from "./speedScanState.js";
import { SpeedSensor } from "./speedSensor.js";

/**
 * Represents a scanner for Speed sensors.
 * Extends the AntPlusScanner class to handle scanning and state updates for multiple Speed sensors.
 *
 * @category Sensors
 */
export class SpeedScanner extends AntPlusScanner {
    /**
     * Returns the device type code for Speed sensors.
     *
     * @protected
     * @returns {number} The device type code for Speed sensors.
     */
    protected deviceType(): number {
        return SpeedSensor.deviceType;
    }

    /**
     * The wheel circumference in meters, used to calculate speed.
     * @type {number}
     * @default 2.199
     */
    wheelCircumference: number = 2.199; // default 70cm wheel

    /**
     * Sets the wheel circumference for speed calculation.
     *
     * @public
     * @param {number} wheelCircumference - The wheel circumference in meters.
     * @returns {void}
     *
     * @example
     * const scanner = new SpeedScanner();
     * scanner.setWheelCircumference(2.105); // Sets the wheel circumference to 2.105 meters
     */
    public setWheelCircumference(wheelCircumference: number): void {
        this.wheelCircumference = wheelCircumference;
    }

    /**
     * A dictionary to store the states of detected Speed sensors by their device ID.
     * @private
     * @type {{ [id: number]: SpeedScanState }}
     */
    private states: { [id: number]: SpeedScanState } = {};

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
    protected createStateIfNew(deviceId: number): void {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new SpeedScanState(deviceId);
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
    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }

    /**
     * Updates the state of a sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {DataView} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
     * scanner.updateState(12345, dataBuffer); // Updates the state for device ID 12345.
     */
    protected updateState(deviceId: number, data: DataView): void {
        updateState(this, this.states[deviceId], data);
    }
}
