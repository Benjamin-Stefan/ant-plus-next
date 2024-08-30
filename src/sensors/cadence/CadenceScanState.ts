import { CadenceSensorState } from "./cadenceSensorState.js";

export class CadenceScanState extends CadenceSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
