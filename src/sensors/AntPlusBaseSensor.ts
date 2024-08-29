import { BaseSensor } from "./BaseSensor.js";

export abstract class AntPlusBaseSensor extends BaseSensor {
    protected scan(type: string) {
        return super.scan(type, 57);
    }

    protected attach(channel: number, type: string, deviceID: number, deviceType: number, transmissionType: number, timeout: number, period: number) {
        return super.attach(channel, type, deviceID, deviceType, transmissionType, timeout, period, 57);
    }
}
