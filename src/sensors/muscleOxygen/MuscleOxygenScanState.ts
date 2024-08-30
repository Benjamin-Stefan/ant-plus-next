import { MuscleOxygenSensorState } from "./MuscleOxygenSensorState.js";

export class MuscleOxygenScanState extends MuscleOxygenSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
