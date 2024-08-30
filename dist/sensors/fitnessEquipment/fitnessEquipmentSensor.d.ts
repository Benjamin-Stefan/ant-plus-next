import { AntPlusSensor } from "../antPlusSensor.js";
import { SendCallback } from "../../types/sendCallback.js";
export declare class FitnessEquipmentSensor extends AntPlusSensor {
    static deviceType: number;
    private state;
    attach(channel: number, deviceId: number): void;
    protected updateState(deviceId: number, data: Buffer): void;
    private setUserConfigurationInternal;
    setUserConfiguration(userWeightOrCallback?: number | SendCallback, bikeWeight?: number, wheelDiameter?: number, gearRatio?: number, cbk?: SendCallback): void;
    setBasicResistance(resistance: number, cbk?: SendCallback): void;
    setTargetPower(power: number, cbk?: SendCallback): void;
    private setWindResistanceInternal;
    setWindResistance(windCoeffOrCallback?: number | SendCallback, windSpeed?: number, draftFactor?: number, cbk?: SendCallback): void;
    private setTrackResistanceInternal;
    setTrackResistance(slopeOrCallback?: number | SendCallback, rollingResistanceCoeff?: number, cbk?: SendCallback): void;
}
