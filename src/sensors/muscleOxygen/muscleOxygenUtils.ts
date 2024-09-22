import { Messages } from "../../utils/messages.js";
import { MuscleOxygenSensorState } from "./muscleOxygenSensorState.js";
import { MuscleOxygenScanState } from "./muscleOxygenScanState.js";
import { MuscleOxygenSensor } from "./muscleOxygenSensor.js";
import { MuscleOxygenScanner } from "./muscleOxygenScanner.js";

/**
 * Updates the state of a Muscle Oxygen sensor or scanner based on the incoming data.
 * Decodes various pages of data to update the state, including event counts, sensor capabilities,
 * measurement intervals, total hemoglobin concentration, and battery status.
 *
 * @param {MuscleOxygenSensor | MuscleOxygenScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {MuscleOxygenSensorState | MuscleOxygenScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new MuscleOxygenSensor();
 * const state = new MuscleOxygenSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export function updateState(sensor: MuscleOxygenSensor | MuscleOxygenScanner, state: MuscleOxygenSensorState | MuscleOxygenScanState, data: DataView) {
    const oldEventCount = state._EventCount || 0;
    const page = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA);

    switch (page) {
        case 0x01: {
            let eventCount = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            const notifications = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const capabilities = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 3, true);
            const total = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 4, true) & 0xfff;
            const previous = (data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 5, true) >> 4) & 0x3ff;
            const current = (data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 6, true) >> 6) & 0x3ff;

            if (eventCount !== oldEventCount) {
                state._EventCount = eventCount;
                if (oldEventCount > eventCount) {
                    // Hit rollover value
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
            state.HwVersion = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            state.ManId = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 4, true);
            state.ModelNum = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 6, true);
            break;
        }
        case 0x51: {
            const swRevSup = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const swRevMain = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            const serial = data.getUint32(Messages.BUFFER_INDEX_MSG_DATA + 4, true);

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
            const batteryId = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            const operatingTime = data.getUint32(Messages.BUFFER_INDEX_MSG_DATA + 3, true) & 0xffffff;
            const batteryFrac = data.getUint32(Messages.BUFFER_INDEX_MSG_DATA + 6, true);
            const batteryStatus = data.getUint32(Messages.BUFFER_INDEX_MSG_DATA + 7, true);

            state.OperatingTime = operatingTime * ((batteryStatus & 0x80) === 0x80 ? 2 : 16);
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
        default:
            return;
    }
    if (page !== 0x01 || state._EventCount !== oldEventCount) {
        sensor.emit("oxygenData", state);
    }
}
