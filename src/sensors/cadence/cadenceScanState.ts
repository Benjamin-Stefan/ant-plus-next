import { CadenceSensorState } from "./cadenceSensorState.js";

/**
 * Represents the state of a Cadence Sensor during scanning.
 * Extends the CadenceSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and signal threshold.
 */
export class CadenceScanState extends CadenceSensorState {
    /**
     * The received signal strength indicator (RSSI) of the sensor signal.
     * Indicates the strength of the received signal from the cadence sensor.
     * @type {number | undefined}
     */
    Rssi: number | undefined;

    /**
     * The signal threshold value for the sensor.
     * Represents the minimum signal strength required for a reliable connection.
     * @type {number | undefined}
     */
    Threshold: number | undefined;
}
