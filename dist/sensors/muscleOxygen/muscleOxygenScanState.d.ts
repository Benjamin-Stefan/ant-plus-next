import { MuscleOxygenSensorState } from "./muscleOxygenSensorState.js";
/**
 * Represents the state of a Muscle Oxygen sensor during scanning.
 * Extends the MuscleOxygenSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and signal threshold.
 */
export declare class MuscleOxygenScanState extends MuscleOxygenSensorState {
    /**
     * The received signal strength indicator (RSSI) of the sensor signal.
     * @type {number | undefined}
     */
    Rssi: number | undefined;
    /**
     * The signal threshold value for the sensor.
     * @type {number | undefined}
     */
    Threshold: number | undefined;
}
//# sourceMappingURL=muscleOxygenScanState.d.ts.map