export class SpeedCadenceSensorState {
    constructor(deviceId: number) {
        this.DeviceId = deviceId;
    }

    DeviceId: number;
    CadenceEventTime: number | undefined;
    CumulativeCadenceRevolutionCount: number | undefined;
    SpeedEventTime: number | undefined;
    CumulativeSpeedRevolutionCount: number | undefined;
    CalculatedCadence: number | undefined;
    CalculatedDistance: number | undefined;
    CalculatedSpeed: number | undefined;
}
