import { EnvironmentSensorState } from "./environmentSensorState.js";
/**
 * Represents the state of an Environment Sensor during scanning.
 * Extends the EnvironmentSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and signal threshold.
 */
export declare class EnvironmentScanState extends EnvironmentSensorState {
    /**
     * The received signal strength indicator (RSSI) of the sensor signal.
     * Indicates the strength of the received signal from the environment sensor.
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
