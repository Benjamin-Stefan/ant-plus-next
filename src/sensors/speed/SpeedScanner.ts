import { AntPlusScanner } from "../AntPlusScanner.js";
import { updateState } from "./SpeedUtils.js";
import { SpeedScanState } from "./SpeedScanState.js";
import { SpeedSensor } from "./SpeedSensor.js";

export class SpeedScanner extends AntPlusScanner {
    protected deviceType() {
        return SpeedSensor.deviceType;
    }

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    private states: { [id: number]: SpeedScanState } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new SpeedScanState(deviceId);
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
