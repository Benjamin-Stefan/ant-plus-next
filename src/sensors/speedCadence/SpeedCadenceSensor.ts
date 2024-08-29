import { AntPlusSensor } from "../AntPlusSensor.js";
import { updateState } from "./SpeedCadenceUtils.js";
import { SpeedCadenceSensorState } from "./SpeedCadenceSensorState.js";

export class SpeedCadenceSensor extends AntPlusSensor {
    static deviceType = 0x79;

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    public attach(channel, deviceID): void {
        super.attach(channel, "receive", deviceID, SpeedCadenceSensor.deviceType, 0, 255, 8086);
        this.state = new SpeedCadenceSensorState(deviceID);
    }

    private state: SpeedCadenceSensorState;

    protected updateState(deviceId, data) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, data);
    }
}
