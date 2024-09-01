/**
 * Represents the state of a Speed sensor.
 * This class holds the data fields associated with the state of a Speed sensor, including
 * speed, distance, event times, and various sensor-specific details.
 */
export declare class SpeedSensorState {
    /**
     * Creates an instance of the SpeedSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new SpeedSensorState(12345);
     */
    constructor(deviceId: number);
    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;
    /**
     * The time of the last speed event in seconds, measured as a fractional part.
     * @type {number | undefined}
     */
    SpeedEventTime: number | undefined;
    /**
     * The cumulative count of speed revolutions since the sensor started.
     * @type {number | undefined}
     */
    CumulativeSpeedRevolutionCount: number | undefined;
    /**
     * The calculated distance traveled in meters.
     * @type {number | undefined}
     */
    CalculatedDistance: number | undefined;
    /**
     * The calculated speed in meters per second (m/s).
     * @type {number | undefined}
     */
    CalculatedSpeed: number | undefined;
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
     * Indicates whether the sensor detects motion.
     * @type {boolean | undefined}
     */
    Motion?: boolean;
}
