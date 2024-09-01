/**
 * Represents the state of a Cadence Sensor.
 * This class holds the data fields associated with the state of a cadence sensor,
 * including event times, revolution counts, and device information.
 */
export class CadenceSensorState {
    /**
     * Creates an instance of the CadenceSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     *
     * @example
     * const sensorState = new CadenceSensorState(12345);
     */
    constructor(deviceId) {
        this.DeviceId = deviceId;
    }
}
//# sourceMappingURL=cadenceSensorState.js.map