import { USBDriver } from "./USBDriver.js";

export class GarminStick3 extends USBDriver {
    constructor(dbgLevel = 0) {
        super(0x0fcf, 0x1009, dbgLevel);
    }
}
