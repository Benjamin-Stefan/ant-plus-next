import { AntPlusSensor } from "../antPlusSensor.js";
import { updateState } from "./speedCadenceUtils.js";
import { SpeedCadenceSensorState } from "./speedCadenceSensorState.js";
export class SpeedCadenceSensor extends AntPlusSensor {
    constructor() {
        super(...arguments);
        this.wheelCircumference = 2.199; // default 70cm wheel
    }
    setWheelCircumference(wheelCircumference) {
        this.wheelCircumference = wheelCircumference;
    }
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, SpeedCadenceSensor.deviceType, 0, 255, 8086);
        this.state = new SpeedCadenceSensorState(deviceId);
    }
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
SpeedCadenceSensor.deviceType = 0x79;
//# sourceMappingURL=speedCadenceSensor.js.map