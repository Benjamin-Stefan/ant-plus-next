import { updateState } from "./MuscleOxygenUtils.js";
import { MuscleOxygenScanState } from "./MuscleOxygenScanState.js";
import { MuscleOxygenSensor } from "./MuscleOxygenSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

export class MuscleOxygenScanner extends AntPlusScanner {
    protected deviceType() {
        return MuscleOxygenSensor.deviceType;
    }

    private states: { [id: number]: MuscleOxygenScanState } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new MuscleOxygenScanState(deviceId);
        }
    }

    protected updateRssiAndThreshold(deviceId, rssi, threshold) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }

    protected updateState(deviceId, data) {
        updateState(this, this.states[deviceId], data);
    }
}
