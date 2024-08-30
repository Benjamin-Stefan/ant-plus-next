export declare class SpeedCadenceSensorState {
    constructor(deviceId: number);
    DeviceId: number;
    CadenceEventTime: number | undefined;
    CumulativeCadenceRevolutionCount: number | undefined;
    SpeedEventTime: number | undefined;
    CumulativeSpeedRevolutionCount: number | undefined;
    CalculatedCadence: number | undefined;
    CalculatedDistance: number | undefined;
    CalculatedSpeed: number | undefined;
}
