import { AntPlusScanner } from "../antPlusScanner.js";
import { updateState } from "./strideSpeedDistanceUtils.js";
import { StrideSpeedDistanceScanState } from "./strideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./strideSpeedDistanceSensor.js";

/**
 * Represents a scanner for Stride-Based Speed and Distance Monitor (SDM) sensors.
 * Extends the AntPlusScanner class to handle scanning and state updates for multiple SDM sensors.
 *
 * @category Sensors
 */
export class StrideSpeedDistanceScanner extends AntPlusScanner {
    /**
     * Returns the device type code for Stride-Based Speed and Distance Monitor sensors.
     *
     * @protected
     * @returns {number} The device type code for SDM sensors.
     */
    protected deviceType(): number {
        return StrideSpeedDistanceSensor.deviceType;
    }

    /**
     * A dictionary to store the states of detected SDM sensors by their device ID.
     * @private
     * @type {{ [id: number]: StrideSpeedDistanceScanState }}
     */
    private states: { [id: number]: StrideSpeedDistanceScanState } = {};

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
            this.states[deviceId] = new StrideSpeedDistanceScanState(deviceId);
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
