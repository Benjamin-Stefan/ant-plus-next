import { AntPlusScanner } from "../antPlusScanner.js";
export declare class HeartRateScanner extends AntPlusScanner {
    protected deviceType(): number;
    private states;
    private pages;
    protected createStateIfNew(deviceId: number): void;
    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    protected updateState(deviceId: number, data: Buffer): void;
}
