import { Page, PageState, updateState } from "./HeartRateUtils.js";
import { HeartRateSensorState } from "./HeartRateSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";

export class HeartRateSensor extends AntPlusSensor {
    static deviceType = 120;

    public attach(channel, deviceID) {
        super.attach(channel, "receive", deviceID, HeartRateSensor.deviceType, 0, 255, 8070);
        this.state = new HeartRateSensorState(deviceID);
    }

    private state: HeartRateSensorState;

    private page: Page = {
        oldPage: -1,
        pageState: PageState.INIT_PAGE,
    };

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, this.page, data);
    }
}
