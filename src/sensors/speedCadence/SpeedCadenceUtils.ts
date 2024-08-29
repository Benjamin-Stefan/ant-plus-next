/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#523_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-speed-and-cadence/
 */

import { SpeedCadenceScanner } from "./SpeedCadenceScanner.js";
import { SpeedCadenceScanState } from "./SpeedCadenceScanState.js";
import { SpeedCadenceSensor } from "./SpeedCadenceSensor.js";
import { SpeedCadenceSensorState } from "./SpeedCadenceSensorState.js";
import { Messages } from "../../utils/messages.js";

export function updateState(sensor: SpeedCadenceSensor | SpeedCadenceScanner, state: SpeedCadenceSensorState | SpeedCadenceScanState, data: Buffer) {
    //get old state for calculating cumulative values
    const oldCadenceTime = state.CadenceEventTime;
    const oldCadenceCount = state.CumulativeCadenceRevolutionCount;
    const oldSpeedTime = state.SpeedEventTime;
    const oldSpeedCount = state.CumulativeSpeedRevolutionCount;

    let cadenceTime = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA);
    let cadenceCount = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 2);
    let speedEventTime = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 4);
    let speedRevolutionCount = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA + 6);

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

    if (speedEventTime !== oldSpeedTime) {
        state.SpeedEventTime = speedEventTime;
        state.CumulativeSpeedRevolutionCount = speedRevolutionCount;

        if (oldSpeedTime > speedEventTime) {
            //Hit rollover value
            speedEventTime += 1024 * 64;
        }

        if (oldSpeedCount > speedRevolutionCount) {
            //Hit rollover value
            speedRevolutionCount += 1024 * 64;
        }

        const distance = sensor.wheelCircumference * (speedRevolutionCount - oldSpeedCount);
        state.CalculatedDistance = distance;

        //speed in m/sec
        const speed = (distance * 1024) / (speedEventTime - oldSpeedTime);
        if (!isNaN(speed)) {
            state.CalculatedSpeed = speed;
            sensor.emit("speedData", state);
        }
    }
}
