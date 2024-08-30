import { updateState } from "./cadenceUtils.js";
import { CadenceSensorState } from "./cadenceSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
export class CadenceSensor extends AntPlusSensor {
    constructor() {
        super(...arguments);
        this.wheelCircumference = 2.199; // default 70cm wheel
    }
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, CadenceSensor.deviceType, 0, 255, 8102);
        this.state = new CadenceSensorState(deviceId);
    }
    setWheelCircumference(wheelCircumference) {
        this.wheelCircumference = wheelCircumference;
    }
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
CadenceSensor.deviceType = 0x7a;
//# sourceMappingURL=cadenceSensor.js.map