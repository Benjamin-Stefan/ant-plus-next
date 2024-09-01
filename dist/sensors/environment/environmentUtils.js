import { Messages } from "../../utils/messages.js";
/**
 * Updates the state of an Environment sensor or scanner based on incoming data.
 * Decodes the data buffer and updates the sensor state accordingly.
 *
 * @param {EnvironmentSensor | EnvironmentScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {EnvironmentSensorState | EnvironmentScanState} state - The current state of the sensor or scanner.
 * @param {Buffer} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new EnvironmentSensor();
 * const state = new EnvironmentSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer); // Updates the state based on the received data.
 */
export function updateState(sensor, state, data) {
    const page = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA);
    if (page === 1) {
        state.EventCount = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
        state.Temperature = data.readInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6) / 100;
    }
    sensor.emit("envdata", state);
    sensor.emit("envData", state);
}
//# sourceMappingURL=environmentUtils.js.map