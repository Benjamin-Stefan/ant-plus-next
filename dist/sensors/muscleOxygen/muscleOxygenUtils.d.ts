import { MuscleOxygenSensorState } from "./muscleOxygenSensorState.js";
import { MuscleOxygenScanState } from "./muscleOxygenScanState.js";
import { MuscleOxygenSensor } from "./muscleOxygenSensor.js";
import { MuscleOxygenScanner } from "./muscleOxygenScanner.js";
export declare function updateState(sensor: MuscleOxygenSensor | MuscleOxygenScanner, state: MuscleOxygenSensorState | MuscleOxygenScanState, data: Buffer): void;
