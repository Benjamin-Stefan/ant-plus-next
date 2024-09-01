import { SpeedSensorState } from "./speedSensorState.js";

/**
 * Represents the state of a Speed sensor during scanning.
 * Extends the SpeedSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and signal threshold.
 */
export class SpeedScanState extends SpeedSensorState {
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
