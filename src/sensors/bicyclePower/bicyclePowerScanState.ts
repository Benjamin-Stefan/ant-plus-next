import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";

/**
 * Represents the scan state of a Bicycle Power sensor.
 * Extends the BicyclePowerSensorState to include additional data related to signal quality during a scan.
 */
export class BicyclePowerScanState extends BicyclePowerSensorState {
    /**
     * Received Signal Strength Indicator (RSSI).
     * Represents the strength of the received signal from the sensor.
     * @type {number | undefined}
     */
    Rssi: number | undefined;

    /**
     * The threshold value for the RSSI.
     * Represents the minimum acceptable signal strength for communication.
     * @type {number | undefined}
     */
    Threshold: number | undefined;
}
