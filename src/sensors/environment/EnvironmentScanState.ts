import { EnvironmentSensorState } from "./EnvironmentSensorState.js";

export class EnvironmentScanState extends EnvironmentSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
