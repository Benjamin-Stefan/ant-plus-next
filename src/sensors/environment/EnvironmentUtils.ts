/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#524_tab
 * Spec sheet: https://www.thisisant.com/resources/environment/
 */

import { EnvironmentScanner } from "./environmentScanner.js";
import { EnvironmentScanState } from "./environmentScanState.js";
import { EnvironmentSensor } from "./environmentSensor.js";
import { EnvironmentSensorState } from "./environmentSensorState.js";
import { Messages } from "../../utils/messages.js";

export function updateState(sensor: EnvironmentSensor | EnvironmentScanner, state: EnvironmentSensorState | EnvironmentScanState, data: Buffer) {
    const page = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA);
    if (page === 1) {
        state.EventCount = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
        state.Temperature = data.readInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6) / 100;
    }
    sensor.emit("envdata", state);
    sensor.emit("envData", state);
}
