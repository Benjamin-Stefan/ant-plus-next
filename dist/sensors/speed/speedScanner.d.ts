import { AntPlusScanner } from "../antPlusScanner.js";
export declare class SpeedScanner extends AntPlusScanner {
    protected deviceType(): number;
    wheelCircumference: number;
    setWheelCircumference(wheelCircumference: number): void;
    private states;
    protected createStateIfNew(deviceId: number): void;
    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number): void;
    protected updateState(deviceId: number, data: Buffer): void;
}
