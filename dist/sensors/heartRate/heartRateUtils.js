/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#526_tab
 * Spec sheet: https://www.thisisant.com/resources/heart-rate-monitor/
 */
import { Messages } from "../../utils/messages.js";
export var PageState;
(function (PageState) {
    PageState[PageState["INIT_PAGE"] = 0] = "INIT_PAGE";
    PageState[PageState["STD_PAGE"] = 1] = "STD_PAGE";
    PageState[PageState["EXT_PAGE"] = 2] = "EXT_PAGE";
})(PageState || (PageState = {}));
const TOGGLE_MASK = 0x80;
export function updateState(sensor, state, page, data) {
    const pageNum = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA);
    if (page.pageState === PageState.INIT_PAGE) {
        page.pageState = PageState.STD_PAGE; // change the state to STD_PAGE and allow the checking of old and new pages
        // decode with pages if the page byte or toggle bit has changed
    }
    else if (pageNum !== page.oldPage || page.pageState === PageState.EXT_PAGE) {
        page.pageState = PageState.EXT_PAGE; // set the state to use the extended page format
        switch (pageNum & ~TOGGLE_MASK //check the new pages and remove the toggle bit
        ) {
            case 1:
                //decode the cumulative operating time
                state.OperatingTime = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
                state.OperatingTime |= data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2) << 8;
                state.OperatingTime |= data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3) << 16;
                state.OperatingTime *= 2;
                break;
            case 2:
                //decode the Manufacturer ID
                state.ManId = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
                //decode the 4 byte serial number
                state.SerialNumber = state.DeviceId;
                state.SerialNumber |= data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 2) << 16;
                state.SerialNumber >>>= 0;
                break;
            case 3:
                //decode HW version, SW version, and model number
                state.HwVersion = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
                state.SwVersion = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                state.ModelNum = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            case 4:
                //decode the previous heart beat measurement time
                state.PreviousBeat = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 2);
                break;
            case 5:
                state.IntervalAverage = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
                state.IntervalMax = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                state.SessionAverage = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            case 6:
                state.SupportedFeatures = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                state.EnabledFeatures = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            case 7: {
                const batteryLevel = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
                const batteryFrac = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                const batteryStatus = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                if (batteryLevel !== 0xff) {
                    state.BatteryLevel = batteryLevel;
                }
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
                break;
        }
    }
    // decode the last four bytes of the HRM format, the first byte of this message is the channel number
    DecodeDefaultHRM(state, data.slice(Messages.BUFFER_INDEX_MSG_DATA + 4));
    page.oldPage = pageNum;
    sensor.emit("hbdata", state);
    sensor.emit("hbData", state);
}
function DecodeDefaultHRM(state, pucPayload) {
    // decode the measurement time data (two bytes)
    state.BeatTime = pucPayload.readUInt16LE(0);
    // decode the measurement count data
    state.BeatCount = pucPayload.readUInt8(2);
    // decode the measurement count data
    state.ComputedHeartRate = pucPayload.readUInt8(3);
}
//# sourceMappingURL=heartRateUtils.js.map