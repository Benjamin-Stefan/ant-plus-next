import { PairedDevice } from "../../types/pairedDevice";
/**
 * Represents the state of a Fitness Equipment sensor.
 * This class holds the data fields associated with the state of a fitness equipment sensor,
 * including metrics such as heart rate, speed, distance, power, and more.
 */
export declare class FitnessEquipmentSensorState {
    /**
     * Creates an instance of the FitnessEquipmentSensorState.
     *
     * @param {number} deviceId - The unique identifier of the sensor device.
     * @example
     * const sensorState = new FitnessEquipmentSensorState(12345);
     */
    constructor(deviceId: number);
    /**
     * The event count for page 0x19.
     * @type {number | undefined}
     */
    _EventCount0x19?: number;
    /**
     * The event count for page 0x1A.
     * @type {number | undefined}
     */
    _EventCount0x1A?: number;
    /**
     * The unique identifier of the sensor device.
     * @type {number}
     */
    DeviceId: number;
    /**
     * The temperature measured by the sensor, in degrees Celsius.
     * @type {number | undefined}
     */
    Temperature?: number;
    /**
     * The zero offset calibration value for the sensor.
     * @type {number | undefined}
     */
    ZeroOffset?: number;
    /**
     * The spin-down time for the sensor, in seconds.
     * @type {number | undefined}
     */
    SpinDownTime?: number;
    /**
     * The type of fitness equipment.
     * Can be "Treadmill", "Elliptical", "Reserved", "Rower", "Climber", "NordicSkier", "Trainer/StationaryBike", or "General".
     * @type {"Treadmill" | "Elliptical" | "Reserved" | "Rower" | "Climber" | "NordicSkier" | "Trainer/StationaryBike" | "General" | undefined}
     */
    EquipmentType?: "Treadmill" | "Elliptical" | "Reserved" | "Rower" | "Climber" | "NordicSkier" | "Trainer/StationaryBike" | "General";
    /**
     * The total elapsed time, in seconds.
     * @type {number | undefined}
     */
    ElapsedTime?: number;
    /**
     * The total distance traveled, in meters.
     * @type {number | undefined}
     */
    Distance?: number;
    /**
     * The real speed of the equipment, in meters per second.
     * @type {number | undefined}
     */
    RealSpeed?: number;
    /**
     * The virtual speed of the equipment, in meters per second.
     * @type {number | undefined}
     */
    VirtualSpeed?: number;
    /**
     * The current heart rate, in beats per minute (BPM).
     * @type {number | undefined}
     */
    HeartRate?: number;
    /**
     * The source of the heart rate data.
     * Can be "HandContact", "EM", or "ANT+".
     * @type {"HandContact" | "EM" | "ANT+" | undefined}
     */
    HeartRateSource?: "HandContact" | "EM" | "ANT+";
    /**
     * The state of the equipment.
     * Can be "OFF", "READY", "IN_USE", or "FINISHED".
     * @type {"OFF" | "READY" | "IN_USE" | "FINISHED" | undefined}
     */
    State?: "OFF" | "READY" | "IN_USE" | "FINISHED";
    /**
     * The cycle length of the equipment, in meters.
     * @type {number | undefined}
     */
    CycleLength?: number;
    /**
     * The incline of the equipment, in percentage.
     * @type {number | undefined}
     */
    Incline?: number;
    /**
     * The resistance level of the equipment.
     * @type {number | undefined}
     */
    Resistance?: number;
    /**
     * The metabolic equivalent (MET) value.
     * @type {number | undefined}
     */
    METs?: number;
    /**
     * The caloric burn rate, in kilocalories per hour.
     * @type {number | undefined}
     */
    CaloricBurnRate?: number;
    /**
     * The total calories burned.
     * @type {number | undefined}
     */
    Calories?: number;
    /**
     * The distance ascended, in meters.
     * @type {number | undefined}
     */
    AscendedDistance?: number;
    /**
     * The distance descended, in meters.
     * @type {number | undefined}
     */
    DescendedDistance?: number;
    /**
     * The total number of strides taken.
     * @type {number | undefined}
     */
    Strides?: number;
    /**
     * The total number of strokes taken.
     * @type {number | undefined}
     */
    Strokes?: number;
    /**
     * The current cadence, in revolutions per minute (RPM).
     * @type {number | undefined}
     */
    Cadence?: number;
    /**
     * The total accumulated power output, in watts.
     * @type {number | undefined}
     */
    AccumulatedPower?: number;
    /**
     * The instantaneous power output, in watts.
     * @type {number | undefined}
     */
    InstantaneousPower?: number;
    /**
     * The average power output, in watts.
     * @type {number | undefined}
     */
    AveragePower?: number;
    /**
     * The trainer status, typically indicating the current mode or condition of the trainer.
     * @type {number | undefined}
     */
    TrainerStatus?: number;
    /**
     * The target status of the equipment.
     * Can be "OnTarget", "LowSpeed", or "HighSpeed".
     * @type {"OnTarget" | "LowSpeed" | "HighSpeed" | undefined}
     */
    TargetStatus?: "OnTarget" | "LowSpeed" | "HighSpeed";
    /**
     * The total number of wheel ticks.
     * @type {number | undefined}
     */
    WheelTicks?: number;
    /**
     * The wheel period, in seconds.
     * @type {number | undefined}
     */
    WheelPeriod?: number;
    /**
     * The torque value, in newton-meters.
     * @type {number | undefined}
     */
    Torque?: number;
    /**
     * The hardware version of the sensor.
     * @type {number | undefined}
     */
    HwVersion?: number;
    /**
     * The manufacturer ID of the sensor.
     * @type {number | undefined}
     */
    ManId?: number;
    /**
     * The model number of the sensor.
     * @type {number | undefined}
     */
    ModelNum?: number;
    /**
     * The software version of the sensor.
     * @type {number | undefined}
     */
    SwVersion?: number;
    /**
     * The serial number of the sensor.
     * @type {number | undefined}
     */
    SerialNumber?: number;
    /**
     * The list of paired devices associated with the sensor.
     * @type {PairedDevice[]}
     */
    PairedDevices: PairedDevice[];
}
