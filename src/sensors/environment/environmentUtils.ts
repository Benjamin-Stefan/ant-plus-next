import { EnvironmentScanner } from "./environmentScanner.js";
import { EnvironmentScanState } from "./environmentScanState.js";
import { EnvironmentSensor } from "./environmentSensor.js";
import { EnvironmentSensorState } from "./environmentSensorState.js";
import { Messages } from "../../utils/messages.js";

/**
 * Updates the state of an Environment sensor or scanner based on incoming data.
 * Decodes the data buffer and updates the sensor state accordingly.
 *
 * @param {EnvironmentSensor | EnvironmentScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {EnvironmentSensorState | EnvironmentScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 */
export function updateState(sensor: EnvironmentSensor | EnvironmentScanner, state: EnvironmentSensorState | EnvironmentScanState, data: DataView): void {
    const page = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA);

    if (page === 1) {
        state.EventCount = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
        state.Temperature = data.getInt16(Messages.BUFFER_INDEX_MSG_DATA + 6, true) / 100; // true for little-endian
    }

    sensor.emit("envdata", state);
    sensor.emit("envData", state);
}
