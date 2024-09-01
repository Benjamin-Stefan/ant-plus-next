/**
 * Represents the state of a Heart Rate sensor.
 * This class holds the data fields associated with the state of a Heart Rate sensor,
 * including heart rate measurements, device details, and battery status.
 */
export class HeartRateSensorState {
    /**
     * Creates an instance of the HeartRateSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new HeartRateSensorState(12345);
     */
    constructor(deviceId) {
        this.DeviceId = deviceId;
    }
}
//# sourceMappingURL=heartRateSensorState.js.map