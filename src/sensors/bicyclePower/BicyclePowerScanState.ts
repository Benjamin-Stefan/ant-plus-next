import { BicyclePowerSensorState } from "./bicyclePowerSensorState.js";

export class BicyclePowerScanState extends BicyclePowerSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
