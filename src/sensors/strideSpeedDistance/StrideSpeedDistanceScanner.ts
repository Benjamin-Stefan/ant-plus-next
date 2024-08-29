import { AntPlusScanner } from "../AntPlusScanner.js";
import { updateState } from "./StrideSpeedDistanceUtils.js";
import { StrideSpeedDistanceScanState } from "./StrideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./StrideSpeedDistanceSensor.js";

export class StrideSpeedDistanceScanner extends AntPlusScanner {
    protected deviceType() {
        return StrideSpeedDistanceSensor.deviceType;
    }

    private states: { [id: number]: StrideSpeedDistanceScanState } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new StrideSpeedDistanceScanState(deviceId);
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
