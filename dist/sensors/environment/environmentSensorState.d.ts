/**
 * Represents the state of an Environment Sensor.
 * This class holds the data fields associated with the state of an environment sensor,
 * such as the event count and temperature.
 */
export declare class EnvironmentSensorState {
    /**
     * Creates an instance of the EnvironmentSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     *
     * @example
     * const sensorState = new EnvironmentSensorState(12345);
     */
    constructor(deviceId: number);
    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;
    /**
     * The event count recorded by the sensor.
     * @type {number | undefined}
     */
    EventCount: number | undefined;
    /**
     * The temperature measured by the sensor, in degrees Celsius.
     * @type {number | undefined}
     */
    Temperature: number | undefined;
}
//# sourceMappingURL=environmentSensorState.d.ts.map