import { SpeedScanner } from "./speedScanner.js";
import { SpeedScanState } from "./speedScanState.js";
import { SpeedSensor } from "./speedSensor.js";
import { SpeedSensorState } from "./speedSensorState.js";
import { Messages } from "../../utils/messages.js";

const TOGGLE_MASK = 0x80;

/**
 * Updates the state of a Speed sensor or scanner based on the incoming data.
 * Decodes various pages of data to update the state, including cumulative operating time,
 * manufacturer details, hardware and software versions, battery status, motion status, and speed.
 *
 * @param {SpeedSensor | SpeedScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {SpeedSensorState | SpeedScanState} state - The current state of the sensor or scanner.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 * @example
 * const sensor = new SpeedSensor();
 * const state = new SpeedSensorState(12345);
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, dataBuffer);
 */
export function updateState(sensor: SpeedSensor | SpeedScanner, state: SpeedSensorState | SpeedScanState, data: DataView) {
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
            // Decode hardware version, software version, and model number
            state.HwVersion = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            state.SwVersion = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            state.ModelNum = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            break;
        case 4: {
            // Decode battery status
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
            // Decode motion status
            state.Motion = (data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1) & 0x01) === 0x01;
            break;
        default:
            break;
    }

    // Get old state for calculating cumulative values
    const oldSpeedTime = state.SpeedEventTime ?? 0;
    const oldSpeedCount = state.CumulativeSpeedRevolutionCount ?? 0;

    let speedEventTime = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 4, true);
    let speedRevolutionCount = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 6, true);

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
