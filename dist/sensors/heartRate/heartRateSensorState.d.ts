/**
 * Represents the state of a Heart Rate sensor.
 * This class holds the data fields associated with the state of a Heart Rate sensor,
 * including heart rate measurements, device details, and battery status.
 */
export declare class HeartRateSensorState {
    /**
     * Creates an instance of the HeartRateSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new HeartRateSensorState(12345);
     */
    constructor(deviceId: number);
    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;
    /**
     * The time of the last beat event in milliseconds.
     * @type {number | undefined}
     */
    BeatTime: number | undefined;
    /**
     * The cumulative count of beat events since the sensor started.
     * @type {number | undefined}
     */
    BeatCount: number | undefined;
    /**
     * The computed heart rate in beats per minute (BPM).
     * @type {number | undefined}
     */
    ComputedHeartRate: number | undefined;
    /**
     * The cumulative operating time of the sensor in seconds.
     * @type {number | undefined}
     */
    OperatingTime?: number;
    /**
     * The manufacturer ID of the sensor.
     * @type {number | undefined}
     */
    ManId?: number;
    /**
     * The serial number of the sensor.
     * @type {number | undefined}
     */
    SerialNumber?: number;
    /**
     * The hardware version of the sensor.
     * @type {number | undefined}
     */
    HwVersion?: number;
    /**
     * The software version of the sensor.
     * @type {number | undefined}
     */
    SwVersion?: number;
    /**
     * The model number of the sensor.
     * @type {number | undefined}
     */
    ModelNum?: number;
    /**
     * The time of the previous beat measurement.
     * @type {number | undefined}
     */
    PreviousBeat?: number;
    /**
     * The average heart rate over a certain interval.
     * @type {number | undefined}
     */
    IntervalAverage?: number;
    /**
     * The maximum heart rate over a certain interval.
     * @type {number | undefined}
     */
    IntervalMax?: number;
    /**
     * The average heart rate over the current session.
     * @type {number | undefined}
     */
    SessionAverage?: number;
    /**
     * The supported features of the sensor.
     * @type {number | undefined}
     */
    SupportedFeatures?: number;
    /**
     * The enabled features of the sensor.
     * @type {number | undefined}
     */
    EnabledFeatures?: number;
    /**
     * The battery level of the sensor.
     * @type {number | undefined}
     */
    BatteryLevel?: number;
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
//# sourceMappingURL=heartRateSensorState.d.ts.map