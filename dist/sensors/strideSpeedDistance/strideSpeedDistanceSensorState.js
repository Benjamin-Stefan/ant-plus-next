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
    constructor(deviceId) {
        this.DeviceId = deviceId;
    }
}
//# sourceMappingURL=strideSpeedDistanceSensorState.js.map