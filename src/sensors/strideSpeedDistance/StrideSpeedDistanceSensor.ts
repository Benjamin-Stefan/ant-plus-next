import { AntPlusSensor } from "../AntPlusSensor.js";
import { updateState } from "./StrideSpeedDistanceUtils.js";
import { StrideSpeedDistanceSensorState } from "./StrideSpeedDistanceSensorState.js";

export class StrideSpeedDistanceSensor extends AntPlusSensor {
    static deviceType = 124;

    public attach(channel, deviceID) {
        super.attach(channel, "receive", deviceID, StrideSpeedDistanceSensor.deviceType, 0, 255, 8134);
        this.state = new StrideSpeedDistanceSensorState(deviceID);
    }

    private state: StrideSpeedDistanceSensorState;

    protected updateState(deviceId, data) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, data);
    }
}
