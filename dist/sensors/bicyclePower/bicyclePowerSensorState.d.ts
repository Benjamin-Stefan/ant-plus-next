export declare class BicyclePowerSensorState {
    constructor(deviceId: number);
    DeviceId: number;
    PedalPower?: number;
    RightPedalPower?: number;
    LeftPedalPower?: number;
    Cadence?: number;
    AccumulatedPower?: number;
    Power?: number;
    offset: number;
    EventCount?: number;
    TimeStamp?: number;
    Slope?: number;
    TorqueTicksStamp?: number;
    CalculatedCadence?: number;
    CalculatedTorque?: number;
    CalculatedPower?: number;
}
