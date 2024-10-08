/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#524_tab
 * Spec sheet: https://www.thisisant.com/resources/environment/
 */

import { updateState } from "./environmentUtils.js";
import { EnvironmentSensorState } from "./environmentSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";

/**
 * Represents an Environment sensor.
 * This class extends the AntPlusSensor class to handle specific data related to environmental monitoring.
 *
 * @category Sensors
 */
export class EnvironmentSensor extends AntPlusSensor {
    /**
     * The device type code for Environment sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number = 25;

    /**
     * Attaches the sensor to a specified ANT+ channel and initializes its state.
     *
     * @public
     * @param {number} channel - The ANT+ channel number used for communication with the sensor.
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * const sensor = new EnvironmentSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    public async attach(channel: number, deviceId: number): Promise<void> {
        await super.attachSensor(channel, "receive", deviceId, EnvironmentSensor.deviceType, 0, 255, 8192);
        this.state = new EnvironmentSensorState(deviceId);
    }

    /**
     * The current state of the Environment sensor.
     * @private
     * @type {EnvironmentSensorState}
     */
    private state!: EnvironmentSensorState;

    /**
     * Updates the state of the sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {DataView} data - The raw data buffer received from the sensor.
     * @returns {void}
     *
     * @example
     * const dataBuffer = getDataFromSensor(); // assume this function gets data from a sensor
     * sensor.updateState(12345, dataBuffer);
     */
    protected updateState(deviceId: number, data: DataView): void {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
