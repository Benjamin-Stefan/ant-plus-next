import { updateState } from "./cadenceUtils.js";
import { CadenceScanState } from "./cadenceScanState.js";
import { CadenceSensor } from "./cadenceSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";

export class CadenceScanner extends AntPlusScanner {
    protected deviceType() {
        return CadenceSensor.deviceType;
    }

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    private states: { [id: number]: CadenceScanState } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new CadenceScanState(deviceId);
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
