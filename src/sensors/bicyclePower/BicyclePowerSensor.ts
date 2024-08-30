import { updateState } from "./bicyclePowerUtils.js";
import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";

export class BicyclePowerSensor extends AntPlusSensor {
    static deviceType = 0x0b;

    private state!: BicyclePowerSensorState;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, BicyclePowerSensor.deviceType, 0, 255, 8182);
        this.state = new BicyclePowerSensorState(deviceId);
    }

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
