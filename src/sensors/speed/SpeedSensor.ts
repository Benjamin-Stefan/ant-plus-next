import { AntPlusSensor } from "../antPlusSensor.js";
import { updateState } from "./speedUtils.js";
import { SpeedSensorState } from "./speedSensorState.js";

export class SpeedSensor extends AntPlusSensor {
    static deviceType = 0x7b;

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, SpeedSensor.deviceType, 0, 255, 8086);
        this.state = new SpeedSensorState(deviceId);
    }

    private state!: SpeedSensorState;

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
