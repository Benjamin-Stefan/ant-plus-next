export declare class SpeedSensorState {
    constructor(deviceId: number);
    DeviceId: number;
    SpeedEventTime: number | undefined;
    CumulativeSpeedRevolutionCount: number | undefined;
    CalculatedDistance: number | undefined;
    CalculatedSpeed: number | undefined;
    OperatingTime?: number;
    ManId?: number;
    SerialNumber?: number;
    HwVersion?: number;
    SwVersion?: number;
    ModelNum?: number;
    BatteryVoltage?: number;
    BatteryStatus?: "New" | "Good" | "Ok" | "Low" | "Critical" | "Invalid";
    Motion?: boolean;
}
