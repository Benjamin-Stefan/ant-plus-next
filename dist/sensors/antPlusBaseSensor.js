import { BaseSensor } from "./baseSensor.js";
export class AntPlusBaseSensor extends BaseSensor {
    scan(type) {
        return super.scan(type, 57);
    }
    attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period) {
        return super.attachSensor(channel, type, deviceId, deviceType, transmissionType, timeout, period, 57);
    }
}
//# sourceMappingURL=antPlusBaseSensor.js.map