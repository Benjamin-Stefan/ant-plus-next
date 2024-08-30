import { BicyclePowerScanner } from "./bicyclePowerScanner.js";
import { BicyclePowerScanState } from "./bicyclePowerScanState.js";
import { BicyclePowerSensor } from "./bicyclePowerSensor.js";
import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";
export declare function updateState(sensor: BicyclePowerSensor | BicyclePowerScanner, state: BicyclePowerSensorState | BicyclePowerScanState, data: Buffer): void;
