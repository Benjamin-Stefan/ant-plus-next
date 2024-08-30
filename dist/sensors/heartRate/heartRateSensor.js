import { PageState, updateState } from "./heartRateUtils.js";
import { HeartRateSensorState } from "./heartRateSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
export class HeartRateSensor extends AntPlusSensor {
    constructor() {
        super(...arguments);
        this.page = {
            oldPage: -1,
            pageState: PageState.INIT_PAGE,
        };
    }
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, HeartRateSensor.deviceType, 0, 255, 8070);
        this.state = new HeartRateSensorState(deviceId);
    }
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, this.page, data);
    }
}
HeartRateSensor.deviceType = 120;
//# sourceMappingURL=heartRateSensor.js.map