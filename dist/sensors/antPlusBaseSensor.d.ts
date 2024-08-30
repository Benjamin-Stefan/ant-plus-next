import { BaseSensor } from "./baseSensor.js";
export declare abstract class AntPlusBaseSensor extends BaseSensor {
    protected scan(type: string): void;
    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number): void;
}
