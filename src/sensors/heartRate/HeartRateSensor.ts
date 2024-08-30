import { Page, PageState, updateState } from "./HeartRateUtils.js";
import { HeartRateSensorState } from "./HeartRateSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";

export class HeartRateSensor extends AntPlusSensor {
    static deviceType = 120;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, HeartRateSensor.deviceType, 0, 255, 8070);
    }

    private state!: HeartRateSensorState;

    private page: Page = {
        oldPage: -1,
        pageState: PageState.INIT_PAGE,
    };

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, this.page, data);
    }
}
