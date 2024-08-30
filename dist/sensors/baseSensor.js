import EventEmitter from "events";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
export class BaseSensor extends EventEmitter {
    constructor(stick) {
        super();
        this.stick = stick;
        this.messageQueue = [];
        stick.on("read", this.handleEventMessages.bind(this));
    }
    scan(type, frequency) {
        if (this.channel !== undefined) {
            throw new Error("already attached");
        }
        if (!this.stick.canScan) {
            throw new Error("stick cannot scan");
        }
        const channel = 0;
        const onStatus = (status) => {
            switch (status.msg) {
                case Constants.MESSAGE_RF:
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
        }
        else if (this.stick.attach(this, true)) {
            this.channel = channel;
            this.deviceId = 0;
            this.transmissionType = 0;
            this.statusCbk = onStatus;
            this.write(Messages.assignChannel(channel, type));
        }
        else {
            throw new Error("cannot attach");
        }
    }
    attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period, frequency) {
        if (this.channel !== undefined) {
            throw new Error("already attached");
        }
        if (!this.stick.attach(this, false)) {
            throw new Error("cannot attach");
        }
        this.channel = channel;
        this.deviceId = deviceId;
        this.transmissionType = transmissionType;
        const onStatus = (status) => {
            switch (status.msg) {
                case Constants.MESSAGE_RF:
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
                            return true; // collision is not an error on multi-channel networks
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
    detach() {
        if (this.channel === undefined) {
            return;
        }
        this.write(Messages.closeChannel(this.channel));
        if (!this.stick.detach(this)) {
            throw new Error("error detaching");
        }
    }
    write(data) {
        this.stick.write(data);
    }
    handleEventMessages(data) {
        const messageId = data.readUInt8(Messages.BUFFER_INDEX_MSG_TYPE);
        const channel = data.readUInt8(Messages.BUFFER_INDEX_CHANNEL_NUM);
        if (channel === this.channel) {
            if (messageId === Constants.MESSAGE_CHANNEL_EVENT) {
                const status = {
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
            }
            else if (this.decodeDataCbk) {
                this.decodeDataCbk(data);
            }
        }
    }
    send(data, cbk) {
        this.messageQueue.push({ msg: data, cbk });
        if (this.messageQueue.length === 1) {
            this.write(data);
        }
    }
}
//# sourceMappingURL=baseSensor.js.map