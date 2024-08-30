import { AntPlusSensor } from "../antPlusSensor.js";
export declare class HeartRateSensor extends AntPlusSensor {
    static deviceType: number;
    attach(channel: number, deviceId: number): void;
    private state;
    private page;
    protected updateState(deviceId: number, data: Buffer): void;
}
