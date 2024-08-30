/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#524_tab
 * Spec sheet: https://www.thisisant.com/resources/environment/
 */
import { Messages } from "../../utils/messages.js";
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