export { GarminStick2, GarminStick3 } from "./core/nodeUsbSticks";
export { WebUsbStick } from "./core/webUsbStick";

// Common sensors that can be used in both environments (e.g., Node.js and browser).
export { HeartRateScanner, HeartRateSensor } from "./sensors/heartRate/index.js";
export { StrideSpeedDistanceScanner, StrideSpeedDistanceSensor } from "./sensors/strideSpeedDistance/index.js";
export { SpeedCadenceScanner, SpeedCadenceSensor } from "./sensors/speedCadence/index.js";
export { SpeedScanner, SpeedSensor } from "./sensors/speed/index.js";
export { CadenceScanner, CadenceSensor } from "./sensors/cadence/index.js";
export { BicyclePowerScanner, BicyclePowerSensor } from "./sensors/bicyclePower/index.js";
export { FitnessEquipmentScanner, FitnessEquipmentSensor } from "./sensors/fitnessEquipment/index.js";
export { MuscleOxygenScanner, MuscleOxygenSensor } from "./sensors/muscleOxygen/index.js";
export { EnvironmentScanner, EnvironmentSensor } from "./sensors/environment/index.js";
