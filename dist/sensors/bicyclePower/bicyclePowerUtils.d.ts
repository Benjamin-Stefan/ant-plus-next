import { BicyclePowerScanner } from "./bicyclePowerScanner.js";
import { BicyclePowerScanState } from "./bicyclePowerScanState.js";
import { BicyclePowerSensor } from "./bicyclePowerSensor.js";
import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";
/**
 * Updates the state of a Bicycle Power sensor or scanner based on incoming data.
 * Processes various types of data pages to update the sensor state, including calibration data,
 * pedal power, cadence, and torque calculations.
 *
 * @param {BicyclePowerSensor | BicyclePowerScanner} sensor - The sensor or scanner to update.
 * @param {BicyclePowerSensorState | BicyclePowerScanState} state - The state object representing the current state of the sensor.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 */
export declare function updateState(sensor: BicyclePowerSensor | BicyclePowerScanner, state: BicyclePowerSensorState | BicyclePowerScanState, data: DataView): void;
//# sourceMappingURL=bicyclePowerUtils.d.ts.map