import { AntPlusSensor } from "../antPlusSensor.js";
import { updateState } from "./strideSpeedDistanceUtils.js";
import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";

export class StrideSpeedDistanceSensor extends AntPlusSensor {
    static deviceType = 124;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, StrideSpeedDistanceSensor.deviceType, 0, 255, 8134);
        this.state = new StrideSpeedDistanceSensorState(deviceId);
    }

    private state!: StrideSpeedDistanceSensorState;

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
