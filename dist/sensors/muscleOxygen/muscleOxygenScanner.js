import { updateState } from "./muscleOxygenUtils.js";
import { MuscleOxygenScanState } from "./muscleOxygenScanState.js";
import { MuscleOxygenSensor } from "./muscleOxygenSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";
export class MuscleOxygenScanner extends AntPlusScanner {
    constructor() {
        super(...arguments);
        this.states = {};
    }
    deviceType() {
        return MuscleOxygenSensor.deviceType;
    }
    createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new MuscleOxygenScanState(deviceId);
        }
    }
    updateRssiAndThreshold(deviceId, rssi, threshold) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }
    updateState(deviceId, data) {
        updateState(this, this.states[deviceId], data);
    }
}
//# sourceMappingURL=muscleOxygenScanner.js.map