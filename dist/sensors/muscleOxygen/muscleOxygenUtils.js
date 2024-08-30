/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#521_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-power/
 */
import { Messages } from "../../utils/messages.js";
export function updateState(sensor, state, data) {
    const oldEventCount = state._EventCount || 0;
    const page = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA);
    switch (page) {
        case 0x01: {
            let eventCount = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            const notifications = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const capabilities = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 3);
            const total = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 4) & 0xfff;
            const previous = (data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 5) >> 4) & 0x3ff;
            const current = (data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6) >> 6) & 0x3ff;
            if (eventCount !== oldEventCount) {
                state._EventCount = eventCount;
                if (oldEventCount > eventCount) {
                    //Hit rollover value
                    eventCount += 255;
                }
            }
            state.UTCTimeRequired = (notifications & 0x01) === 0x01;
            state.SupportANTFS = (capabilities & 0x01) === 0x01;
            switch ((capabilities >> 1) & 0x7) {
                case 1:
                    state.MeasurementInterval = 0.25;
                    break;
                case 2:
                    state.MeasurementInterval = 0.5;
                    break;
                case 3:
                    state.MeasurementInterval = 1;
                    break;
                case 4:
                    state.MeasurementInterval = 2;
                    break;
                default:
                    delete state.MeasurementInterval;
            }
            switch (total) {
                case 0xffe:
                    state.TotalHemoglobinConcentration = "AmbientLightTooHigh";
                    break;
                case 0xfff:
                    state.TotalHemoglobinConcentration = "Invalid";
                    break;
                default:
                    state.TotalHemoglobinConcentration = total;
            }
            switch (previous) {
                case 0x3fe:
                    state.PreviousSaturatedHemoglobinPercentage = "AmbientLightTooHigh";
                    break;
                case 0x3ff:
                    state.PreviousSaturatedHemoglobinPercentage = "Invalid";
                    break;
                default:
                    state.PreviousSaturatedHemoglobinPercentage = previous;
            }
            switch (current) {
                case 0x3fe:
                    state.CurrentSaturatedHemoglobinPercentage = "AmbientLightTooHigh";
                    break;
                case 0x3ff:
                    state.CurrentSaturatedHemoglobinPercentage = "Invalid";
                    break;
                default:
                    state.CurrentSaturatedHemoglobinPercentage = current;
            }
            break;
        }
        case 0x50: {
            state.HwVersion = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            state.ManId = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 4);
            state.ModelNum = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6);
            break;
        }
        case 0x51: {
            const swRevSup = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const swRevMain = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            const serial = data.readInt32LE(Messages.BUFFER_INDEX_MSG_DATA + 4);
            state.SwVersion = swRevMain;
            if (swRevSup !== 0xff) {
                state.SwVersion += swRevSup / 1000;
            }
            if (serial !== 0xffffffff) {
                state.SerialNumber = serial;
            }
            break;
        }
        case 0x52: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const batteryId = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const operatingTime = data.readUInt32LE(Messages.BUFFER_INDEX_MSG_DATA + 3) & 0xffffff;
            const batteryFrac = data.readInt32LE(Messages.BUFFER_INDEX_MSG_DATA + 6);
            const batteryStatus = data.readInt32LE(Messages.BUFFER_INDEX_MSG_DATA + 7);
            state.OperatingTime = operatingTime * ((batteryStatus & 0x80) === 0x80 ? 2 : 16);
            state.BatteryVoltage = (batteryStatus & 0x0f) + batteryFrac / 256;
            const batteryFlags = (batteryStatus & 0x70) >>> 4;
            switch (batteryFlags) {
                case 1:
                    state.BatteryStatus = "New";
                    break;
                case 2:
                    state.BatteryStatus = "Good";
                    break;
                case 3:
                    state.BatteryStatus = "Ok";
                    break;
                case 4:
                    state.BatteryStatus = "Low";
                    break;
                case 5:
                    state.BatteryStatus = "Critical";
                    break;
                default:
                    state.BatteryVoltage = undefined;
                    state.BatteryStatus = "Invalid";
                    break;
            }
            break;
        }
        default:
            return;
    }
    if (page !== 0x01 || state._EventCount !== oldEventCount) {
        sensor.emit("oxygenData", state);
    }
}
//# sourceMappingURL=muscleOxygenUtils.js.map