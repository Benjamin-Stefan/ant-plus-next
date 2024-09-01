/**
 * Represents the state of a Cadence Sensor.
 * This class holds the data fields associated with the state of a cadence sensor,
 * including event times, revolution counts, and device information.
 */
export declare class CadenceSensorState {
    /**
     * Creates an instance of the CadenceSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     *
     * @example
     * const sensorState = new CadenceSensorState(12345);
     */
    constructor(deviceId: number);
    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;
    /**
     * The time of the last cadence event, in seconds.
     * @type {number | undefined}
     */
    CadenceEventTime: number | undefined;
    /**
     * The cumulative number of cadence revolutions counted by the sensor.
     * @type {number | undefined}
     */
    CumulativeCadenceRevolutionCount: number | undefined;
    /**
     * The calculated cadence in revolutions per minute (RPM).
     * @type {number | undefined}
     */
    CalculatedCadence: number | undefined;
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
     * Can be one of the following: "New", "Good", "Ok", "Low", "Critical", "Invalid".
     * @type {"New" | "Good" | "Ok" | "Low" | "Critical" | "Invalid" | undefined}
     */
    BatteryStatus?: "New" | "Good" | "Ok" | "Low" | "Critical" | "Invalid";
    /**
     * Indicates whether the sensor is in motion.
     * @type {boolean | undefined}
     */
    Motion?: boolean;
}
