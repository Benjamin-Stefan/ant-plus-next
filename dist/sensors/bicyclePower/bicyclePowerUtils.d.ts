import { BicyclePowerScanner } from "./bicyclePowerScanner.js";
import { BicyclePowerScanState } from "./bicyclePowerScanState.js";
import { BicyclePowerSensor } from "./bicyclePowerSensor.js";
import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";
/**
 * Updates the state of a Bicycle Power sensor or scanner based on incoming data.
 * Processes various types of data pages to update the sensor state, including calibration data,
 * pedal power, cadence, and torque calculations.
 *
 * @param {BicyclePowerSensor | BicyclePowerScanner} sensor - The sensor or scanner to update.
 * @param {BicyclePowerSensorState | BicyclePowerScanState} state - The state object representing the current state of the sensor.
 * @param {Buffer} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new BicyclePowerSensor();
 * const state = new BicyclePowerSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export declare function updateState(sensor: BicyclePowerSensor | BicyclePowerScanner, state: BicyclePowerSensorState | BicyclePowerScanState, data: Buffer): void;
