import { AntPlusSensor } from "../antPlusSensor.js";
/**
 * Represents a Stride-Based Speed and Distance Monitor (SDM) sensor.
 * This class extends the AntPlusSensor class to provide specific functionality for handling SDM sensor data.
 */
export declare class StrideSpeedDistanceSensor extends AntPlusSensor {
    /**
     * The device type code for Stride-Based Speed and Distance Monitor (SDM) sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number;
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
    attach(channel: number, deviceId: number): void;
    /**
     * The current state of the Stride-Based Speed and Distance Monitor sensor.
     * @private
     * @type {StrideSpeedDistanceSensorState}
     */
    private state;
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
    protected updateState(deviceId: number, data: Buffer): void;
}
