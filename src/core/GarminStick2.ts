import { USBDriver } from "./USBDriver.js";

export class GarminStick2 extends USBDriver {
    constructor(dbgLevel = 0) {
        super(0x0fcf, 0x1008, dbgLevel);
    }
}
