import { HeartRateSensorState } from "./heartRateSensorState.js";
/**
 * Represents the state of a Heart Rate sensor during scanning.
 * Extends the HeartRateSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and signal threshold.
 */
export declare class HeartRateScannerState extends HeartRateSensorState {
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
//# sourceMappingURL=heartRateScannerState.d.ts.map