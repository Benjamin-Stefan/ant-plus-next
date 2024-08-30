import { AntPlusSensor } from "../antPlusSensor.js";
export declare class SpeedCadenceSensor extends AntPlusSensor {
    static deviceType: number;
    wheelCircumference: number;
    setWheelCircumference(wheelCircumference: number): void;
    attach(channel: number, deviceId: number): void;
    private state;
    protected updateState(deviceId: number, data: Buffer): void;
}
