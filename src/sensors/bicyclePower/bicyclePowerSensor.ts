/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#521_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-power/
 */

import { updateState } from "./bicyclePowerUtils.js";
import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";

/**
 * Represents a Bicycle Power sensor.
 * This class extends the AntPlusSensor class to handle specific data related to bicycle power measurement.
 */
export class BicyclePowerSensor extends AntPlusSensor {
    /**
     * The device type code for Bicycle Power sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number = 0x0b;

    /**
     * The current state of the Bicycle Power sensor.
     * @private
     * @type {BicyclePowerSensorState}
     */
    private state!: BicyclePowerSensorState;

    /**
     * Attaches the sensor to a specified ANT+ channel and initializes its state.
     *
     * @public
     * @param {number} channel - The ANT+ channel number used for communication with the sensor.
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * const sensor = new BicyclePowerSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    public attach(channel: number, deviceId: number): void {
        super.attachSensor(channel, "receive", deviceId, BicyclePowerSensor.deviceType, 0, 255, 8182);
        this.state = new BicyclePowerSensorState(deviceId);
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
     * const dataBuffer = getDataFromSensor(); // Assume this function gets data from a sensor
     * sensor.updateState(12345, dataBuffer);
     */
    protected updateState(deviceId: number, data: Buffer): void {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
