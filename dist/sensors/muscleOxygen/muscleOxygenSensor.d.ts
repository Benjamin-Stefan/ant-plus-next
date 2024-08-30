import { AntPlusSensor } from "../antPlusSensor.js";
import { SendCallback } from "../../types/sendCallback.js";
export declare class MuscleOxygenSensor extends AntPlusSensor {
    static deviceType: number;
    private state;
    attach(channel: number, deviceId: number): void;
    protected updateState(deviceId: number, data: Buffer): void;
    private _sendTimeCmd;
    setUTCTime(cbk?: SendCallback): void;
    startSession(cbk?: SendCallback): void;
    stopSession(cbk?: SendCallback): void;
    setLap(cbk?: SendCallback): void;
}
