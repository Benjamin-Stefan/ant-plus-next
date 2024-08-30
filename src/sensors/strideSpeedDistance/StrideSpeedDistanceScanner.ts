import { AntPlusScanner } from "../AntPlusScanner.js";
import { updateState } from "./StrideSpeedDistanceUtils.js";
import { StrideSpeedDistanceScanState } from "./StrideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./StrideSpeedDistanceSensor.js";

export class StrideSpeedDistanceScanner extends AntPlusScanner {
    protected deviceType() {
        return StrideSpeedDistanceSensor.deviceType;
    }

    private states: { [id: number]: StrideSpeedDistanceScanState } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new StrideSpeedDistanceScanState(deviceId);
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
