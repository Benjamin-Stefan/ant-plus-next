import { StrideSpeedDistanceScanner } from "./strideSpeedDistanceScanner.js";
import { StrideSpeedDistanceScanState } from "./strideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./strideSpeedDistanceSensor.js";
import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";
import { Messages } from "../../utils/messages.js";

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
export function updateState(sensor: StrideSpeedDistanceSensor | StrideSpeedDistanceScanner, state: StrideSpeedDistanceSensorState | StrideSpeedDistanceScanState, data: DataView) {
    const page = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA);

    if (page === 1) {
        state.TimeFractional = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
        state.TimeInteger = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
        state.DistanceInteger = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
        state.DistanceFractional = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 4) >>> 4;
        state.SpeedInteger = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 4) & 0x0f;
        state.SpeedFractional = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 5);
        state.StrideCount = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 6);
        state.UpdateLatency = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 7);
    } else if (page >= 2 && page <= 15) {
        state.CadenceInteger = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
        state.CadenceFractional = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 4) >>> 4;
        state.SpeedInteger = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 4) & 0x0f;
        state.SpeedFractional = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 5);
        state.Status = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 7);

        switch (page) {
            case 3:
                state.Calories = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 6);
                break;
            default:
                break;
        }
    }

    sensor.emit("ssddata", state);
    sensor.emit("ssdData", state);
}
