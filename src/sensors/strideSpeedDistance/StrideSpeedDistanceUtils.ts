/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#528_tab
 * Spec sheet: https://www.thisisant.com/resources/stride-based-speed-and-distance-monitor/
 */

import { StrideSpeedDistanceScanner } from "./StrideSpeedDistanceScanner.js";
import { StrideSpeedDistanceScanState } from "./StrideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./StrideSpeedDistanceSensor.js";
import { StrideSpeedDistanceSensorState } from "./StrideSpeedDistanceSensorState.js";
import { Messages } from "../../utils/messages.js";

export function updateState(sensor: StrideSpeedDistanceSensor | StrideSpeedDistanceScanner, state: StrideSpeedDistanceSensorState | StrideSpeedDistanceScanState, data: Buffer) {
    const page = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA);
    if (page === 1) {
        state.TimeFractional = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
        state.TimeInteger = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
        state.DistanceInteger = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
        state.DistanceFractional = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 4) >>> 4;
        state.SpeedInteger = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 4) & 0x0f;
        state.SpeedFractional = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 5);
        state.StrideCount = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 6);
        state.UpdateLatency = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 7);
    } else if (page >= 2 && page <= 15) {
        state.CadenceInteger = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
        state.CadenceFractional = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 4) >>> 4;
        state.SpeedInteger = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 4) & 0x0f;
        state.SpeedFractional = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 5);
        state.Status = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 7);

        switch (page) {
            case 3:
                state.Calories = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 6);
                break;
            default:
                break;
        }
    }
    sensor.emit("ssddata", state);
    sensor.emit("ssdData", state);
}
