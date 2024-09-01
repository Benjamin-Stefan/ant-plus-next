/**
 * Represents the state of a Speed and Cadence sensor.
 * This class holds the data fields associated with the state of a Speed and Cadence sensor, including
 * cadence, speed, distance, and event times.
 */
export class SpeedCadenceSensorState {
    /**
     * Creates an instance of the SpeedCadenceSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new SpeedCadenceSensorState(12345);
     */
    constructor(deviceId) {
        this.DeviceId = deviceId;
    }
}
//# sourceMappingURL=speedCadenceSensorState.js.map