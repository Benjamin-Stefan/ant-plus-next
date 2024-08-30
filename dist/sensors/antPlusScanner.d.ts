import { AntPlusBaseSensor } from "./antPlusBaseSensor.js";
import { USBDriver } from "../core/usbDriver.js";
export declare abstract class AntPlusScanner extends AntPlusBaseSensor {
    protected abstract deviceType(): number;
    protected abstract createStateIfNew(deviceId: number): void;
    protected abstract updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    constructor(stick: USBDriver);
    scan(): void;
    protected attach(): void;
    protected send(): void;
    private decodeData;
}
