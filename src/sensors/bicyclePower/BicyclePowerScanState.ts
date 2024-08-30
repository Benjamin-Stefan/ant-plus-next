import { BicyclePowerSensorState } from "./BicyclePowerSensorState.js";

export class BicyclePowerScanState extends BicyclePowerSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
