import { CadenceScanner } from "./cadenceScanner.js";
import { CadenceScanState } from "./cadenceScanState.js";
import { CadenceSensor } from "./cadenceSensor.js";
import { CadenceSensorState } from "./cadenceSensorState.js";
import { Messages } from "../../utils/messages.js";

const TOGGLE_MASK = 0x80;

/**
 * Updates the state of a Cadence sensor or scanner based on incoming data.
 * Decodes the data buffer and updates the sensor state accordingly, including
 * cumulative values such as operating time, manufacturer details, battery status,
 * and calculated cadence.
 *
 * @param {CadenceSensor | CadenceScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {CadenceSensorState | CadenceScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 */
export function updateState(sensor: CadenceSensor | CadenceScanner, state: CadenceSensorState | CadenceScanState, data: DataView): void {
    const pageNum = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA);

    switch (
        pageNum & ~TOGGLE_MASK // Check the new pages and remove the toggle bit
    ) {
        case 1:
            // Decode the cumulative operating time
            state.OperatingTime = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            state.OperatingTime |= data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2) << 8;
            state.OperatingTime |= data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3) << 16;
            state.OperatingTime *= 2;
            break;
        case 2:
            // Decode the Manufacturer ID
            state.ManId = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            // Decode the 4-byte serial number
            state.SerialNumber = state.DeviceId;
            state.SerialNumber |= data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 2, true) << 16;
            state.SerialNumber >>>= 0;
            break;
        case 3:
            // Decode HW version, SW version, and model number
            state.HwVersion = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            state.SwVersion = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            state.ModelNum = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            break;
        case 4: {
            const batteryFrac = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const batteryStatus = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            state.BatteryVoltage = (batteryStatus & 0x0f) + batteryFrac / 256;
            const batteryFlags = (batteryStatus & 0x70) >>> 4;
            state.BatteryStatusBit = batteryFlags;
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
            state.Motion = (data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1) & 0x01) === 0x01;
            break;
        default:
            break;
    }

    // Get old state for calculating cumulative values
    const oldCadenceTime = state.CadenceEventTime ?? 0;
    const oldCadenceCount = state.CumulativeCadenceRevolutionCount ?? 0;

    let cadenceTime = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 4, true);
    let cadenceCount = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 6, true);

    if (cadenceTime !== oldCadenceTime) {
        state.CadenceEventTime = cadenceTime;
        state.CumulativeCadenceRevolutionCount = cadenceCount;

        if (oldCadenceTime > cadenceTime) {
            // Handle rollover
            cadenceTime += 1024 * 64;
        }

        if (oldCadenceCount > cadenceCount) {
            // Handle rollover
            cadenceCount += 1024 * 64;
        }

        const cadence = (60 * (cadenceCount - oldCadenceCount) * 1024) / (cadenceTime - oldCadenceTime);
        if (!isNaN(cadence)) {
            state.CalculatedCadence = cadence;
            sensor.emit("cadenceData", state);
        }
    }
}
