import { Page, PageState, updateState } from "./heartRateUtils.js";
import { HeartRateSensorState } from "./heartRateSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";

export class HeartRateSensor extends AntPlusSensor {
    static deviceType = 120;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, HeartRateSensor.deviceType, 0, 255, 8070);
        this.state = new HeartRateSensorState(deviceId);
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
