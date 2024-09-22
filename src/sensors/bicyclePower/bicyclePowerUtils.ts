import { BicyclePowerScanner } from "./bicyclePowerScanner.js";
import { BicyclePowerScanState } from "./bicyclePowerScanState.js";
import { BicyclePowerSensor } from "./bicyclePowerSensor.js";
import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";
import { Messages } from "../../utils/messages.js";

/**
 * Updates the state of a Bicycle Power sensor or scanner based on incoming data.
 * Processes various types of data pages to update the sensor state, including calibration data,
 * pedal power, cadence, and torque calculations.
 *
 * @param {BicyclePowerSensor | BicyclePowerScanner} sensor - The sensor or scanner to update.
 * @param {BicyclePowerSensorState | BicyclePowerScanState} state - The state object representing the current state of the sensor.
 * @param {DataView} data - The raw data buffer received from the sensor.
 * @returns {void}
 */
export function updateState(sensor: BicyclePowerSensor | BicyclePowerScanner, state: BicyclePowerSensorState | BicyclePowerScanState, data: DataView): void {
    const page = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA);

    switch (page) {
        case 0x01: {
            const calId = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            if (calId === 0x10) {
                const calParam = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                if (calParam === 0x01) {
                    state.offset = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 6, true); // true for little-endian
                }
            }
            break;
        }
        case 0x10: {
            const pedalPower = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            if (pedalPower !== 0xff) {
                if (pedalPower & 0x80) {
                    state.PedalPower = pedalPower & 0x7f;
                    state.RightPedalPower = state.PedalPower;
                    state.LeftPedalPower = 100 - state.RightPedalPower;
                } else {
                    state.PedalPower = pedalPower & 0x7f;
                    state.RightPedalPower = undefined;
                    state.LeftPedalPower = undefined;
                }
            } else {
                state.PedalPower = undefined;
                state.RightPedalPower = undefined;
                state.LeftPedalPower = undefined;
            }

            const cadence = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            state.Cadence = cadence !== 0xff ? cadence : undefined;

            state.AccumulatedPower = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 4, true);
            state.Power = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 6, true);
            break;
        }
        case 0x20: {
            const oldEventCount = state.EventCount ?? 0;
            const oldTimeStamp = state.TimeStamp ?? 0;
            const oldTorqueTicksStamp = state.TorqueTicksStamp ?? 0;

            let eventCount = data.getUint8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            const slope = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 3, true);
            let timeStamp = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 5, true);
            let torqueTicksStamp = data.getUint16(Messages.BUFFER_INDEX_MSG_DATA + 7, true);

            if (timeStamp !== oldTimeStamp && eventCount !== oldEventCount) {
                state.EventCount = eventCount;
                if (oldEventCount > eventCount) {
                    // Hit rollover value
                    eventCount += 255;
                }

                state.TimeStamp = timeStamp;
                if (oldTimeStamp > timeStamp) {
                    // Hit rollover value
                    timeStamp += 65400;
                }

                state.Slope = slope;
                state.TorqueTicksStamp = torqueTicksStamp;
                if (oldTorqueTicksStamp > torqueTicksStamp) {
                    // Hit rollover value
                    torqueTicksStamp += 65535;
                }

                const elapsedTime = (timeStamp - oldTimeStamp) * 0.0005;
                const torqueTicks = torqueTicksStamp - oldTorqueTicksStamp;

                const cadencePeriod = elapsedTime / (eventCount - oldEventCount); // seconds
                const cadence = Math.round(60 / cadencePeriod); // RPM
                state.CalculatedCadence = cadence;

                const torqueFrequency = 1 / (elapsedTime / torqueTicks) - state.offset; // Hz
                const torque = torqueFrequency / (slope / 10); // Nm
                state.CalculatedTorque = torque;

                state.CalculatedPower = (torque * cadence * Math.PI) / 30; // Watts
            }
            break;
        }
        default:
            return;
    }
    sensor.emit("powerData", state);
}
