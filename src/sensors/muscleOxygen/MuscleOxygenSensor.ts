import { updateState } from "./MuscleOxygenUtils.js";
import { MuscleOxygenSensorState } from "./MuscleOxygenSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";
import { SendCallback } from "../../types/SendCallback.js";
import { Messages } from "../../utils/messages.js";

export class MuscleOxygenSensor extends AntPlusSensor {
    static deviceType = 0x1f;

    public attach(channel, deviceID): void {
        super.attach(channel, "receive", deviceID, MuscleOxygenSensor.deviceType, 0, 255, 8192);
        this.state = new MuscleOxygenSensorState(deviceID);
    }

    private state: MuscleOxygenSensorState;

    protected updateState(deviceId, data) {
        this.state.DeviceID = deviceId;
        updateState(this, this.state, data);
    }

    private _sendTimeCmd(cmd: number, cbk?: SendCallback) {
        const now = new Date();
        const utc = Math.round((now.getTime() - Date.UTC(1989, 11, 31, 0, 0, 0, 0)) / 1000);
        const offset = -Math.round(now.getTimezoneOffset() / 15);
        const payload = [0x10, cmd & 0xff, 0xff, offset & 0xff, (utc >> 0) & 0xff, (utc >> 8) & 0xff, (utc >> 16) & 0xff, (utc >> 24) & 0xff];
        const msg = Messages.acknowledgedData(this.channel, payload);
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
