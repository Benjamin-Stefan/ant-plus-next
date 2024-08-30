import { USBDriver } from "./usbDriver.js";
export class GarminStick3 extends USBDriver {
    constructor(debugOptions = {}) {
        super(0x0fcf, 0x1009, debugOptions);
    }
}
//# sourceMappingURL=garminStick3.js.map