import { updateState } from "./muscleOxygenUtils.js";
import { MuscleOxygenScanState } from "./muscleOxygenScanState.js";
import { MuscleOxygenSensor } from "./muscleOxygenSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";

export class MuscleOxygenScanner extends AntPlusScanner {
    protected deviceType() {
        return MuscleOxygenSensor.deviceType;
    }

    private states: { [id: number]: MuscleOxygenScanState } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new MuscleOxygenScanState(deviceId);
        }
    }

    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }

    protected updateState(deviceId: number, data: Buffer) {
        updateState(this, this.states[deviceId], data);
    }
}
