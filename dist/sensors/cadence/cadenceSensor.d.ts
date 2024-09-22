import { AntPlusSensor } from "../antPlusSensor.js";
/**
 * Represents a Bicycle Cadence sensor.
 * This class extends the AntPlusSensor class to handle specific data related to cadence measurement.
 *
 * @category Sensors
 */
export declare class CadenceSensor extends AntPlusSensor {
    /**
     * The device type code for Bicycle Cadence sensors.
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
     * The current state of the Bicycle Cadence sensor.
     * @private
     * @type {CadenceSensorState}
     */
    private state;
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
    attach(channel: number, deviceId: number): Promise<void>;
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
    setWheelCircumference(wheelCircumference: number): void;
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
    protected updateState(deviceId: number, data: DataView): void;
}
//# sourceMappingURL=cadenceSensor.d.ts.map