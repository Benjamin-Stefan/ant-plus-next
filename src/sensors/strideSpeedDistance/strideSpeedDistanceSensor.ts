/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#528_tab
 * Spec sheet: https://www.thisisant.com/resources/stride-based-speed-and-distance-monitor/
 */

import { AntPlusSensor } from "../antPlusSensor.js";
import { updateState } from "./strideSpeedDistanceUtils.js";
import { StrideSpeedDistanceSensorState } from "./strideSpeedDistanceSensorState.js";

/**
 * Represents a Stride-Based Speed and Distance Monitor (SDM) sensor.
 * This class extends the AntPlusSensor class to provide specific functionality for handling SDM sensor data.
 */
export class StrideSpeedDistanceSensor extends AntPlusSensor {
    /**
     * The device type code for Stride-Based Speed and Distance Monitor (SDM) sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number = 124;

    /**
     * Attaches the sensor to a specified ANT+ channel and initializes its state.
     *
     * @public
     * @param {number} channel - The ANT+ channel number used for communication with the sensor.
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * const sensor = new StrideSpeedDistanceSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    public async attach(channel: number, deviceId: number): Promise<void> {
        await super.attachSensor(channel, "receive", deviceId, StrideSpeedDistanceSensor.deviceType, 0, 255, 8134);
        this.state = new StrideSpeedDistanceSensorState(deviceId);
    }

    /**
     * The current state of the Stride-Based Speed and Distance Monitor sensor.
     * @private
     * @type {StrideSpeedDistanceSensorState}
     */
    private state!: StrideSpeedDistanceSensorState;

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
    protected updateState(deviceId: number, data: DataView) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
}
