import { StrideSpeedDistanceScanner } from "./strideSpeedDistanceScanner.js";
import { StrideSpeedDistanceScanState } from "./strideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./strideSpeedDistanceSensor.js";
import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";
/**
 * Updates the state of a Stride-Based Speed and Distance Monitor (SDM) sensor or scanner
 * based on the data received from the sensor.
 *
 * @param {StrideSpeedDistanceSensor | StrideSpeedDistanceScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {StrideSpeedDistanceSensorState | StrideSpeedDistanceScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new StrideSpeedDistanceSensor();
 * const state = new StrideSpeedDistanceSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export declare function updateState(sensor: StrideSpeedDistanceSensor | StrideSpeedDistanceScanner, state: StrideSpeedDistanceSensorState | StrideSpeedDistanceScanState, data: DataView): void;
//# sourceMappingURL=strideSpeedDistanceUtils.d.ts.map