export class SpeedCadenceSensorState {
    constructor(deviceID: number) {
        this.DeviceID = deviceID;
    }

    DeviceID: number;
    CadenceEventTime: number;
    CumulativeCadenceRevolutionCount: number;
    SpeedEventTime: number;
    CumulativeSpeedRevolutionCount: number;
    CalculatedCadence: number;
    CalculatedDistance: number;
    CalculatedSpeed: number;
}
