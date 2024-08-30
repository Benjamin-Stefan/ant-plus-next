import { HeartRateScanner } from "./heartRateScanner.js";
import { HeartRateScannerState } from "./heartRateScannerState.js";
import { HeartRateSensor } from "./heartRateSensor.js";
import { HeartRateSensorState } from "./heartRateSensorState.js";
export declare enum PageState {
    INIT_PAGE = 0,
    STD_PAGE = 1,
    EXT_PAGE = 2
}
export type Page = {
    oldPage: number;
    pageState: PageState;
};
export declare function updateState(sensor: HeartRateSensor | HeartRateScanner, state: HeartRateSensorState | HeartRateScannerState, page: Page, data: Buffer): void;
