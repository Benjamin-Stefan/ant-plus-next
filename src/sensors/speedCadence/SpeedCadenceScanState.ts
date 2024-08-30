import { SpeedCadenceSensorState } from "./speedCadenceSensorState.js";

export class SpeedCadenceScanState extends SpeedCadenceSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
