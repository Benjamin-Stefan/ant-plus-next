import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { USBDriver } from "../core/usbDriver.js";
export declare abstract class AntPlusSensor extends AntPlusBaseSensor {
    constructor(stick: USBDriver);
    protected scan(): void;
    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number): void;
    private decodeData;
}
