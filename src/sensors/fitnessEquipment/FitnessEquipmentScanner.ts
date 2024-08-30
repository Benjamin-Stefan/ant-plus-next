import { updateState } from "./FitnessEquipmentUtils.js";
import { FitnessEquipmentScanState } from "./FitnessEquipmentScanState.js";
import { FitnessEquipmentSensor } from "./FitnessEquipmentSensor.js";
import { AntPlusScanner } from "../AntPlusScanner.js";

export class FitnessEquipmentScanner extends AntPlusScanner {
    protected deviceType() {
        return FitnessEquipmentSensor.deviceType;
    }

    private states: { [id: number]: FitnessEquipmentScanState } = {};

    protected createStateIfNew(deviceId: number) {
        if (!this.states[deviceId]) {
            this.states[deviceId] = new FitnessEquipmentScanState(deviceId);
        }
    }

    protected updateRssiAndThreshold(deviceId: number, rssi: number, threshold: number) {
        this.states[deviceId].Rssi = rssi;
        this.states[deviceId].Threshold = threshold;
    }

    protected updateState(deviceId: number, data: Buffer) {
        updateState(this, this.states[deviceId], data);
    }
}
