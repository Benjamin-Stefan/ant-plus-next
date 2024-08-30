export class HeartRateSensorState {
    constructor(deviceId: number) {
        this.DeviceId = deviceId;
    }

    DeviceId: number;
    BeatTime: number | undefined;
    BeatCount: number | undefined;
    ComputedHeartRate: number | undefined;
    OperatingTime?: number;
    ManId?: number;
    SerialNumber?: number;
    HwVersion?: number;
    SwVersion?: number;
    ModelNum?: number;
    PreviousBeat?: number;

    IntervalAverage?: number;
    IntervalMax?: number;
    SessionAverage?: number;
    SupportedFeatures?: number;
    EnabledFeatures?: number;
    BatteryLevel?: number;
    BatteryVoltage?: number;
    BatteryStatus?: "New" | "Good" | "Ok" | "Low" | "Critical" | "Invalid";
}
