import { SpeedCadenceSensorState } from "./SpeedCadenceSensorState.js";

export class SpeedCadenceScanState extends SpeedCadenceSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
