import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
export class AntPlusScanner extends AntPlusBaseSensor {
    constructor(stick) {
        super(stick);
        this.decodeDataCbk = this.decodeData.bind(this);
    }
    scan() {
        return super.scan("receive");
    }
    attach() {
        throw new Error("attach unsupported");
    }
    send() {
        throw new Error("send unsupported");
    }
    decodeData(data) {
        if (data.length <= Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 3 || !(data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN) & 0x80)) {
            console.log("wrong message format", data.toString("hex"));
            return;
        }
        const deviceId = data.readUInt16LE(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 1);
        const deviceType = data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 3);
        if (deviceType !== this.deviceType()) {
            return;
        }
        this.createStateIfNew(deviceId);
        if (data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN) & 0x40) {
            if (data.readUInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 5) === 0x20) {
                this.updateRssiAndThreshold(deviceId, data.readInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 6), data.readInt8(Messages.BUFFER_INDEX_EXT_MSG_BEGIN + 7));
            }
        }
        switch (data.readUInt8(Messages.BUFFER_INDEX_MSG_TYPE)) {
            case Constants.MESSAGE_CHANNEL_BROADCAST_DATA:
            case Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA:
            case Constants.MESSAGE_CHANNEL_BURST_DATA:
                this.updateState(deviceId, data);
                break;
            default:
                break;
        }
    }
}
//# sourceMappingURL=antPlusScanner.js.map