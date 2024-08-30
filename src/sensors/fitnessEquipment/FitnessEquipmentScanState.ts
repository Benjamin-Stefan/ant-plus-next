import { FitnessEquipmentSensorState } from "./fitnessEquipmentSensorState.js";

export class FitnessEquipmentScanState extends FitnessEquipmentSensorState {
    Rssi: number | undefined;
    Threshold: number | undefined;
}
