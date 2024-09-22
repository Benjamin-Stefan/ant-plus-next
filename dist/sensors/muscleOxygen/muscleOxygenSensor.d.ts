import { AntPlusSensor } from "../antPlusSensor.js";
import { SendCallback } from "../../types/sendCallback.js";
/**
 * Represents a Muscle Oxygen sensor.
 * This class extends the AntPlusSensor class to handle specific data related to muscle oxygen measurements.
 *
 * @category Sensors
 */
export declare class MuscleOxygenSensor extends AntPlusSensor {
    /**
     * The device type code for Muscle Oxygen sensors.
     * @type {number}
     * @readonly
     */
    static deviceType: number;
    /**
     * The current state of the Muscle Oxygen sensor.
     * @private
     * @type {MuscleOxygenSensorState}
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
     * const sensor = new MuscleOxygenSensor();
     * sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
     */
    attach(channel: number, deviceId: number): Promise<void>;
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
    private _sendTimeCmd;
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
    setUTCTime(cbk?: SendCallback): Promise<void>;
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
    startSession(cbk?: SendCallback): Promise<void>;
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
    stopSession(cbk?: SendCallback): Promise<void>;
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
    setLap(cbk?: SendCallback): Promise<void>;
}
//# sourceMappingURL=muscleOxygenSensor.d.ts.map