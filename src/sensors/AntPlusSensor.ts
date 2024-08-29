import { AntPlusBaseSensor } from "./AntPlusBaseSensor.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";

export abstract class AntPlusSensor extends AntPlusBaseSensor {
    constructor(stick) {
        super(stick);
        this.decodeDataCbk = this.decodeData.bind(this);
    }

    protected scan() {
        throw "scanning unsupported";
    }

    protected attach(channel: number, type: string, deviceID: number, deviceType: number, transmissionType: number, timeout: number, period: number) {
        return super.attach(channel, type, deviceID, deviceType, transmissionType, timeout, period);
    }

    private decodeData(data: Buffer) {
        switch (data.readUInt8(Messages.BUFFER_INDEX_MSG_TYPE)) {
            case Constants.MESSAGE_CHANNEL_BROADCAST_DATA:
            case Constants.MESSAGE_CHANNEL_ACKNOWLEDGED_DATA:
            case Constants.MESSAGE_CHANNEL_BURST_DATA:
                if (this.deviceID === 0) {
                    this.write(Messages.requestMessage(this.channel, Constants.MESSAGE_CHANNEL_ID));
                }
                this.updateState(this.deviceID, data);
                break;
            case Constants.MESSAGE_CHANNEL_ID:
                this.deviceID = data.readUInt16LE(Messages.BUFFER_INDEX_MSG_DATA);
                this.transmissionType = data.readUInt8(Messages.BUFFER_INDEX_MSG_DATA + 3);
                break;
            default:
                break;
        }
    }
}
