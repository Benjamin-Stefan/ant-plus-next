/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#523_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-speed-and-cadence/
 */
import { updateState } from "./cadenceUtils.js";
import { CadenceSensorState } from "./cadenceSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
/**
 * Represents a Bicycle Cadence sensor.
 * This class extends the AntPlusSensor class to handle specific data related to cadence measurement.
 */
export class CadenceSensor extends AntPlusSensor {
    constructor() {
        super(...arguments);
        /**
         * The wheel circumference in meters, used to calculate speed.
         * @type {number}
         * @default 2.199
         */
        this.wheelCircumference = 2.199; // default 70cm wheel
    }
    /**
     * Attaches the sensor to a specified ANT+ channel and initializes its state.
     *
     * @public
     * @param {number} channel - The ANT+ channel number used for communication with the sensor.
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * const sensor = new CadenceSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, CadenceSensor.deviceType, 0, 255, 8102);
        this.state = new CadenceSensorState(deviceId);
    }
    /**
     * Sets the wheel circumference for speed calculation.
     *
     * @public
     * @param {number} wheelCircumference - The wheel circumference in meters.
     * @returns {void}
     *
     * @example
     * const sensor = new CadenceSensor();
     * sensor.setWheelCircumference(2.105); // Sets the wheel circumference to 2.105 meters
     */
    setWheelCircumference(wheelCircumference) {
        this.wheelCircumference = wheelCircumference;
    }
    /**
     * Updates the state of the sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {Buffer} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // assume this function gets data from a sensor
     * sensor.updateState(12345, dataBuffer);
     */
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
/**
 * The device type code for Bicycle Cadence sensors.
 * @type {number}
 * @readonly
 */
CadenceSensor.deviceType = 0x7a;
//# sourceMappingURL=cadenceSensor.js.map