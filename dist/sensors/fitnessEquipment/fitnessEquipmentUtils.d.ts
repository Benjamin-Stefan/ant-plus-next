import { FitnessEquipmentSensorState } from "./fitnessEquipmentSensorState.js";
import { FitnessEquipmentScanState } from "./fitnessEquipmentScanState.js";
import { FitnessEquipmentSensor } from "./fitnessEquipmentSensor.js";
import { FitnessEquipmentScanner } from "./fitnessEquipmentScanner.js";
export declare function updateState(sensor: FitnessEquipmentSensor | FitnessEquipmentScanner, state: FitnessEquipmentSensorState | FitnessEquipmentScanState, data: Buffer): void;
