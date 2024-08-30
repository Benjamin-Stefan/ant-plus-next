import { PairedDevice } from "../../types/pairedDevice";

export class FitnessEquipmentSensorState {
    constructor(deviceId: number) {
        this.DeviceId = deviceId;
    }

    _EventCount0x19?: number;
    _EventCount0x1A?: number;

    DeviceId: number;
    Temperature?: number;
    ZeroOffset?: number;
    SpinDownTime?: number;

    EquipmentType?: "Treadmill" | "Elliptical" | "Reserved" | "Rower" | "Climber" | "NordicSkier" | "Trainer/StationaryBike" | "General";
    ElapsedTime?: number;
    Distance?: number;
    RealSpeed?: number;
    VirtualSpeed?: number;
    HeartRate?: number;
    HeartRateSource?: "HandContact" | "EM" | "ANT+";
    State?: "OFF" | "READY" | "IN_USE" | "FINISHED";

    CycleLength?: number;
    Incline?: number;
    Resistance?: number;

    METs?: number;
    CaloricBurnRate?: number;
    Calories?: number;

    AscendedDistance?: number;
    DescendedDistance?: number;

    Strides?: number;
    Strokes?: number;

    Cadence?: number;
    AccumulatedPower?: number;
    InstantaneousPower?: number;
    AveragePower?: number;
    TrainerStatus?: number;
    TargetStatus?: "OnTarget" | "LowSpeed" | "HighSpeed";

    WheelTicks?: number;
    WheelPeriod?: number;
    Torque?: number;

    HwVersion?: number;
    ManId?: number;
    ModelNum?: number;

    SwVersion?: number;
    SerialNumber?: number;

    PairedDevices: PairedDevice[] = [];
}