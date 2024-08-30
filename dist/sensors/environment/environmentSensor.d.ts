import { AntPlusSensor } from "../antPlusSensor.js";
export declare class EnvironmentSensor extends AntPlusSensor {
    static deviceType: number;
    attach(channel: number, deviceId: number): void;
    private state;
    protected updateState(deviceId: number, data: Buffer): void;
}