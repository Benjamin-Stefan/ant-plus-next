import { FitnessEquipmentSensorState } from "./FitnessEquipmentSensorState.js";

export class FitnessEquipmentScanState extends FitnessEquipmentSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
