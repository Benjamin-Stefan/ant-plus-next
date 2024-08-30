import { BaseSensor } from "./BaseSensor.js";

export abstract class AntPlusBaseSensor extends BaseSensor {
    protected scan(type: string) {
        return super.scan(type, 57);
    }

    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number) {
        return super.attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period, 57);
    }
}
