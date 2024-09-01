import { SpeedCadenceScanner } from "./speedCadenceScanner.js";
import { SpeedCadenceScanState } from "./speedCadenceScanState.js";
import { SpeedCadenceSensor } from "./speedCadenceSensor.js";
import { SpeedCadenceSensorState } from "./speedCadenceSensorState.js";
/**
 * Updates the state of a Speed and Cadence sensor or scanner based on the incoming data.
 * Calculates the cadence and speed based on the revolution counts and event times provided in the data buffer.
 *
 * @param {SpeedCadenceSensor | SpeedCadenceScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {SpeedCadenceSensorState | SpeedCadenceScanState} state - The current state of the sensor or scanner.
 * @param {Buffer} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new SpeedCadenceSensor();
 * const state = new SpeedCadenceSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export declare function updateState(sensor: SpeedCadenceSensor | SpeedCadenceScanner, state: SpeedCadenceSensorState | SpeedCadenceScanState, data: Buffer): void;
