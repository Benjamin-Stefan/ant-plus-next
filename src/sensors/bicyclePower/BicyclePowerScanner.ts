import { updateState } from "./bicyclePowerUtils.js";
import { BicyclePowerScanState } from "./bicyclePowerScanState.js";
import { BicyclePowerSensor } from "./bicyclePowerSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";

export class BicyclePowerScanner extends AntPlusScanner {
    protected deviceType() {
        return BicyclePowerSensor.deviceType;
    }

    private states: { [id: number]: BicyclePowerScanState } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new BicyclePowerScanState(deviceId);
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
