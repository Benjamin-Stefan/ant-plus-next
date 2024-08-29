export class BicyclePowerSensorState {
    constructor(deviceID: number) {
        this.DeviceID = deviceID;
    }

    DeviceID: number;
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
