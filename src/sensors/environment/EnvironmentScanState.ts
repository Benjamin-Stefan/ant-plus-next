import { EnvironmentSensorState } from "./environmentSensorState.js";

export class EnvironmentScanState extends EnvironmentSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
