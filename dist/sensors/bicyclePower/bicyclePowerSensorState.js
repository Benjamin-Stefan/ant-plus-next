/**
 * Represents the state of a Bicycle Power sensor.
 * Stores various metrics and calculated values related to bicycle power, such as pedal power, cadence, torque, and power.
 */
export class BicyclePowerSensorState {
    /**
     * Creates an instance of BicyclePowerSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     */
    constructor(deviceId) {
        /**
         * The offset value used for torque calculations.
         * @type {number}
         * @default 0
         */
        this.offset = 0;
        this.DeviceId = deviceId;
    }
}
//# sourceMappingURL=bicyclePowerSensorState.js.map