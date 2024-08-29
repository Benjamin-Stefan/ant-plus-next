export class EnvironmentSensorState {
    constructor(deviceId: number) {
        this.DeviceID = deviceId;
    }

    DeviceID: number;
    EventCount: number;
    Temperature: number;
}
