/*
 * ANT+ profile: https://www.thisisant.com/developer/ant-plus/device-profiles/#521_tab
 * Spec sheet: https://www.thisisant.com/resources/bicycle-power/
 */

import { updateState } from "./muscleOxygenUtils.js";
import { MuscleOxygenSensorState } from "./muscleOxygenSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
import { SendCallback } from "../../types/sendCallback.js";
import { Messages } from "../../utils/messages.js";

/**
 * Represents a Muscle Oxygen sensor.
 * This class extends the AntPlusSensor class to handle specific data related to muscle oxygen measurements.
 */
export class MuscleOxygenSensor extends AntPlusSensor {
    /**
     * The device type code for Muscle Oxygen sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number = 0x1f;

    /**
     * The current state of the Muscle Oxygen sensor.
     * @private
     * @type {MuscleOxygenSensorState}
     */
    private state!: MuscleOxygenSensorState;

    /**
     * Attaches the sensor to a specified ANT+ channel and initializes its state.
     *
     * @public
     * @param {number} channel - The ANT+ channel number used for communication with the sensor.
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @returns {void}
     *
     * @example
     * const sensor = new MuscleOxygenSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, MuscleOxygenSensor.deviceType, 0, 255, 8192);
        this.state = new MuscleOxygenSensorState(deviceId);
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
    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }

    /**
     * Sends a time-based command to the sensor.
     *
     * @private
     * @param {number} cmd - The command code to be sent.
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor._sendTimeCmd(0x00, callbackFunction);
     */
    private _sendTimeCmd(cmd: number, cbk?: SendCallback) {
        const now = new Date();
        const utc = Math.round((now.getTime() - Date.UTC(1989, 11, 31, 0, 0, 0, 0)) / 1000);
        const offset = -Math.round(now.getTimezoneOffset() / 15);
        const payload = [0x10, cmd & 0xff, 0xff, offset & 0xff, (utc >> 0) & 0xff, (utc >> 8) & 0xff, (utc >> 16) & 0xff, (utc >> 24) & 0xff];
        const msg = Messages.acknowledgedData(this.channel!, payload);
        this.send(msg, cbk);
    }

    /**
     * Sets the UTC time on the sensor.
     *
     * @public
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.setUTCTime(callbackFunction);
     */
    public setUTCTime(cbk?: SendCallback) {
        this._sendTimeCmd(0x00, cbk);
    }

    /**
     * Starts a new session on the sensor.
     *
     * @public
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.startSession(callbackFunction);
     */
    public startSession(cbk?: SendCallback) {
        this._sendTimeCmd(0x01, cbk);
    }

    /**
     * Stops the current session on the sensor.
     *
     * @public
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.stopSession(callbackFunction);
     */
    public stopSession(cbk?: SendCallback) {
        this._sendTimeCmd(0x02, cbk);
    }

    /**
     * Sets a lap marker on the sensor.
     *
     * @public
     * @param {SendCallback} [cbk] - Optional callback function to handle the send response.
     * @returns {void}
     *
     * @example
     * sensor.setLap(callbackFunction);
     */
    public setLap(cbk?: SendCallback) {
        this._sendTimeCmd(0x03, cbk);
    }
}
