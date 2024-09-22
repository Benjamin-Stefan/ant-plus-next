import { CadenceScanner } from "./cadenceScanner.js";
import { CadenceScanState } from "./cadenceScanState.js";
import { CadenceSensor } from "./cadenceSensor.js";
import { CadenceSensorState } from "./cadenceSensorState.js";
/**
 * Updates the state of a Cadence sensor or scanner based on incoming data.
 * Decodes the data buffer and updates the sensor state accordingly, including
 * cumulative values such as operating time, manufacturer details, battery status,
 * and calculated cadence.
 *
 * @param {CadenceSensor | CadenceScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {CadenceSensorState | CadenceScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 */
export declare function updateState(sensor: CadenceSensor | CadenceScanner, state: CadenceSensorState | CadenceScanState, data: DataView): void;
//# sourceMappingURL=cadenceUtils.d.ts.map