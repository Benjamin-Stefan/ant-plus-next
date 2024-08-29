import { AntPlusBaseSensor } from "./AntPlusBaseSensor.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";

export abstract class AntPlusScanner extends AntPlusBaseSensor {
    protected abstract deviceType(): number;
    protected abstract createStateIfNew(deviceId: number): void;
    protected abstract updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;

    constructor(stick) {
        super(stick);
        this.decodeDataCbk = this.decodeData.bind(this);
    }

    public scan() {
        return super.scan("receive");
    }

    protected attach() {
        throw "attach unsupported";
    }

    protected send() {
        throw "send unsupported";
    }

    private decodeData(data: Buffer) {
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
