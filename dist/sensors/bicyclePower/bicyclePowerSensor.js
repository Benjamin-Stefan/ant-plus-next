import { updateState } from "./bicyclePowerUtils.js";
import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
export class BicyclePowerSensor extends AntPlusSensor {
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, BicyclePowerSensor.deviceType, 0, 255, 8182);
        this.state = new BicyclePowerSensorState(deviceId);
    }
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
BicyclePowerSensor.deviceType = 0x0b;
//# sourceMappingURL=bicyclePowerSensor.js.map