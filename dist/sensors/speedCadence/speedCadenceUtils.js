import { Messages } from "../../utils/messages.js";
/**
 * Updates the state of a Speed and Cadence sensor or scanner based on the incoming data.
 * Calculates the cadence and speed based on the revolution counts and event times provided in the data buffer.
 *
 * @param {SpeedCadenceSensor | SpeedCadenceScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {SpeedCadenceSensorState | SpeedCadenceScanState} state - The current state of the sensor or scanner.
 * @param {Buffer} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new SpeedCadenceSensor();
 * const state = new SpeedCadenceSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export function updateState(sensor, state, data) {
    var _a, _b, _c, _d;
    // Get old state for calculating cumulative values
    const oldCadenceTime = (_a = state.CadenceEventTime) !== null && _a !== void 0 ? _a : 0;
    const oldCadenceCount = (_b = state.CumulativeCadenceRevolutionCount) !== null && _b !== void 0 ? _b : 0;
    const oldSpeedTime = (_c = state.SpeedEventTime) !== null && _c !== void 0 ? _c : 0;
    const oldSpeedCount = (_d = state.CumulativeSpeedRevolutionCount) !== null && _d !== void 0 ? _d : 0;
    let cadenceTime = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA);
    let cadenceCount = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 2);
    let speedEventTime = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 4);
    let speedRevolutionCount = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6);
    if (cadenceTime !== oldCadenceTime) {
        state.CadenceEventTime = cadenceTime;
        state.CumulativeCadenceRevolutionCount = cadenceCount;
        if (oldCadenceTime > cadenceTime) {
            // Hit rollover value
            cadenceTime += 1024 * 64;
        }
        if (oldCadenceCount > cadenceCount) {
            // Hit rollover value
            cadenceCount += 1024 * 64;
        }
        const cadence = (60 * (cadenceCount - oldCadenceCount) * 1024) / (cadenceTime - oldCadenceTime);
        if (!isNaN(cadence)) {
            state.CalculatedCadence = cadence;
            sensor.emit("cadenceData", state);
        }
    }
    if (speedEventTime !== oldSpeedTime) {
        state.SpeedEventTime = speedEventTime;
        state.CumulativeSpeedRevolutionCount = speedRevolutionCount;
        if (oldSpeedTime > speedEventTime) {
            // Hit rollover value
            speedEventTime += 1024 * 64;
        }
        if (oldSpeedCount > speedRevolutionCount) {
            // Hit rollover value
            speedRevolutionCount += 1024 * 64;
        }
        const distance = sensor.wheelCircumference * (speedRevolutionCount - oldSpeedCount);
        state.CalculatedDistance = distance;
        // Calculate speed in m/sec
        const speed = (distance * 1024) / (speedEventTime - oldSpeedTime);
        if (!isNaN(speed)) {
            state.CalculatedSpeed = speed;
            sensor.emit("speedData", state);
        }
    }
}
//# sourceMappingURL=speedCadenceUtils.js.map