import { AntPlusSensor } from "../antPlusSensor.js";
import { updateState } from "./speedUtils.js";
import { SpeedSensorState } from "./speedSensorState.js";
export class SpeedSensor extends AntPlusSensor {
    constructor() {
        super(...arguments);
        this.wheelCircumference = 2.199; // default 70cm wheel
    }
    setWheelCircumference(wheelCircumference) {
        this.wheelCircumference = wheelCircumference;
    }
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, SpeedSensor.deviceType, 0, 255, 8118);
        this.state = new SpeedSensorState(deviceId);
    }
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
SpeedSensor.deviceType = 0x7b;
//# sourceMappingURL=speedSensor.js.map