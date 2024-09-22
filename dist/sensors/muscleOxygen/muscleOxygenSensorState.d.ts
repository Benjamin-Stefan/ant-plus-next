/**
 * Represents the state of a Muscle Oxygen sensor.
 * This class holds the data fields associated with the state of a Muscle Oxygen sensor, including
 * event count, device details, measurement data, and battery status.
 */
export declare class MuscleOxygenSensorState {
    /**
     * Creates an instance of the MuscleOxygenSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new MuscleOxygenSensorState(12345);
     */
    constructor(deviceId: number);
    /**
     * The count of events detected by the sensor.
     * @type {number | undefined}
     */
    _EventCount?: number;
    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;
    /**
     * Indicates whether UTC time is required by the sensor.
     * @type {boolean | undefined}
     */
    UTCTimeRequired?: boolean;
    /**
     * Indicates whether ANT-FS is supported by the sensor.
     * @type {boolean | undefined}
     */
    SupportANTFS?: boolean;
    /**
     * The measurement interval in seconds.
     * Possible values: 0.25, 0.5, 1, or 2 seconds.
     * @type {0.25 | 0.5 | 1 | 2 | undefined}
     */
    MeasurementInterval?: 0.25 | 0.5 | 1 | 2;
    /**
     * The total hemoglobin concentration.
     * Can be a numeric value, "AmbientLightTooHigh", or "Invalid".
     * @type {number | "AmbientLightTooHigh" | "Invalid" | undefined}
     */
    TotalHemoglobinConcentration?: number | "AmbientLightTooHigh" | "Invalid";
    /**
     * The percentage of saturated hemoglobin from the previous measurement.
     * Can be a numeric value, "AmbientLightTooHigh", or "Invalid".
     * @type {number | "AmbientLightTooHigh" | "Invalid" | undefined}
     */
    PreviousSaturatedHemoglobinPercentage?: number | "AmbientLightTooHigh" | "Invalid";
    /**
     * The percentage of saturated hemoglobin from the current measurement.
     * Can be a numeric value, "AmbientLightTooHigh", or "Invalid".
     * @type {number | "AmbientLightTooHigh" | "Invalid" | undefined}
     */
    CurrentSaturatedHemoglobinPercentage?: number | "AmbientLightTooHigh" | "Invalid";
    /**
     * The hardware version of the sensor.
     * @type {number | undefined}
     */
    HwVersion?: number;
    /**
     * The manufacturer ID of the sensor.
     * @type {number | undefined}
     */
    ManId?: number;
    /**
     * The model number of the sensor.
     * @type {number | undefined}
     */
    ModelNum?: number;
    /**
     * The software version of the sensor.
     * @type {number | undefined}
     */
    SwVersion?: number;
    /**
     * The serial number of the sensor.
     * @type {number | undefined}
     */
    SerialNumber?: number;
    /**
     * The cumulative operating time of the sensor in seconds.
     * @type {number | undefined}
     */
    OperatingTime?: number;
    /**
     * The battery voltage of the sensor.
     * @type {number | undefined}
     */
    BatteryVoltage?: number;
    /**
     * The battery status of the sensor.
     * Can be "New", "Good", "Ok", "Low", "Critical", or "Invalid".
     * @type {"New" | "Good" | "Ok" | "Low" | "Critical" | "Invalid" | undefined}
     */
    BatteryStatus?: "New" | "Good" | "Ok" | "Low" | "Critical" | "Invalid";
    /**
     * The battery status bit of the sensor.
     */
    BatteryStatusBit?: number;
}
//# sourceMappingURL=muscleOxygenSensorState.d.ts.map