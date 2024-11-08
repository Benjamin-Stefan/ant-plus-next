import { HeartRateScanner } from "./heartRateScanner.js";
import { HeartRateScanState } from "./heartRateScanState.js";
import { HeartRateSensor } from "./heartRateSensor.js";
import { HeartRateSensorState } from "./heartRateSensorState.js";
export declare enum PageState {
    INIT_PAGE = 0,
    STD_PAGE = 1,
    EXT_PAGE = 2
}
export type Page = {
    oldPage: number;
    pageState: PageState;
};
/**
 * Updates the state of a Heart Rate sensor or scanner based on incoming data.
 * Decodes various pages of data to update the state, including operating time, manufacturer details,
 * battery status, heart rate data, and more.
 *
 * @param {HeartRateSensor | HeartRateScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {HeartRateSensorState | HeartRateScanState} state - The current state of the sensor or scanner.
 * @param {Page} page - The page information containing the current and old page number.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new HeartRateSensor();
 * const state = new HeartRateSensorState(12345);
 * const page = { oldPage: 0, pageState: PageState.INIT_PAGE };
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, page, dataBuffer);
 */
export declare function updateState(sensor: HeartRateSensor | HeartRateScanner, state: HeartRateSensorState | HeartRateScanState, page: Page, data: DataView): void;
//# sourceMappingURL=heartRateUtils.d.ts.map