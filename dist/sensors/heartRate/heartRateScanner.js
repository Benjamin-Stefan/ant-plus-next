import { PageState, updateState } from "./heartRateUtils.js";
import { HeartRateScannerState } from "./heartRateScannerState.js";
import { HeartRateSensor } from "./heartRateSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";
export class HeartRateScanner extends AntPlusScanner {
    constructor() {
        super(...arguments);
        this.states = {};
        this.pages = {};
    }
    deviceType() {
        return HeartRateSensor.deviceType;
    }
    createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new HeartRateScannerState(deviceId);
        }
        if (!this.pages[deviceId]) {
            this.pages[deviceId] = { oldPage: -1, pageState: PageState.INIT_PAGE };
        }
    }
    updateRssiAndThreshold(deviceId, rssi, threshold) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }
    updateState(deviceId, data) {
        updateState(this, this.states[deviceId], this.pages[deviceId], data);
    }
}
//# sourceMappingURL=heartRateScanner.js.map