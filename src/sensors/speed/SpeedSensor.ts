import { AntPlusSensor } from "../AntPlusSensor.js";
import { updateState } from "./SpeedUtils.js";
import { SpeedSensorState } from "./SpeedSensorState.js";

export class SpeedSensor extends AntPlusSensor {
    static deviceType = 0x7b;

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    public attach(channel, deviceID): void {
        super.attach(channel, "receive", deviceID, SpeedSensor.deviceType, 0, 255, 8086);
        this.state = new SpeedSensorState(deviceID);
    }

    private state: SpeedSensorState;

    protected updateState(deviceId, data) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, data);
    }
}
