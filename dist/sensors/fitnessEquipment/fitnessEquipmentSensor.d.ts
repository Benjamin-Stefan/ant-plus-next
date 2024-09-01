import { AntPlusSensor } from "../antPlusSensor.js";
import { SendCallback } from "../../types/sendCallback.js";
/**
 * Represents a Fitness Equipment sensor.
 * This class extends the AntPlusSensor class to handle specific data related to fitness equipment.
 */
export declare class FitnessEquipmentSensor extends AntPlusSensor {
    /**
     * The device type code for Fitness Equipment sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number;
    /**
     * The current state of the Fitness Equipment sensor.
     * @private
     * @type {FitnessEquipmentSensorState}
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
     * const sensor = new FitnessEquipmentSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    attach(channel: number, deviceId: number): void;
    /**
     * Updates the state of the sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {Buffer} data - The raw data buffer received from the sensor.
     * @returns {void}
     */
    protected updateState(deviceId: number, data: Buffer): void;
    /**
     * Sends user configuration data to the sensor internally.
     *
     * @private
     * @param {number} [userWeight] - The user's weight in kilograms.
     * @param {number} [bikeWeight] - The weight of the bike in kilograms.
     * @param {number} [wheelDiameter] - The diameter of the wheel in meters.
     * @param {number} [gearRatio] - The gear ratio.
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     */
    private setUserConfigurationInternal;
    /**
     * Sets the user configuration for the sensor.
     *
     * @public
     * @param {number|SendCallback} [userWeightOrCallback] - The user's weight in kilograms or a callback function.
     * @param {number} [bikeWeight] - The weight of the bike in kilograms.
     * @param {number} [wheelDiameter] - The diameter of the wheel in meters.
     * @param {number} [gearRatio] - The gear ratio.
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.setUserConfiguration(70, 10, 0.7, 3.5, callbackFunction);
     */
    setUserConfiguration(userWeightOrCallback?: number | SendCallback, bikeWeight?: number, wheelDiameter?: number, gearRatio?: number, cbk?: SendCallback): void;
    /**
     * Sets the basic resistance level on the fitness equipment.
     *
     * @public
     * @param {number} resistance - The resistance level to set (0 to 100).
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.setBasicResistance(50, callbackFunction);
     */
    setBasicResistance(resistance: number, cbk?: SendCallback): void;
    /**
     * Sets the target power level on the fitness equipment.
     *
     * @public
     * @param {number} power - The target power level in watts.
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.setTargetPower(250, callbackFunction);
     */
    setTargetPower(power: number, cbk?: SendCallback): void;
    /**
     * Sends wind resistance data to the sensor internally.
     *
     * @private
     * @param {number} [windCoeff] - The wind resistance coefficient.
     * @param {number} [windSpeed] - The wind speed in km/h.
     * @param {number} [draftFactor] - The drafting factor (0 to 1).
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     */
    private setWindResistanceInternal;
    /**
     * Sets the wind resistance on the fitness equipment.
     *
     * @public
     * @param {number|SendCallback} [windCoeffOrCallback] - The wind resistance coefficient or a callback function.
     * @param {number} [windSpeed] - The wind speed in km/h.
     * @param {number} [draftFactor] - The drafting factor (0 to 1).
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.setWindResistance(0.5, 20, 0.1, callbackFunction);
     */
    setWindResistance(windCoeffOrCallback?: number | SendCallback, windSpeed?: number, draftFactor?: number, cbk?: SendCallback): void;
    /**
     * Sends track resistance data to the sensor internally.
     *
     * @private
     * @param {number} [slope] - The track slope percentage.
     * @param {number} [rollingResistanceCoeff] - The rolling resistance coefficient.
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     */
    private setTrackResistanceInternal;
    /**
     * Sets the track resistance on the fitness equipment.
     *
     * @public
     * @param {number|SendCallback} [slopeOrCallback] - The track slope percentage or a callback function.
     * @param {number} [rollingResistanceCoeff] - The rolling resistance coefficient.
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.setTrackResistance(5, 0.005, callbackFunction);
     */
    setTrackResistance(slopeOrCallback?: number | SendCallback, rollingResistanceCoeff?: number, cbk?: SendCallback): void;
}
