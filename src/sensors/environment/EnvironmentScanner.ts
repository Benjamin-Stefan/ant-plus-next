import { updateState } from "./EnvironmentUtils.js";
import { EnvironmentScanState } from "./EnvironmentScanState.js";
import { EnvironmentSensor } from "./EnvironmentSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

export class EnvironmentScanner extends AntPlusScanner {
    protected deviceType() {
        return EnvironmentSensor.deviceType;
    }

    private states: { [id: number]: EnvironmentScanState } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new EnvironmentScanState(deviceId);
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
