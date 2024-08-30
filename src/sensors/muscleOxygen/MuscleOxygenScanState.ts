import { MuscleOxygenSensorState } from "./muscleOxygenSensorState.js";

export class MuscleOxygenScanState extends MuscleOxygenSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
