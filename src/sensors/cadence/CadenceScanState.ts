import { CadenceSensorState } from "./CadenceSensorState.js";

export class CadenceScanState extends CadenceSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
