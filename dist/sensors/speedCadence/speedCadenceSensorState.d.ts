/**
 * Represents the state of a Speed and Cadence sensor.
 * This class holds the data fields associated with the state of a Speed and Cadence sensor, including
 * cadence, speed, distance, and event times.
 */
export declare class SpeedCadenceSensorState {
    /**
     * Creates an instance of the SpeedCadenceSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new SpeedCadenceSensorState(12345);
     */
    constructor(deviceId: number);
    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;
    /**
     * The time of the last cadence event in seconds, measured as a fractional part.
     * @type {number | undefined}
     */
    CadenceEventTime: number | undefined;
    /**
     * The cumulative count of cadence revolutions since the sensor started.
     * @type {number | undefined}
     */
    CumulativeCadenceRevolutionCount: number | undefined;
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
     * The calculated cadence in revolutions per minute (RPM).
     * @type {number | undefined}
     */
    CalculatedCadence: number | undefined;
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
}
