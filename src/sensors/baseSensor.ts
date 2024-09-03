import { EventEmitter } from "events";
import { USBDriver } from "../core/usbDriver.js";
import { SendCallback } from "../types/sendCallback.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
import { Status } from "../types/status.js";

/**
 * Abstract base class for sensors that communicates over a USB connection.
 * Extends EventEmitter to handle various events related to sensor data and status.
 */
export abstract class BaseSensor extends EventEmitter {
    channel: number | undefined;
    deviceId!: number;
    transmissionType!: number;

    private messageQueue: { msg: Buffer; cbk?: SendCallback }[] = [];

    protected decodeDataCbk: ((data: Buffer) => void) | undefined;
    protected statusCbk: ((status: Status) => boolean) | undefined;

    /**
     * Abstract method to update the state of the sensor.
     * Must be implemented by subclasses.
     *
     * @param {number} deviceId - The device ID to update.
     * @param {Buffer} data - The data buffer containing the state information.
     */
    protected abstract updateState(deviceId: number, data: Buffer): void;

    /**
     * Creates an instance of BaseSensor.
     *
     * @param {USBDriver} stick - The USB driver used for communication with the sensor.
     */
    constructor(private stick: USBDriver) {
        super();
        stick.on("read", this.handleEventMessages.bind(this));
    }

    /**
     * Starts scanning for devices of the specified type at a given frequency.
     *
     * @param {string} type - The type of device to scan for.
     * @param {number} frequency - The frequency at which to scan.
     *
     * @throws Will throw an error if already attached or if the stick cannot scan.
     */
    protected scan(type: string, frequency: number) {
        if (this.channel !== undefined) {
            throw new Error("already attached");
        }

        if (!this.stick.canScan) {
            throw new Error("stick cannot scan");
        }

        const channel = 0;

        const onStatus = (status: Status) => {
            switch (status.msg) {
                case Constants.MESSAGE_RF:
                    // Handle various message statuses
                    switch (status.code) {
                        case Constants.EVENT_CHANNEL_CLOSED:
                        case Constants.EVENT_RX_FAIL_GO_TO_SEARCH:
                            this.write(Messages.unassignChannel(channel));
                            return true;
                        case Constants.EVENT_TRANSFER_TX_COMPLETED:
                        case Constants.EVENT_TRANSFER_TX_FAILED:
                        case Constants.EVENT_RX_FAIL:
                        case Constants.INVALID_SCAN_TX_CHANNEL: {
                            const mc = this.messageQueue.shift();
                            if (mc && mc.cbk) {
                                mc.cbk(status.code === Constants.EVENT_TRANSFER_TX_COMPLETED);
                            }
                            if (this.messageQueue.length) {
                                this.write(this.messageQueue[0].msg);
                            }
                            return true;
                        }
                        default:
                            break;
                    }
                    break;
                case Constants.MESSAGE_CHANNEL_ASSIGN:
                    this.write(Messages.setDevice(channel, 0, 0, 0));
                    return true;
                case Constants.MESSAGE_CHANNEL_ID:
                    this.write(Messages.setFrequency(channel, frequency));
                    return true;
                case Constants.MESSAGE_CHANNEL_FREQUENCY:
                    this.write(Messages.setRxExt());
                    return true;
                case Constants.MESSAGE_ENABLE_RX_EXT:
                    this.write(Messages.libConfig(channel, 0xe0));
                    return true;
                case Constants.MESSAGE_LIB_CONFIG:
                    this.write(Messages.openRxScan());
                    return true;
                case Constants.MESSAGE_CHANNEL_OPEN_RX_SCAN:
                    process.nextTick(() => this.emit("attached"));
                    return true;
                case Constants.MESSAGE_CHANNEL_CLOSE:
                    return true;
                case Constants.MESSAGE_CHANNEL_UNASSIGN:
                    this.statusCbk = undefined;
                    this.channel = undefined;
                    process.nextTick(() => this.emit("detached"));
                    return true;
                case Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA:
                    return status.code === Constants.TRANSFER_IN_PROGRESS;
                default:
                    break;
            }
            return false;
        };

        if (this.stick.isScanning()) {
            this.channel = channel;
            this.deviceId = 0;
            this.transmissionType = 0;

            this.statusCbk = onStatus;

            process.nextTick(() => this.emit("attached"));
        } else if (this.stick.attach(this, true)) {
            this.channel = channel;
            this.deviceId = 0;
            this.transmissionType = 0;

            this.statusCbk = onStatus;

            this.write(Messages.assignChannel(channel, type));
        } else {
            throw new Error("cannot attach");
        }
    }

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
    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number, frequency: number) {
        if (this.channel !== undefined) {
            throw new Error("already attached");
        }
        if (!this.stick.attach(this, false)) {
            throw new Error("cannot attach");
        }
        this.channel = channel;
        this.deviceId = deviceId;
        this.transmissionType = transmissionType;

        const onStatus = (status: Status) => {
            switch (status.msg) {
                case Constants.MESSAGE_RF:
                    // Handle various message statuses
                    switch (status.code) {
                        case Constants.EVENT_CHANNEL_CLOSED:
                        case Constants.EVENT_RX_FAIL_GO_TO_SEARCH:
                            this.write(Messages.unassignChannel(channel));
                            return true;
                        case Constants.EVENT_TRANSFER_TX_COMPLETED:
                        case Constants.EVENT_TRANSFER_TX_FAILED:
                        case Constants.EVENT_RX_FAIL:
                        case Constants.INVALID_SCAN_TX_CHANNEL: {
                            const mc = this.messageQueue.shift();
                            if (mc && mc.cbk) {
                                mc.cbk(status.code === Constants.EVENT_TRANSFER_TX_COMPLETED);
                            }
                            if (this.messageQueue.length) {
                                this.write(this.messageQueue[0].msg);
                            }
                            return true;
                        }
                        case Constants.EVENT_CHANNEL_COLLISION:
                            return true;
                        default:
                            break;
                    }
                    break;
                case Constants.MESSAGE_CHANNEL_ASSIGN:
                    this.write(Messages.setDevice(channel, deviceId, deviceType, transmissionType));
                    return true;
                case Constants.MESSAGE_CHANNEL_ID:
                    this.write(Messages.searchChannel(channel, timeout));
                    return true;
                case Constants.MESSAGE_CHANNEL_SEARCH_TIMEOUT:
                    this.write(Messages.setFrequency(channel, frequency));
                    return true;
                case Constants.MESSAGE_CHANNEL_FREQUENCY:
                    this.write(Messages.setPeriod(channel, period));
                    return true;
                case Constants.MESSAGE_CHANNEL_PERIOD:
                    this.write(Messages.libConfig(channel, 0xe0));
                    return true;
                case Constants.MESSAGE_LIB_CONFIG:
                    this.write(Messages.openChannel(channel));
                    return true;
                case Constants.MESSAGE_CHANNEL_OPEN:
                    process.nextTick(() => this.emit("attached"));
                    return true;
                case Constants.MESSAGE_CHANNEL_CLOSE:
                    return true;
                case Constants.MESSAGE_CHANNEL_UNASSIGN:
                    this.statusCbk = undefined;
                    this.channel = undefined;
                    process.nextTick(() => this.emit("detached"));
                    return true;
                case Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA:
                    return status.code === Constants.TRANSFER_IN_PROGRESS;
                default:
                    break;
            }
            return false;
        };

        this.statusCbk = onStatus;

        this.write(Messages.assignChannel(channel, type));
    }

    /**
     * Detaches the sensor from its assigned channel and stops communication.
     *
     * @throws Will throw an error if there is an issue detaching.
     */
    public detach() {
        if (this.channel === undefined) {
            return;
        }
        this.write(Messages.closeChannel(this.channel));
        if (!this.stick.detach(this)) {
            throw new Error("error detaching");
        }
    }

    /**
     * Sends data to the USB device.
     *
     * @param {Buffer} data - The data buffer to send.
     */
    protected write(data: Buffer) {
        this.stick.write(data);
    }

    /**
     * Handles incoming event messages from the USB device.
     *
     * @private
     * @param {Buffer} data - The data buffer containing the event message.
     */
    private handleEventMessages(data: Buffer) {
        const messageId = data.readUInt8(Messages.BUFFER_INDEX_MSG_TYPE);
        const channel = data.readUInt8(Messages.BUFFER_INDEX_CHANNEL_NUM);

        if (channel === this.channel) {
            if (messageId === Constants.MESSAGE_CHANNEL_EVENT) {
                const status: Status = {
                    msg: data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA),
                    code: data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1),
                };

                const handled = this.statusCbk && this.statusCbk(status);
                if (!handled) {
                    console.log("Unhandled event: " + data.toString("hex"));
                    this.emit("eventData", {
                        message: data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA),
                        code: data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 1),
                    });
                }
            } else if (this.decodeDataCbk) {
                this.decodeDataCbk(data);
            }
        }
    }

    /**
     * Sends data and optionally a callback to handle the result of the send operation.
     *
     * @param {Buffer} data - The data buffer to send.
     * @param {SendCallback} [cbk] - Optional callback to handle the send result.
     */
    protected send(data: Buffer, cbk?: SendCallback) {
        this.messageQueue.push({ msg: data, cbk });
        if (this.messageQueue.length === 1) {
            this.write(data);
        }
    }
}
