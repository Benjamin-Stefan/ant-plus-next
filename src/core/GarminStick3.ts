import { DebugOptions } from "../types/debugOptions.js";
import { USBDriver } from "./usbDriver.js";

export class GarminStick3 extends USBDriver {
    constructor(debugOptions: DebugOptions = {}) {
        super(0x0fcf, 0x1009, debugOptions);
    }
}
