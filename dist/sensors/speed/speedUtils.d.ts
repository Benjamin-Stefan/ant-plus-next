import { SpeedScanner } from "./speedScanner.js";
import { SpeedScanState } from "./speedScanState.js";
import { SpeedSensor } from "./speedSensor.js";
import { SpeedSensorState } from "./speedSensorState.js";
export declare function updateState(sensor: SpeedSensor | SpeedScanner, state: SpeedSensorState | SpeedScanState, data: Buffer): void;
