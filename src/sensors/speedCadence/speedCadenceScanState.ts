import { SpeedCadenceSensorState } from "./speedCadenceSensorState.js";

/**
 * Represents the state of a Speed and Cadence sensor during scanning.
 * Extends the SpeedCadenceSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and signal threshold.
 */
export class SpeedCadenceScanState extends SpeedCadenceSensorState {
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
