import { HeartRateSensorState } from "./heartRateSensorState.js";

export class HeartRateScannerState extends HeartRateSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
