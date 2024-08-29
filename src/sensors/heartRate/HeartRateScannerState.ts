import { HeartRateSensorState } from "./HeartRateSensorState.js";

export class HeartRateScannerState extends HeartRateSensorState {
    Rssi: number;
    Threshold: number;
}
