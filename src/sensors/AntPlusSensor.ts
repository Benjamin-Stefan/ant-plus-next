import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
import { USBDriver } from "../core/usbDriver.js";

export abstract class AntPlusSensor extends AntPlusBaseSensor {
    constructor(stick: USBDriver) {
        super(stick);
        this.decodeDataCbk = this.decodeData.bind(this);
    }

    protected scan() {
        throw new Error("scanning unsupported");
    }

    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number) {
        return super.attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period);
    }

    private decodeData(data: Buffer) {
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
