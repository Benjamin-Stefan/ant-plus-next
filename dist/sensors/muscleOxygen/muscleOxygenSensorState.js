/**
 * Represents the state of a Muscle Oxygen sensor.
 * This class holds the data fields associated with the state of a Muscle Oxygen sensor, including
 * event count, device details, measurement data, and battery status.
 */
export class MuscleOxygenSensorState {
    /**
     * Creates an instance of the MuscleOxygenSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new MuscleOxygenSensorState(12345);
     */
    constructor(deviceId) {
        this.DeviceId = deviceId;
    }
}
//# sourceMappingURL=muscleOxygenSensorState.js.map