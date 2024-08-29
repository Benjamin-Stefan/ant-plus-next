import { updateState } from "./BicyclePowerUtils.js";
import { BicyclePowerSensorState } from "./BicyclePowerSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";

export class BicyclePowerSensor extends AntPlusSensor {
    static deviceType = 0x0b;

    public attach(channel, deviceID): void {
        super.attach(channel, "receive", deviceID, BicyclePowerSensor.deviceType, 0, 255, 8182);
        this.state = new BicyclePowerSensorState(deviceID);
    }

    private state: BicyclePowerSensorState;

    protected updateState(deviceId, data) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, data);
    }
}
