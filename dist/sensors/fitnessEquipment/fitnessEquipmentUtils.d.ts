import { FitnessEquipmentSensorState } from "./fitnessEquipmentSensorState.js";
import { FitnessEquipmentScanState } from "./fitnessEquipmentScanState.js";
import { FitnessEquipmentSensor } from "./fitnessEquipmentSensor.js";
import { FitnessEquipmentScanner } from "./fitnessEquipmentScanner.js";
/**
 * Updates the state of the fitness equipment sensor or scanner based on the received data.
 *
 * @param {FitnessEquipmentSensor | FitnessEquipmentScanner} sensor - The sensor or scanner instance to update.
 * @param {FitnessEquipmentSensorState | FitnessEquipmentScanState} state - The current state of the sensor or scanner.
 * @param {Buffer} data - The raw data buffer received from the fitness equipment.
 * @returns {void}
 *
 * @example
 * updateState(sensor, state, data);
 */
export declare function updateState(sensor: FitnessEquipmentSensor | FitnessEquipmentScanner, state: FitnessEquipmentSensorState | FitnessEquipmentScanState, data: Buffer): void;
