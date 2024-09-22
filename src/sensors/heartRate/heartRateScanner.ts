import { Page, PageState, updateState } from "./heartRateUtils.js";
import { HeartRateScannerState } from "./heartRateScannerState.js";
import { HeartRateSensor } from "./heartRateSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";

/**
 * Represents a scanner for Heart Rate sensors.
 * Extends the AntPlusScanner class to handle scanning and state updates for multiple Heart Rate sensors.
 */
export class HeartRateScanner extends AntPlusScanner {
    /**
     * Returns the device type code for Heart Rate sensors.
     *
     * @protected
     * @returns {number} The device type code for Heart Rate sensors.
     */
    protected deviceType(): number {
        return HeartRateSensor.deviceType;
    }

    /**
     * A dictionary to store the states of detected Heart Rate sensors by their device ID.
     * @private
     * @type {{ [id: number]: HeartRateScannerState }}
     */
    private states: { [id: number]: HeartRateScannerState } = {};

    /**
     * A dictionary to store page information for each detected Heart Rate sensor by their device ID.
     * @private
     * @type {{ [id: number]: Page }}
     */
    private pages: { [id: number]: Page } = {};

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
    protected createStateIfNew(deviceId: number): void {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new HeartRateScannerState(deviceId);
        }

        if (!this.pages[deviceId]) {
            this.pages[deviceId] = { oldPage: -1, pageState: PageState.INIT_PAGE };
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
     * @param {Uint8Array} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
     * scanner.updateState(12345, dataBuffer); // Updates the state for device ID 12345.
     */
    protected updateState(deviceId: number, data: DataView): void {
        updateState(this, this.states[deviceId], this.pages[deviceId], data);
    }
}
