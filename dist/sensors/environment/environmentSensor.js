import { updateState } from "./environmentUtils.js";
import { EnvironmentSensorState } from "./environmentSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
export class EnvironmentSensor extends AntPlusSensor {
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, EnvironmentSensor.deviceType, 0, 255, 8192);
        this.state = new EnvironmentSensorState(deviceId);
    }
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
EnvironmentSensor.deviceType = 25;
//# sourceMappingURL=environmentSensor.js.map