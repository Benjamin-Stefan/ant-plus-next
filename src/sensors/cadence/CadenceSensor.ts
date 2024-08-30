import { updateState } from "./cadenceUtils.js";
import { CadenceSensorState } from "./cadenceSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";

export class CadenceSensor extends AntPlusSensor {
    static deviceType = 0x7a;

    wheelCircumference: number = 2.199; // default 70cm wheel

    private state!: CadenceSensorState;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, CadenceSensor.deviceType, 0, 255, 8102);
        this.state = new CadenceSensorState(deviceId);
    }

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
