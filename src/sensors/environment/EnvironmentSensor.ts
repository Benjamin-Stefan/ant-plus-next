import { updateState } from "./EnvironmentUtils.js";
import { EnvironmentSensorState } from "./EnvironmentSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";

export class EnvironmentSensor extends AntPlusSensor {
    static deviceType = 25;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, EnvironmentSensor.deviceType, 0, 255, 8192);
        this.state = new EnvironmentSensorState(deviceId);
    }

    private state!: EnvironmentSensorState;

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
