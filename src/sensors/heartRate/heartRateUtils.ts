import { HeartRateScanner } from "./heartRateScanner.js";
import { HeartRateScannerState } from "./heartRateScannerState.js";
import { HeartRateSensor } from "./heartRateSensor.js";
import { HeartRateSensorState } from "./heartRateSensorState.js";
import { Messages } from "../../utils/messages.js";

export enum PageState {
    INIT_PAGE,
    STD_PAGE,
    EXT_PAGE,
}

export type Page = {
    oldPage: number;
    pageState: PageState; // sets the state of the receiver - INIT, STD_PAGE, EXT_PAGE
};

const TOGGLE_MASK = 0x80;

/**
 * Updates the state of a Heart Rate sensor or scanner based on incoming data.
 * Decodes various pages of data to update the state, including operating time, manufacturer details,
 * battery status, heart rate data, and more.
 *
 * @param {HeartRateSensor | HeartRateScanner} sensor - The sensor or scanner instance emitting the data.
 * @param {HeartRateSensorState | HeartRateScannerState} state - The current state of the sensor or scanner.
 * @param {Page} page - The page information containing the current and old page number.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 *
 * @example
 * const sensor = new HeartRateSensor();
 * const state = new HeartRateSensorState(12345);
 * const page = { oldPage: 0, pageState: PageState.INIT_PAGE };
 * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
 * updateState(sensor, state, page, dataBuffer);
 */
export function updateState(sensor: HeartRateSensor | HeartRateScanner, state: HeartRateSensorState | HeartRateScannerState, page: Page, data: DataView): void {
    const pageNum = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA);
    if (page.pageState === PageState.INIT_PAGE) {
        page.pageState = PageState.STD_PAGE; // change the state to STD_PAGE and allow the checking of old and new pages
    } else if (pageNum !== page.oldPage || page.pageState === PageState.EXT_PAGE) {
        page.pageState = PageState.EXT_PAGE; // set the state to use the extended page format
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
            case 4:
                // Decode the previous heart beat measurement time
                state.PreviousBeat = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 2, true);
                break;
            case 5:
                state.IntervalAverage = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
                state.IntervalMax = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                state.SessionAverage = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            case 6:
                state.SupportedFeatures = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                state.EnabledFeatures = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            case 7: {
                const batteryLevel = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
                const batteryFrac = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                const batteryStatus = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                if (batteryLevel !== 0xff) {
                    state.BatteryLevel = batteryLevel;
                }
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
                break;
        }
    }
    // Decode the last four bytes of the HRM format, the first byte of this message is the channel number
    DecodeDefaultHRM(state, new DataView(data.buffer.slice(Messages.BUFFER_INDEX_MSG_DATA + 4)));
    page.oldPage = pageNum;

    sensor.emit("hbdata", state);
    sensor.emit("hbData", state);
}

/**
 * Decodes the default Heart Rate Monitor (HRM) data from the buffer and updates the sensor state.
 *
 * @param {HeartRateSensorState | HeartRateScannerState} state - The current state of the sensor or scanner.
 * @param {DataView} pucPayload - The buffer containing the HRM data.
 * @returns {void}
 *
 * @example
 * const state = new HeartRateSensorState(12345);
 * const hrmData = new Uint8Array([0x00, 0x01, 0x02, 0x03]); // Sample HRM data buffer
 * DecodeDefaultHRM(state, hrmData);
 */
function DecodeDefaultHRM(state: HeartRateSensorState | HeartRateScannerState, pucPayload: DataView): void {
    // Decode the measurement time data (two bytes)
    state.BeatTime = pucPayload.getUint16(0, true); // little-endian
    // Decode the measurement count data
    state.BeatCount = pucPayload.getUint8(2);
    // Decode the computed heart rate data
    state.ComputedHeartRate = pucPayload.getUint8(3);
}
