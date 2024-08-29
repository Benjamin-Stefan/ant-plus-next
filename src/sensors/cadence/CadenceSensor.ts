import { updateState } from "./CadenceUtils.js";
import { CadenceSensorState } from "./CadenceSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";

export class CadenceSensor extends AntPlusSensor {
    static deviceType = 0x7a;

    wheelCircumference: number = 2.199; // default 70cm wheel

    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
    }

    public attach(channel, deviceID): void {
        super.attach(channel, "receive", deviceID, CadenceSensor.deviceType, 0, 255, 8086);
        this.state = new CadenceSensorState(deviceID);
    }

    private state: CadenceSensorState;

    protected updateState(deviceId, data) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, data);
    }
}
