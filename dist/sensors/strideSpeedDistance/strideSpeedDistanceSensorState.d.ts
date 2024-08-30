export declare class StrideSpeedDistanceSensorState {
    constructor(deviceId: number);
    DeviceId: number;
    TimeFractional: number | undefined;
    TimeInteger: number | undefined;
    DistanceInteger: number | undefined;
    DistanceFractional: number | undefined;
    SpeedInteger: number | undefined;
    SpeedFractional: number | undefined;
    StrideCount: number | undefined;
    UpdateLatency: number | undefined;
    CadenceInteger: number | undefined;
    CadenceFractional: number | undefined;
    Status: number | undefined;
    Calories: number | undefined;
}
