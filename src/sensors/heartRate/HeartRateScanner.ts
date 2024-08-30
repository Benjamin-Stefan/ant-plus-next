import { Page, PageState, updateState } from "./heartRateUtils.js";
import { HeartRateScannerState } from "./heartRateScannerState.js";
import { HeartRateSensor } from "./heartRateSensor.js";
import { AntPlusScanner } from "../antPlusScanner.js";

export class HeartRateScanner extends AntPlusScanner {
    protected deviceType() {
        return HeartRateSensor.deviceType;
    }

    private states: { [id: number]: HeartRateScannerState } = {};

    private pages: { [id: number]: Page } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new HeartRateScannerState(deviceId);
        }

        if (!this.pages[deviceId]) {
            this.pages[deviceId] = { oldPage: -1, pageState: PageState.INIT_PAGE };
        }
    }

    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }

    protected updateState(deviceId: number, data: Buffer) {
        updateState(this, this.states[deviceId], this.pages[deviceId], data);
    }
}
