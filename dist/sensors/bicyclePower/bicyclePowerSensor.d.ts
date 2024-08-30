import { AntPlusSensor } from "../antPlusSensor.js";
export declare class BicyclePowerSensor extends AntPlusSensor {
    static deviceType: number;
    private state;
    attach(channel: number, deviceId: number): void;
    protected updateState(deviceId: number, data: Buffer): void;
}
