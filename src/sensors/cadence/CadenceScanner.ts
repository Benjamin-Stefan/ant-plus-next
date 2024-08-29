import { updateState } from "./CadenceUtils.js";
import { CadenceScanState } from "./CadenceScanState.js";
import { CadenceSensor } from "./CadenceSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

export class CadenceScanner extends AntPlusScanner {
    protected deviceType() {
        return CadenceSensor.deviceType;
    }

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    private states: { [id: number]: CadenceScanState } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new CadenceScanState(deviceId);
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
