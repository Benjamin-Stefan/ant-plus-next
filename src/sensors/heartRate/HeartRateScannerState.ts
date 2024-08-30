import { HeartRateSensorState } from "./HeartRateSensorState.js";

export class HeartRateScannerState extends HeartRateSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
