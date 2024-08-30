import { AntPlusScanner } from "../antPlusScanner.js";
import { updateState } from "./speedCadenceUtils.js";
import { SpeedCadenceScanState } from "./speedCadenceScanState.js";
import { SpeedCadenceSensor } from "./speedCadenceSensor.js";

export class SpeedCadenceScanner extends AntPlusScanner {
    protected deviceType() {
        return SpeedCadenceSensor.deviceType;
    }

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    private states: { [id: number]: SpeedCadenceScanState } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new SpeedCadenceScanState(deviceId);
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
