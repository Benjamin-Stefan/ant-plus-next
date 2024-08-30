import { USBDriver } from "./usbDriver.js";
export class GarminStick2 extends USBDriver {
    constructor(debugOptions = {}) {
        super(0x0fcf, 0x1008, debugOptions);
    }
}
//# sourceMappingURL=garminStick2.js.map