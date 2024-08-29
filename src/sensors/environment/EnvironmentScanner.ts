import { updateState } from "./EnvironmentUtils.js";
import { EnvironmentScanState } from "./EnvironmentScanState.js";
import { EnvironmentSensor } from "./EnvironmentSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

export class EnvironmentScanner extends AntPlusScanner {
    protected deviceType() {
        return EnvironmentSensor.deviceType;
    }

    private states: { [id: number]: EnvironmentScanState } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new EnvironmentScanState(deviceId);
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
