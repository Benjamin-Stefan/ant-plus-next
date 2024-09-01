import { MuscleOxygenSensorState } from "./muscleOxygenSensorState.js";
import { MuscleOxygenScanState } from "./muscleOxygenScanState.js";
import { MuscleOxygenSensor } from "./muscleOxygenSensor.js";
import { MuscleOxygenScanner } from "./muscleOxygenScanner.js";
/**
 * Updates the state of a Muscle Oxygen sensor or scanner based on the incoming data.
 * Decodes various pages of data to update the state, including event counts, sensor capabilities,
 * measurement intervals, total hemoglobin concentration, and battery status.
 *
 * @param {MuscleOxygenSensor | MuscleOxygenScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {MuscleOxygenSensorState | MuscleOxygenScanState} state - The current state of the sensor or scanner.
 * @param {Buffer} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new MuscleOxygenSensor();
 * const state = new MuscleOxygenSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export declare function updateState(sensor: MuscleOxygenSensor | MuscleOxygenScanner, state: MuscleOxygenSensorState | MuscleOxygenScanState, data: Buffer): void;
