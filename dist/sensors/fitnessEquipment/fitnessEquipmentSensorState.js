/**
 * Represents the state of a Fitness Equipment sensor.
 * This class holds the data fields associated with the state of a fitness equipment sensor,
 * including metrics such as heart rate, speed, distance, power, and more.
 */
export class FitnessEquipmentSensorState {
    /**
     * Creates an instance of the FitnessEquipmentSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new FitnessEquipmentSensorState(12345);
     */
    constructor(deviceId) {
        /**
         * The list of paired devices associated with the sensor.
         * @type {PairedDevice[]}
         */
        this.PairedDevices = [];
        this.DeviceId = deviceId;
    }
}
//# sourceMappingURL=fitnessEquipmentSensorState.js.map