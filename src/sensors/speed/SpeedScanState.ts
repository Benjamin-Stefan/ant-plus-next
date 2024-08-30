import { SpeedSensorState } from "./speedSensorState.js";

export class SpeedScanState extends SpeedSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
