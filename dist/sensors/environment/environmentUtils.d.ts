import { EnvironmentScanner } from "./environmentScanner.js";
import { EnvironmentScanState } from "./environmentScanState.js";
import { EnvironmentSensor } from "./environmentSensor.js";
import { EnvironmentSensorState } from "./environmentSensorState.js";
export declare function updateState(sensor: EnvironmentSensor | EnvironmentScanner, state: EnvironmentSensorState | EnvironmentScanState, data: Buffer): void;
