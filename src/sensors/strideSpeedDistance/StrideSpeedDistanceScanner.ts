import { AntPlusScanner } from "../antPlusScanner.js";
import { updateState } from "./strideSpeedDistanceUtils.js";
import { StrideSpeedDistanceScanState } from "./strideSpeedDistanceScanState.js";
import { StrideSpeedDistanceSensor } from "./strideSpeedDistanceSensor.js";

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
