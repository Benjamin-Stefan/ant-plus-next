export class BicyclePowerSensorState {
    constructor(deviceId: number) {
        this.DeviceId = deviceId;
    }

    DeviceId: number;
    PedalPower?: number;
    RightPedalPower?: number;
    LeftPedalPower?: number;
    Cadence?: number;
    AccumulatedPower?: number;
    Power?: number;
    offset: number = 0;
    EventCount?: number;
    TimeStamp?: number;
    Slope?: number;
    TorqueTicksStamp?: number;
    CalculatedCadence?: number;
    CalculatedTorque?: number;
    CalculatedPower?: number;
}
