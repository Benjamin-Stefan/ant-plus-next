/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#521_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-power/
 */
import { updateState } from "./fitnessEquipmentUtils.js";
import { FitnessEquipmentSensorState } from "./fitnessEquipmentSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
import { Messages } from "../../utils/messages.js";
/**
 * Represents a Fitness Equipment sensor.
 * This class extends the AntPlusSensor class to handle specific data related to fitness equipment.
 */
export class FitnessEquipmentSensor extends AntPlusSensor {
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
    attach(channel, deviceId) {
        super.attachSensor(channel, "receive", deviceId, FitnessEquipmentSensor.deviceType, 0, 255, 8192);
        this.state = new FitnessEquipmentSensorState(deviceId);
    }
    /**
     * Updates the state of the sensor based on incoming data.
     *
     * @protected
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @param {Buffer} data - The raw data buffer received from the sensor.
     * @returns {void}
     */
    updateState(deviceId, data) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }
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
    setUserConfigurationInternal(userWeight, bikeWeight, wheelDiameter, gearRatio, cbk) {
        const m = userWeight == null ? 0xffff : Math.max(0, Math.min(65534, Math.round(userWeight * 100)));
        const df = wheelDiameter == null ? 0xff : Math.round(wheelDiameter * 10) % 10;
        const mb = bikeWeight == null ? 0xfff : Math.max(0, Math.min(1000, Math.round(bikeWeight * 20)));
        const d = wheelDiameter == null ? 0xff : Math.max(0, Math.min(254, Math.round(wheelDiameter)));
        const gr = gearRatio == null ? 0x00 : Math.max(1, Math.min(255, Math.round(gearRatio / 0.03)));
        const payload = [0x37, m & 0xff, (m >> 8) & 0xff, 0xff, (df & 0xf) | ((mb & 0xf) << 4), (mb >> 4) & 0xf, d & 0xff, gr & 0xff];
        const msg = Messages.acknowledgedData(this.channel, payload);
        this.send(msg, cbk);
    }
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
    setUserConfiguration(userWeightOrCallback, bikeWeight, wheelDiameter, gearRatio, cbk) {
        if (typeof userWeightOrCallback === "function") {
            this.setUserConfigurationInternal(undefined, undefined, undefined, undefined, userWeightOrCallback);
        }
        else if (typeof bikeWeight === "function") {
            this.setUserConfigurationInternal(userWeightOrCallback, undefined, undefined, undefined, bikeWeight);
        }
        else if (typeof wheelDiameter === "function") {
            this.setUserConfigurationInternal(userWeightOrCallback, bikeWeight, undefined, undefined, wheelDiameter);
        }
        else if (typeof gearRatio === "function") {
            this.setUserConfigurationInternal(userWeightOrCallback, bikeWeight, wheelDiameter, undefined, gearRatio);
        }
        else {
            this.setUserConfigurationInternal(userWeightOrCallback, bikeWeight, wheelDiameter, gearRatio, cbk);
        }
    }
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
    setBasicResistance(resistance, cbk) {
        const res = Math.max(0, Math.min(200, Math.round(resistance * 2)));
        const payload = [0x30, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, res & 0xff];
        const msg = Messages.acknowledgedData(this.channel, payload);
        this.send(msg, cbk);
    }
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
    setTargetPower(power, cbk) {
        const p = Math.max(0, Math.min(4000, Math.round(power * 4)));
        const payload = [0x31, 0xff, 0xff, 0xff, 0xff, 0xff, p & 0xff, (p >> 8) & 0xff];
        const msg = Messages.acknowledgedData(this.channel, payload);
        this.send(msg, cbk);
    }
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
    setWindResistanceInternal(windCoeff, windSpeed, draftFactor, cbk) {
        const wc = windCoeff == null ? 0xff : Math.max(0, Math.min(186, Math.round(windCoeff * 100)));
        const ws = windSpeed == null ? 0xff : Math.max(0, Math.min(254, Math.round(windSpeed + 127)));
        const df = draftFactor == null ? 0xff : Math.max(0, Math.min(100, Math.round(draftFactor * 100)));
        const payload = [0x32, 0xff, 0xff, 0xff, 0xff, wc & 0xff, ws & 0xff, df & 0xff];
        const msg = Messages.acknowledgedData(this.channel, payload);
        this.send(msg, cbk);
    }
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
    setWindResistance(windCoeffOrCallback, windSpeed, draftFactor, cbk) {
        if (typeof windCoeffOrCallback === "function") {
            this.setWindResistanceInternal(undefined, undefined, undefined, windCoeffOrCallback);
        }
        else if (typeof windSpeed === "function") {
            this.setWindResistanceInternal(windCoeffOrCallback, undefined, undefined, windSpeed);
        }
        else if (typeof draftFactor === "function") {
            this.setWindResistanceInternal(windCoeffOrCallback, windSpeed, undefined, draftFactor);
        }
        else {
            this.setWindResistanceInternal(windCoeffOrCallback, windSpeed, draftFactor, cbk);
        }
    }
    /**
     * Sends track resistance data to the sensor internally.
     *
     * @private
     * @param {number} [slope] - The track slope percentage.
     * @param {number} [rollingResistanceCoeff] - The rolling resistance coefficient.
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     */
    setTrackResistanceInternal(slope, rollingResistanceCoeff, cbk) {
        const s = slope == null ? 0xffff : Math.max(0, Math.min(40000, Math.round((slope + 200) * 100)));
        const rr = rollingResistanceCoeff == null ? 0xff : Math.max(0, Math.min(254, Math.round(rollingResistanceCoeff * 20000)));
        const payload = [0x33, 0xff, 0xff, 0xff, 0xff, s & 0xff, (s >> 8) & 0xff, rr & 0xff];
        const msg = Messages.acknowledgedData(this.channel, payload);
        this.send(msg, cbk);
    }
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
    setTrackResistance(slopeOrCallback, rollingResistanceCoeff, cbk) {
        if (typeof slopeOrCallback === "function") {
            this.setTrackResistanceInternal(undefined, undefined, slopeOrCallback);
        }
        else if (typeof rollingResistanceCoeff === "function") {
            this.setTrackResistanceInternal(slopeOrCallback, undefined, rollingResistanceCoeff);
        }
        else {
            this.setTrackResistanceInternal(slopeOrCallback, rollingResistanceCoeff, cbk);
        }
    }
}
/**
 * The device type code for Fitness Equipment sensors.
 * @type {number}
 * @readonly
 */
FitnessEquipmentSensor.deviceType = 0x11;
//# sourceMappingURL=fitnessEquipmentSensor.js.map