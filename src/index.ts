export { GarminStick2, GarminStick3 } from "./core/nodeUsbSticks";
export { WebUsbStick } from "./core/webUsbStick";
export { BaseSensor } from "./sensors/baseSensor";

export { DebugOptions } from "./types/debugOptions";
export { PairedDevice } from "./types/pairedDevice";
export { SendCallback } from "./types/sendCallback";
export { USBDriverBase } from "./types/usbDriverBase";

// Common sensors that can be used in both environments (e.g., Node.js and browser).
export { HeartRateScanner, HeartRateSensor, HeartRateScanState, HeartRateSensorState } from "./sensors/heartRate/index.js";
export { StrideSpeedDistanceScanner, StrideSpeedDistanceSensor, StrideSpeedDistanceScanState, StrideSpeedDistanceSensorState } from "./sensors/strideSpeedDistance/index.js";
export { SpeedCadenceScanner, SpeedCadenceSensor, SpeedCadenceScanState, SpeedCadenceSensorState } from "./sensors/speedCadence/index.js";
export { SpeedScanner, SpeedSensor, SpeedScanState, SpeedSensorState } from "./sensors/speed/index.js";
export { CadenceScanner, CadenceSensor, CadenceScanState, CadenceSensorState } from "./sensors/cadence/index.js";
export { BicyclePowerScanner, BicyclePowerSensor, BicyclePowerScanState, BicyclePowerSensorState } from "./sensors/bicyclePower/index.js";
export { FitnessEquipmentScanner, FitnessEquipmentSensor, FitnessEquipmentScanState, FitnessEquipmentSensorState } from "./sensors/fitnessEquipment/index.js";
export { MuscleOxygenScanner, MuscleOxygenSensor, MuscleOxygenScanState, MuscleOxygenSensorState } from "./sensors/muscleOxygen/index.js";
export { EnvironmentScanner, EnvironmentSensor, EnvironmentScanState, EnvironmentSensorState } from "./sensors/environment/index.js";
