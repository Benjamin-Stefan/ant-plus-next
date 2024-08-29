export class CadenceSensorState {
    constructor(deviceID: number) {
        this.DeviceID = deviceID;
    }

    DeviceID: number;
    CadenceEventTime: number;
    CumulativeCadenceRevolutionCount: number;
    CalculatedCadence: number;

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
