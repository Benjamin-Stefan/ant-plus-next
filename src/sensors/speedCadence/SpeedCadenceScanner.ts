import { AntPlusScanner } from "../AntPlusScanner.js";
import { updateState } from "./SpeedCadenceUtils.js";
import { SpeedCadenceScanState } from "./SpeedCadenceScanState.js";
import { SpeedCadenceSensor } from "./SpeedCadenceSensor.js";

export class SpeedCadenceScanner extends AntPlusScanner {
    protected deviceType() {
        return SpeedCadenceSensor.deviceType;
    }

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    private states: { [id: number]: SpeedCadenceScanState } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new SpeedCadenceScanState(deviceId);
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
