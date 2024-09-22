import { EnvironmentScanner } from "./environmentScanner.js";
import { EnvironmentScanState } from "./environmentScanState.js";
import { EnvironmentSensor } from "./environmentSensor.js";
import { EnvironmentSensorState } from "./environmentSensorState.js";
/**
 * Updates the state of an Environment sensor or scanner based on incoming data.
 * Decodes the data buffer and updates the sensor state accordingly.
 *
 * @param {EnvironmentSensor | EnvironmentScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {EnvironmentSensorState | EnvironmentScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 */
export declare function updateState(sensor: EnvironmentSensor | EnvironmentScanner, state: EnvironmentSensorState | EnvironmentScanState, data: DataView): void;
//# sourceMappingURL=environmentUtils.d.ts.map