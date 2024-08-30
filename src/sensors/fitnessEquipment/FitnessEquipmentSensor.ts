import { updateState } from "./FitnessEquipmentUtils.js";
import { FitnessEquipmentSensorState } from "./FitnessEquipmentSensorState.js";
import { AntPlusSensor } from "../AntPlusSensor.js";
import { SendCallback } from "../../types/SendCallback.js";
import { Messages } from "../../utils/messages.js";

export class FitnessEquipmentSensor extends AntPlusSensor {
    static deviceType = 0x11;

    private state!: FitnessEquipmentSensorState;

    public attach(channel: number, deviceId: number) {
        super.attachSensor(channel, "receive", deviceId, FitnessEquipmentSensor.deviceType, 0, 255, 8192);
        this.state = new FitnessEquipmentSensorState(deviceId);
    }

    protected updateState(deviceId: number, data: Buffer): void {
        this.state.DeviceId = deviceId;
        updateState(this, this.state, data);
    }

    private setUserConfigurationInternal(userWeight?: number, bikeWeight?: number, wheelDiameter?: number, gearRatio?: number, cbk?: SendCallback): void {
        const m = userWeight == null ? 0xffff : Math.max(0, Math.min(65534, Math.round(userWeight * 100)));
        const df = wheelDiameter == null ? 0xff : Math.round(wheelDiameter * 10) % 10;
        const mb = bikeWeight == null ? 0xfff : Math.max(0, Math.min(1000, Math.round(bikeWeight * 20)));
        const d = wheelDiameter == null ? 0xff : Math.max(0, Math.min(254, Math.round(wheelDiameter)));
        const gr = gearRatio == null ? 0x00 : Math.max(1, Math.min(255, Math.round(gearRatio / 0.03)));
        const payload = [0x37, m & 0xff, (m >> 8) & 0xff, 0xff, (df & 0xf) | ((mb & 0xf) << 4), (mb >> 4) & 0xf, d & 0xff, gr & 0xff];
        const msg = Messages.acknowledgedData(this.channel!, payload);
        this.send(msg, cbk);
    }

    public setUserConfiguration(userWeightOrCallback?: number | SendCallback, bikeWeight?: number, wheelDiameter?: number, gearRatio?: number, cbk?: SendCallback): void {
        if (typeof userWeightOrCallback === "function") {
            this.setUserConfigurationInternal(undefined, undefined, undefined, undefined, userWeightOrCallback);
        } else if (typeof bikeWeight === "function") {
            this.setUserConfigurationInternal(userWeightOrCallback, undefined, undefined, undefined, bikeWeight);
        } else if (typeof wheelDiameter === "function") {
            this.setUserConfigurationInternal(userWeightOrCallback, bikeWeight, undefined, undefined, wheelDiameter);
        } else if (typeof gearRatio === "function") {
            this.setUserConfigurationInternal(userWeightOrCallback, bikeWeight, wheelDiameter, undefined, gearRatio);
        } else {
            this.setUserConfigurationInternal(userWeightOrCallback, bikeWeight, wheelDiameter, gearRatio, cbk);
        }
    }

    public setBasicResistance(resistance: number, cbk?: SendCallback): void {
        const res = Math.max(0, Math.min(200, Math.round(resistance * 2)));
        const payload = [0x30, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, res & 0xff];
        const msg = Messages.acknowledgedData(this.channel!, payload);
        this.send(msg, cbk);
    }

    public setTargetPower(power: number, cbk?: SendCallback): void {
        const p = Math.max(0, Math.min(4000, Math.round(power * 4)));
        const payload = [0x31, 0xff, 0xff, 0xff, 0xff, 0xff, p & 0xff, (p >> 8) & 0xff];
        const msg = Messages.acknowledgedData(this.channel!, payload);
        this.send(msg, cbk);
    }

    private setWindResistanceInternal(windCoeff?: number, windSpeed?: number, draftFactor?: number, cbk?: SendCallback): void {
        const wc = windCoeff == null ? 0xff : Math.max(0, Math.min(186, Math.round(windCoeff * 100)));
        const ws = windSpeed == null ? 0xff : Math.max(0, Math.min(254, Math.round(windSpeed + 127)));
        const df = draftFactor == null ? 0xff : Math.max(0, Math.min(100, Math.round(draftFactor * 100)));
        const payload = [0x32, 0xff, 0xff, 0xff, 0xff, wc & 0xff, ws & 0xff, df & 0xff];
        const msg = Messages.acknowledgedData(this.channel!, payload);
        this.send(msg, cbk);
    }

    public setWindResistance(windCoeffOrCallback?: number | SendCallback, windSpeed?: number, draftFactor?: number, cbk?: SendCallback): void {
        if (typeof windCoeffOrCallback === "function") {
            this.setWindResistanceInternal(undefined, undefined, undefined, windCoeffOrCallback);
        } else if (typeof windSpeed === "function") {
            this.setWindResistanceInternal(windCoeffOrCallback, undefined, undefined, windSpeed);
        } else if (typeof draftFactor === "function") {
            this.setWindResistanceInternal(windCoeffOrCallback, windSpeed, undefined, draftFactor);
        } else {
            this.setWindResistanceInternal(windCoeffOrCallback, windSpeed, draftFactor, cbk);
        }
    }

    private setTrackResistanceInternal(slope?: number, rollingResistanceCoeff?: number, cbk?: SendCallback): void {
        const s = slope == null ? 0xffff : Math.max(0, Math.min(40000, Math.round((slope + 200) * 100)));
        const rr = rollingResistanceCoeff == null ? 0xff : Math.max(0, Math.min(254, Math.round(rollingResistanceCoeff * 20000)));
        const payload = [0x33, 0xff, 0xff, 0xff, 0xff, s & 0xff, (s >> 8) & 0xff, rr & 0xff];
        const msg = Messages.acknowledgedData(this.channel!, payload);
        this.send(msg, cbk);
    }

    public setTrackResistance(slopeOrCallback?: number | SendCallback, rollingResistanceCoeff?: number, cbk?: SendCallback): void {
        if (typeof slopeOrCallback === "function") {
            this.setTrackResistanceInternal(undefined, undefined, slopeOrCallback);
        } else if (typeof rollingResistanceCoeff === "function") {
            this.setTrackResistanceInternal(slopeOrCallback, undefined, rollingResistanceCoeff);
        } else {
            this.setTrackResistanceInternal(slopeOrCallback, rollingResistanceCoeff, cbk);
        }
    }
}
