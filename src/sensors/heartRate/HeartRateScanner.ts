import { Page, PageState, updateState } from "./HeartRateUtils.js";
import { HeartRateScannerState } from "./HeartRateScannerState.js";
import { HeartRateSensor } from "./HeartRateSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

export class HeartRateScanner extends AntPlusScanner {
    protected deviceType() {
        return HeartRateSensor.deviceType;
    }

    private states: { [id: number]: HeartRateScannerState } = {};

    private pages: { [id: number]: Page } = {};

    protected createStateIfNew(deviceId) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new HeartRateScannerState(deviceId);
        }

        if (!this.pages[deviceId]) {
            this.pages[deviceId] = { oldPage: -1, pageState: PageState.INIT_PAGE };
        }
    }

    protected updateRssiAndThreshold(deviceId, rssi, threshold) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }

    protected updateState(deviceId, data) {
        updateState(this, this.states[deviceId], this.pages[deviceId], data);
    }
}
