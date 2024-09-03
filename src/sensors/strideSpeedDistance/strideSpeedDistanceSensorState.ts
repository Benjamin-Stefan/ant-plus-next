/**
 * Represents the state of a Stride-Based Speed and Distance Monitor (SDM) sensor.
 * This class holds the data fields associated with the SDM sensor's state, including device ID,
 * speed, distance, cadence, and other relevant metrics.
 */
export class StrideSpeedDistanceSensorState {
    /**
     * Creates an instance of the StrideSpeedDistanceSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new StrideSpeedDistanceSensorState(12345);
     */
    constructor(deviceId: number) {
        this.DeviceId = deviceId;
    }

    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;

    /**
     * The fractional part of the elapsed time in seconds.
     * @type {number | undefined}
     */
    TimeFractional: number | undefined;

    /**
     * The integer part of the elapsed time in seconds.
     * @type {number | undefined}
     */
    TimeInteger: number | undefined;

    /**
     * The integer part of the total distance traveled in meters.
     * @type {number | undefined}
     */
    DistanceInteger: number | undefined;

    /**
     * The fractional part of the total distance traveled in meters.
     * @type {number | undefined}
     */
    DistanceFractional: number | undefined;

    /**
     * The integer part of the speed in meters per second.
     * @type {number | undefined}
     */
    SpeedInteger: number | undefined;

    /**
     * The fractional part of the speed in meters per second.
     * @type {number | undefined}
     */
    SpeedFractional: number | undefined;

    /**
     * The total number of strides counted.
     * @type {number | undefined}
     */
    StrideCount: number | undefined;

    /**
     * The latency in milliseconds between updates.
     * @type {number | undefined}
     */
    UpdateLatency: number | undefined;

    /**
     * The integer part of the cadence in strides per minute.
     * @type {number | undefined}
     */
    CadenceInteger: number | undefined;

    /**
     * The fractional part of the cadence in strides per minute.
     * @type {number | undefined}
     */
    CadenceFractional: number | undefined;

    /**
     * The status of the sensor, represented by a numeric value.
     * @type {number | undefined}
     */
    Status: number | undefined;

    /**
     * The total calories burned, if available.
     * @type {number | undefined}
     */
    Calories: number | undefined;
}
