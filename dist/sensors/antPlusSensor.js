import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
export class AntPlusSensor extends AntPlusBaseSensor {
    constructor(stick) {
        super(stick);
        this.decodeDataCbk = this.decodeData.bind(this);
    }
    scan() {
        throw new Error("scanning unsupported");
    }
    attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period) {
        return super.attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period);
    }
    decodeData(data) {
        switch (data.readUInt8(Messages.BUFFER_INDEX_MSG_TYPE)) {
            case Constants.MESSAGE_CHANNEL_BROADCAST_DATA:
            case Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA:
            case Constants.MESSAGE_CHANNEL_BURST_DATA:
                if (this.deviceId === 0 && this.channel) {
                    this.write(Messages.requestMessage(this.channel, Constants.MESSAGE_CHANNEL_ID));
                }
                this.updateState(this.deviceId, data);
                break;
            case Constants.MESSAGE_CHANNEL_ID:
                this.deviceId = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA);
                this.transmissionType = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            default:
                break;
        }
    }
}
//# sourceMappingURL=antPlusSensor.js.map