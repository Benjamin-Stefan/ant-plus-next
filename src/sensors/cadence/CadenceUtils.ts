/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#523_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-speed-and-cadence/
 */

import { CadenceScanner } from "./CadenceScanner.js";
import { CadenceScanState } from "./CadenceScanState.js";
import { CadenceSensor } from "./CadenceSensor.js";
import { CadenceSensorState } from "./CadenceSensorState.js";
import { Messages } from "../../utils/messages.js";

const TOGGLE_MASK = 0x80;

export function updateState(sensor: CadenceSensor | CadenceScanner, state: CadenceSensorState | CadenceScanState, data: Buffer) {
    const pageNum = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA);
    switch (
        pageNum & ~TOGGLE_MASK //check the new pages and remove the toggle bit
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
            state.SerialNumber = state.DeviceID;
            state.SerialNumber |= data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 2) << 16;
            state.SerialNumber >>>= 0;
            break;
        case 3:
            //decode HW version, SW version, and model number
            state.HwVersion = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            state.SwVersion = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            state.ModelNum = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            break;
        case 4: {
            const batteryFrac = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const batteryStatus = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
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
        case 5:
            state.Motion = (data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1) & 0x01) === 0x01;
            break;
        default:
            break;
    }

    //get old state for calculating cumulative values
    const oldCadenceTime = state.CadenceEventTime;
    const oldCadenceCount = state.CumulativeCadenceRevolutionCount;

    let cadenceTime = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 4);
    let cadenceCount = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6);

    if (cadenceTime !== oldCadenceTime) {
        state.CadenceEventTime = cadenceTime;
        state.CumulativeCadenceRevolutionCount = cadenceCount;

        if (oldCadenceTime > cadenceTime) {
            //Hit rollover value
            cadenceTime += 1024 * 64;
        }

        if (oldCadenceCount > cadenceCount) {
            //Hit rollover value
            cadenceCount += 1024 * 64;
        }

        const cadence = (60 * (cadenceCount - oldCadenceCount) * 1024) / (cadenceTime - oldCadenceTime);
        if (!isNaN(cadence)) {
            state.CalculatedCadence = cadence;
            sensor.emit("cadenceData", state);
        }
    }
}
