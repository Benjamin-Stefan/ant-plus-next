/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#521_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-power/
 */
import { Messages } from "../../utils/messages.js";
export function updateState(sensor, state, data) {
    var _a, _b, _c;
    const page = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA);
    switch (page) {
        case 0x01: {
            const calId = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            if (calId === 0x10) {
                const calParam = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
                if (calParam === 0x01) {
                    state.offset = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6);
                }
            }
            break;
        }
        case 0x10: {
            const pedalPower = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 2);
            if (pedalPower !== 0xff) {
                if (pedalPower & 0x80) {
                    state.PedalPower = pedalPower & 0x7f;
                    state.RightPedalPower = state.PedalPower;
                    state.LeftPedalPower = 100 - state.RightPedalPower;
                }
                else {
                    state.PedalPower = pedalPower & 0x7f;
                    state.RightPedalPower = undefined;
                    state.LeftPedalPower = undefined;
                }
            }
            else {
                state.PedalPower = undefined;
                state.RightPedalPower = undefined;
                state.LeftPedalPower = undefined;
            }
            const cadence = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
            if (cadence !== 0xff) {
                state.Cadence = cadence;
            }
            else {
                state.Cadence = undefined;
            }
            state.AccumulatedPower = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 4);
            state.Power = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6);
            break;
        }
        case 0x20: {
            const oldEventCount = (_a = state.EventCount) !== null && _a !== void 0 ? _a : 0;
            const oldTimeStamp = (_b = state.TimeStamp) !== null && _b !== void 0 ? _b : 0;
            const oldTorqueTicksStamp = (_c = state.TorqueTicksStamp) !== null && _c !== void 0 ? _c : 0;
            let eventCount = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1);
            const slope = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 3);
            let timeStamp = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 5);
            let torqueTicksStamp = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 7);
            if (timeStamp !== oldTimeStamp && eventCount !== oldEventCount) {
                state.EventCount = eventCount;
                if (oldEventCount > eventCount) {
                    //Hit rollover value
                    eventCount += 255;
                }
                state.TimeStamp = timeStamp;
                if (oldTimeStamp > timeStamp) {
                    //Hit rollover value
                    timeStamp += 65400;
                }
                state.Slope = slope;
                state.TorqueTicksStamp = torqueTicksStamp;
                if (oldTorqueTicksStamp > torqueTicksStamp) {
                    //Hit rollover value
                    torqueTicksStamp += 65535;
                }
                const elapsedTime = (timeStamp - oldTimeStamp) * 0.0005;
                const torqueTicks = torqueTicksStamp - oldTorqueTicksStamp;
                const cadencePeriod = elapsedTime / (eventCount - oldEventCount); // s
                const cadence = Math.round(60 / cadencePeriod); // rpm
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
//# sourceMappingURL=bicyclePowerUtils.js.map