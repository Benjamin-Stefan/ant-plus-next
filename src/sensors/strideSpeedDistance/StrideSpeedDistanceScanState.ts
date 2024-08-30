import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";

export class StrideSpeedDistanceScanState extends StrideSpeedDistanceSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
