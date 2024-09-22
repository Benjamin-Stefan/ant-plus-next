import { SpeedCadenceScanner } from "./speedCadenceScanner.js";
import { SpeedCadenceScanState } from "./speedCadenceScanState.js";
import { SpeedCadenceSensor } from "./speedCadenceSensor.js";
import { SpeedCadenceSensorState } from "./speedCadenceSensorState.js";
import { Messages } from "../../utils/messages.js";

/**
 * Updates the state of a Speed and Cadence sensor or scanner based on the incoming data.
 * Calculates the cadence and speed based on the revolution counts and event times provided in the data buffer.
 *
 * @param {SpeedCadenceSensor | SpeedCadenceScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {SpeedCadenceSensorState | SpeedCadenceScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new SpeedCadenceSensor();
 * const state = new SpeedCadenceSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export function updateState(sensor: SpeedCadenceSensor | SpeedCadenceScanner, state: SpeedCadenceSensorState | SpeedCadenceScanState, data: DataView) {
    // Get old state for calculating cumulative values
    const oldCadenceTime = state.CadenceEventTime ?? 0;
    const oldCadenceCount = state.CumulativeCadenceRevolutionCount ?? 0;
    const oldSpeedTime = state.SpeedEventTime ?? 0;
    const oldSpeedCount = state.CumulativeSpeedRevolutionCount ?? 0;

    let cadenceTime = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA, true);
    let cadenceCount = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 2, true);
    let speedEventTime = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 4, true);
    let speedRevolutionCount = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 6, true);

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
