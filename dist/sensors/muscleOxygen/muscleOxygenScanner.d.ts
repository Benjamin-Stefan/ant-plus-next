import { AntPlusScanner } from "../antPlusScanner.js";
export declare class MuscleOxygenScanner extends AntPlusScanner {
    protected deviceType(): number;
    private states;
    protected createStateIfNew(deviceId: number): void;
    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    protected updateState(deviceId: number, data: Buffer): void;
}
