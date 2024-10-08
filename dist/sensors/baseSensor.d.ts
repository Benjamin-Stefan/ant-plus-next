import { EventEmitter } from "events";
import { SendCallback } from "../types/sendCallback.js";
import { Status } from "../types/status.js";
import { USBDriverBase } from "../types/usbDriverBase.js";
/**
 * Abstract base class for sensors that communicates over a USB connection.
 * Extends EventEmitter to handle various events related to sensor data and status.
 */
export declare abstract class BaseSensor extends EventEmitter {
    private stick;
    channel: number | undefined;
    deviceId: number;
    transmissionType: number;
    private messageQueue;
    protected decodeDataCbk: ((data: DataView) => Promise<void>) | undefined;
    protected statusCbk: ((status: Status) => Promise<boolean>) | undefined;
    /**
     * Abstract method to update the state of the sensor.
     * Must be implemented by subclasses.
     *
     * @param {number} deviceId - The device ID to update.
     * @param {Uint8Array} data - The data buffer containing the state information.
     */
    protected abstract updateState(deviceId: number, data: DataView): void;
    /**
     * Creates an instance of BaseSensor.
     *
     * @param {USBDriverBase} stick - The USB driver used for communication with the sensor.
     */
    constructor(stick: USBDriverBase);
    /**
     * Starts scanning for devices of the specified type at a given frequency.
     *
     * @param {string} type - The type of device to scan for.
     * @param {number} frequency - The frequency at which to scan.
     *
     * @throws Will throw an error if already attached or if the stick cannot scan.
     */
    protected scan(type: string, frequency: number): Promise<void>;
    /**
     * Attaches the sensor to a specific channel with the given parameters.
     *
     * @param {number} channel - The channel number to attach to.
     * @param {string} type - The type of device.
     * @param {number} deviceId - The device ID.
     * @param {number} deviceType - The type of the device.
     * @param {number} transmissionType - The transmission type.
     * @param {number} timeout - The timeout value for the channel.
     * @param {number} period - The period for communication.
     * @param {number} frequency - The frequency for communication.
     *
     * @throws Will throw an error if already attached or if unable to attach.
     */
    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number, frequency: number): Promise<void>;
    /**
     * Detaches the sensor from its assigned channel and stops communication.
     *
     * @throws Will throw an error if there is an issue detaching.
     */
    detach(): Promise<void>;
    /**
     * Sends data to the USB device.
     *
     * @param {Uint8Array} data - The data buffer to send.
     */
    protected write(data: Uint8Array): Promise<void>;
    /**
     * Handles incoming event messages from the USB device.
     *
     * @private
     * @param {Uint8Array} data - The data buffer containing the event message.
     */
    private handleEventMessages;
    /**
     * Sends data and optionally a callback to handle the result of the send operation.
     *
     * @param {Uint8Array} data - The data buffer to send.
     * @param {SendCallback} [cbk] - Optional callback to handle the send result.
     */
    protected send(data: Uint8Array, cbk?: SendCallback): Promise<void>;
}
//# sourceMappingURL=baseSensor.d.ts.map