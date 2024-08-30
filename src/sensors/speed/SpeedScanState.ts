import { SpeedSensorState } from "./SpeedSensorState.js";

export class SpeedScanState extends SpeedSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
