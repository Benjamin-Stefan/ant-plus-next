import { AntPlusSensor } from "../antPlusSensor.js";
export declare class CadenceSensor extends AntPlusSensor {
    static deviceType: number;
    wheelCircumference: number;
    private state;
    attach(channel: number, deviceId: number): void;
    setWheelCircumference(wheelCircumference: number): void;
    protected updateState(deviceId: number, data: Buffer): void;
}
