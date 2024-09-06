/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#523_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-speed-and-cadence/
 */

import { AntPlusSensor } from "../antPlusSensor.js";
import { updateState } from "./speedCadenceUtils.js";
import { SpeedCadenceSensorState } from "./speedCadenceSensorState.js";

/**
 * Represents a Bicycle Speed and Cadence sensor.
 * This class extends the AntPlusSensor class to handle specific data related to speed and cadence.
 */
export class SpeedCadenceSensor extends AntPlusSensor {
    /**
     * The device type code for Bicycle Speed and Cadence sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number = 0x79;

    /**
     * The wheel circumference in meters, used to calculate speed.
     * @type {number}
     * @default 2.199
     */
    wheelCircumference: number = 2.199; // default 70cm wheel

    /**
     * Sets the wheel circumference for speed calculation.
     *
     * @public
     * @param {number} wheelCircumference - The wheel circumference in meters.
     * @returns {void}
     *
     * @example
     * const sensor = new SpeedCadenceSensor();
     * sensor.setWheelCircumference(2.105); // Sets the wheel circumference to 2.105 meters
     */
    public setWheelCircumference(wheelCircumference: number) {
        this.wheelCircumference = wheelCircumference;
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
     * const sensor = new SpeedCadenceSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    public async attach(channel: number, deviceId: number): Promise<void> {
        await super.attachSensor(channel, "receive", deviceId, SpeedCadenceSensor.deviceType, 0, 255, 8086);
        this.state = new SpeedCadenceSensorState(deviceId);
    }

    /**
     * The current state of the Bicycle Speed and Cadence sensor.
     * @private
     * @type {SpeedCadenceSensorState}
     */
    private state!: SpeedCadenceSensorState;

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
    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
