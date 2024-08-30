import { updateState } from "./MuscleOxygenUtils.js";
import { MuscleOxygenScanState } from "./MuscleOxygenScanState.js";
import { MuscleOxygenSensor } from "./MuscleOxygenSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

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
