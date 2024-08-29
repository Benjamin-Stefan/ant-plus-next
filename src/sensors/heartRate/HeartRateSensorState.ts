export class HeartRateSensorState {
    constructor(deviceId: number) {
        this.DeviceID = deviceId;
    }

    DeviceID: number;
    BeatTime: number;
    BeatCount: number;
    ComputedHeartRate: number;
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
