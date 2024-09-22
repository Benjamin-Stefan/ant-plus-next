import { FitnessEquipmentSensorState } from "./fitnessEquipmentSensorState.js";
/**
 * Represents the state of a Fitness Equipment sensor during scanning.
 * Extends the FitnessEquipmentSensorState to include additional fields specific to scanning,
 * such as RSSI (Received Signal Strength Indicator) and signal threshold.
 */
export declare class FitnessEquipmentScanState extends FitnessEquipmentSensorState {
    /**
     * The received signal strength indicator (RSSI) of the sensor signal.
     * Indicates the strength of the received signal from the fitness equipment sensor.
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
//# sourceMappingURL=fitnessEquipmentScanState.d.ts.map