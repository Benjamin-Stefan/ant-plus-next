import { AntPlusSensor } from "../antPlusSensor.js";
import { updateState } from "./strideSpeedDistanceUtils.js";
import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";
export class StrideSpeedDistanceSensor extends AntPlusSensor {
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, StrideSpeedDistanceSensor.deviceType, 0, 255, 8134);
        this.state = new StrideSpeedDistanceSensorState(deviceId);
    }
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
StrideSpeedDistanceSensor.deviceType = 124;
//# sourceMappingURL=strideSpeedDistanceSensor.js.map