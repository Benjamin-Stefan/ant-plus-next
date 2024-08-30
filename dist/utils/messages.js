import { Constants } from "../types/constants.js";
export class Messages {
    static resetSystem() {
        const payload = [];
        payload.push(0x00);
        return this.buildMessage(payload, Constants.MESSAGE_SYSTEM_RESET);
    }
    static requestMessage(channel, messageId) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        payload.push(messageId);
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_REQUEST);
    }
    static setNetworkKey() {
        const payload = [];
        payload.push(Constants.DEFAULT_NETWORK_NUMBER);
        payload.push(0xb9);
        payload.push(0xa5);
        payload.push(0x21);
        payload.push(0xfb);
        payload.push(0xbd);
        payload.push(0x72);
        payload.push(0xc3);
        payload.push(0x45);
        return this.buildMessage(payload, Constants.MESSAGE_NETWORK_KEY);
    }
    static assignChannel(channel, type = "receive") {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        if (type === "receive") {
            payload.push(Constants.CHANNEL_TYPE_TWOWAY_RECEIVE);
        }
        else if (type === "receive_only") {
            payload.push(Constants.CHANNEL_TYPE_ONEWAY_RECEIVE);
        }
        else if (type === "receive_shared") {
            payload.push(Constants.CHANNEL_TYPE_SHARED_RECEIVE);
        }
        else if (type === "transmit") {
            payload.push(Constants.CHANNEL_TYPE_TWOWAY_TRANSMIT);
        }
        else if (type === "transmit_only") {
            payload.push(Constants.CHANNEL_TYPE_ONEWAY_TRANSMIT);
        }
        else if (type === "transmit_shared") {
            payload.push(Constants.CHANNEL_TYPE_SHARED_TRANSMIT);
        }
        else {
            throw new Error("type not allowed");
        }
        payload.push(Constants.DEFAULT_NETWORK_NUMBER);
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_ASSIGN);
    }
    static setDevice(channel, deviceId, deviceType, transmissionType) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        payload = payload.concat(this.intToLEHexArray(deviceId, 2));
        payload = payload.concat(this.intToLEHexArray(deviceType));
        payload = payload.concat(this.intToLEHexArray(transmissionType));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_ID);
    }
    static searchChannel(channel, timeout) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        payload = payload.concat(this.intToLEHexArray(timeout));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_SEARCH_TIMEOUT);
    }
    static setPeriod(channel, period) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        payload = payload.concat(this.intToLEHexArray(period));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_PERIOD);
    }
    static setFrequency(channel, frequency) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        payload = payload.concat(this.intToLEHexArray(frequency));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_FREQUENCY);
    }
    static setRxExt() {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(0));
        payload = payload.concat(this.intToLEHexArray(1));
        return this.buildMessage(payload, Constants.MESSAGE_ENABLE_RX_EXT);
    }
    static libConfig(channel, how) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        payload = payload.concat(this.intToLEHexArray(how));
        return this.buildMessage(payload, Constants.MESSAGE_LIB_CONFIG);
    }
    static openRxScan() {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(0));
        payload = payload.concat(this.intToLEHexArray(1));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_OPEN_RX_SCAN);
    }
    static openChannel(channel) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_OPEN);
    }
    static closeChannel(channel) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_CLOSE);
    }
    static unassignChannel(channel) {
        let payload = [];
        payload = payload.concat(this.intToLEHexArray(channel));
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_UNASSIGN);
    }
    static acknowledgedData(channel, payload) {
        payload = this.intToLEHexArray(channel).concat(payload);
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA);
    }
    static broadcastData(channel, payload) {
        payload = this.intToLEHexArray(channel).concat(payload);
        return this.buildMessage(payload, Constants.MESSAGE_CHANNEL_BROADCAST_DATA);
    }
    static buildMessage(payload = [], messageId = 0x00) {
        const message = [];
        message.push(Constants.MESSAGE_TX_SYNC);
        message.push(payload.length);
        message.push(messageId);
        payload.forEach(byte => {
            message.push(byte);
        });
        message.push(this.getChecksum(message));
        return Buffer.from(message);
    }
    static intToLEHexArray(int, numBytes = 1) {
        numBytes = numBytes || 1;
        const a = [];
        const b = Buffer.from(this.decimalToHex(int, numBytes * 2), "hex");
        let i = b.length - 1;
        while (i >= 0) {
            a.push(b[i]);
            i--;
        }
        return a;
    }
    static decimalToHex(d, numDigits) {
        let hex = Number(d).toString(16);
        numDigits = numDigits || 2;
        while (hex.length < numDigits) {
            hex = "0" + hex;
        }
        return hex;
    }
    static getChecksum(message) {
        let checksum = 0;
        message.forEach(byte => {
            checksum = (checksum ^ byte) % 0xff;
        });
        return checksum;
    }
}
Messages.BUFFER_INDEX_MSG_LEN = 1;
Messages.BUFFER_INDEX_MSG_TYPE = 2;
Messages.BUFFER_INDEX_CHANNEL_NUM = 3;
Messages.BUFFER_INDEX_MSG_DATA = 4;
Messages.BUFFER_INDEX_EXT_MSG_BEGIN = 12;
//# sourceMappingURL=messages.js.map