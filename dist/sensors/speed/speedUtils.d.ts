import { SpeedScanner } from "./speedScanner.js";
import { SpeedScanState } from "./speedScanState.js";
import { SpeedSensor } from "./speedSensor.js";
import { SpeedSensorState } from "./speedSensorState.js";
/**
 * Updates the state of a Speed sensor or scanner based on the incoming data.
 * Decodes various pages of data to update the state, including cumulative operating time,
 * manufacturer details, hardware and software versions, battery status, motion status, and speed.
 *
 * @param {SpeedSensor | SpeedScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {SpeedSensorState | SpeedScanState} state - The current state of the sensor or scanner.
 * @param {Buffer} data - The raw data buffer received from the sensor.
 * @returns {void}
 * @example
 * const sensor = new SpeedSensor();
 * const state = new SpeedSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export declare function updateState(sensor: SpeedSensor | SpeedScanner, state: SpeedSensorState | SpeedScanState, data: Buffer): void;
