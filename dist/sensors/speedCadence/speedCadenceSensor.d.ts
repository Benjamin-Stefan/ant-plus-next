import { AntPlusSensor } from "../antPlusSensor.js";
/**
 * Represents a Bicycle Speed and Cadence sensor.
 * This class extends the AntPlusSensor class to handle specific data related to speed and cadence.
 */
export declare class SpeedCadenceSensor extends AntPlusSensor {
    /**
     * The device type code for Bicycle Speed and Cadence sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number;
    /**
     * The wheel circumference in meters, used to calculate speed.
     * @type {number}
     * @default 2.199
     */
    wheelCircumference: number;
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
    setWheelCircumference(wheelCircumference: number): void;
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
    attach(channel: number, deviceId: number): void;
    /**
     * The current state of the Bicycle Speed and Cadence sensor.
     * @private
     * @type {SpeedCadenceSensorState}
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
