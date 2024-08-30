import { AntPlusSensor } from "../AntPlusSensor.js";
import { updateState } from "./SpeedCadenceUtils.js";
import { SpeedCadenceSensorState } from "./SpeedCadenceSensorState.js";

export class SpeedCadenceSensor extends AntPlusSensor {
    static deviceType = 0x79;

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, SpeedCadenceSensor.deviceType, 0, 255, 8086);
        this.state = new SpeedCadenceSensorState(deviceId);
    }

    private state!: SpeedCadenceSensorState;

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
