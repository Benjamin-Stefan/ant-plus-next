import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";
/**
 * Represents the state of a Stride-Based Speed and Distance Monitor (SDM) sensor during scanning.
 * Extends the StrideSpeedDistanceSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and the signal threshold.
 */
export declare class StrideSpeedDistanceScanState extends StrideSpeedDistanceSensorState {
    /**
     * The received signal strength indicator (RSSI) of the sensor signal.
     * @type {number | undefined}
     */
    Rssi: number | undefined;
    /**
     * The signal threshold value.
     * @type {number | undefined}
     */
    Threshold: number | undefined;
}
//# sourceMappingURL=strideSpeedDistanceScanState.d.ts.map