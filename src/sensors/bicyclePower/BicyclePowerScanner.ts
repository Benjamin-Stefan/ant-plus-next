import { updateState } from "./BicyclePowerUtils.js";
import { BicyclePowerScanState } from "./BicyclePowerScanState.js";
import { BicyclePowerSensor } from "./BicyclePowerSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

export class BicyclePowerScanner extends AntPlusScanner {
    protected deviceType() {
        return BicyclePowerSensor.deviceType;
    }

    private states: { [id: number]: BicyclePowerScanState } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new BicyclePowerScanState(deviceId);
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
