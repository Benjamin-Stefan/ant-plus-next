import { AntPlusScanner } from "../antPlusScanner.js";
import { updateState } from "./speedCadenceUtils.js";
import { SpeedCadenceScanState } from "./speedCadenceScanState.js";
import { SpeedCadenceSensor } from "./speedCadenceSensor.js";
export class SpeedCadenceScanner extends AntPlusScanner {
    constructor() {
        super(...arguments);
        this.wheelCircumference = 2.199; // default 70cm wheel
        this.states = {};
    }
    deviceType() {
        return SpeedCadenceSensor.deviceType;
    }
    setWheelCircumference(wheelCircumference) {
        this.wheelCircumference = wheelCircumference;
    }
    createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new SpeedCadenceScanState(deviceId);
        }
    }
    updateRssiAndThreshold(deviceId, rssi, threshold) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }
    updateState(deviceId, data) {
        updateState(this, this.states[deviceId], data);
    }
}
//# sourceMappingURL=speedCadenceScanner.js.map