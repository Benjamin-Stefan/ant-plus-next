import { SpeedCadenceScanner } from "./speedCadenceScanner.js";
import { SpeedCadenceScanState } from "./speedCadenceScanState.js";
import { SpeedCadenceSensor } from "./speedCadenceSensor.js";
import { SpeedCadenceSensorState } from "./speedCadenceSensorState.js";
export declare function updateState(sensor: SpeedCadenceSensor | SpeedCadenceScanner, state: SpeedCadenceSensorState | SpeedCadenceScanState, data: Buffer): void;
