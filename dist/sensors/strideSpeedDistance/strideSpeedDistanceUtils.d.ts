import { StrideSpeedDistanceScanner } from "./strideSpeedDistanceScanner.js";
import { StrideSpeedDistanceScanState } from "./strideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./strideSpeedDistanceSensor.js";
import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";
export declare function updateState(sensor: StrideSpeedDistanceSensor | StrideSpeedDistanceScanner, state: StrideSpeedDistanceSensorState | StrideSpeedDistanceScanState, data: Buffer): void;
