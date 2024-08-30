export class EnvironmentSensorState {
    constructor(deviceId: number) {
        this.DeviceId = deviceId;
    }

    DeviceId: number;
    EventCount: number | undefined;
    Temperature: number | undefined;
}
