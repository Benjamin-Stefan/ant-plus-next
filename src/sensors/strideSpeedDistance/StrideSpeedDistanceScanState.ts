import { StrideSpeedDistanceSensorState } from "./StrideSpeedDistanceSensorState.js";

export class StrideSpeedDistanceScanState extends StrideSpeedDistanceSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
