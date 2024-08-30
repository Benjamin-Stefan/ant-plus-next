import { CadenceScanner } from "./cadenceScanner.js";
import { CadenceScanState } from "./cadenceScanState.js";
import { CadenceSensor } from "./cadenceSensor.js";
import { CadenceSensorState } from "./cadenceSensorState.js";
export declare function updateState(sensor: CadenceSensor | CadenceScanner, state: CadenceSensorState | CadenceScanState, data: Buffer): void;
