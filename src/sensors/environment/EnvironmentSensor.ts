import { updateState } from "./EnvironmentUtils.js";
import { EnvironmentSensorState } from "./EnvironmentSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";

export class EnvironmentSensor extends AntPlusSensor {
    static deviceType = 25;

    public attach(channel, deviceID) {
        super.attach(channel, "receive", deviceID, EnvironmentSensor.deviceType, 0, 255, 8192);
        this.state = new EnvironmentSensorState(deviceID);
    }

    private state: EnvironmentSensorState;

    protected updateState(deviceId, data) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, data);
    }
}
