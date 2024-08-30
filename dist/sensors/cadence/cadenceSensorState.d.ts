export declare class CadenceSensorState {
    constructor(deviceId: number);
    DeviceId: number;
    CadenceEventTime: number | undefined;
    CumulativeCadenceRevolutionCount: number | undefined;
    CalculatedCadence: number | undefined;
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
