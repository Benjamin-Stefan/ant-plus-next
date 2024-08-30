import { updateState } from "./muscleOxygenUtils.js";
import { MuscleOxygenSensorState } from "./muscleOxygenSensorState.js";
import { AntPlusSensor } from "../antPlusSensor.js";
import { SendCallback } from "../../types/sendCallback.js";
import { Messages } from "../../utils/messages.js";

export class MuscleOxygenSensor extends AntPlusSensor {
    static deviceType = 0x1f;

    private state!: MuscleOxygenSensorState;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, MuscleOxygenSensor.deviceType, 0, 255, 8192);
        this.state = new MuscleOxygenSensorState(deviceId);
    }

    protected updateState(deviceId: number, data: Buffer) {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }

    private _sendTimeCmd(cmd: number, cbk?: SendCallback) {
        const now = new Date();
        const utc = Math.round((now.getTime() - Date.UTC(1989, 11, 31, 0, 0, 0, 0)) / 1000);
        const offset = -Math.round(now.getTimezoneOffset() / 15);
        const payload = [0x10, cmd & 0xff, 0xff, offset & 0xff, (utc >> 0) & 0xff, (utc >> 8) & 0xff, (utc >> 16) & 0xff, (utc >> 24) & 0xff];
        const msg = Messages.acknowledgedData(this.channel!, payload);
        this.send(msg, cbk);
    }

    public setUTCTime(cbk?: SendCallback) {
        this._sendTimeCmd(0x00, cbk);
    }

    public startSession(cbk?: SendCallback) {
        this._sendTimeCmd(0x01, cbk);
    }

    public stopSession(cbk?: SendCallback) {
        this._sendTimeCmd(0x02, cbk);
    }

    public setLap(cbk?: SendCallback) {
        this._sendTimeCmd(0x03, cbk);
    }
}
