import { DebugOptions } from "../types/debugOptions.js";
import { USBDriver } from "./usbDriver.js";

/**
 * Class representing a Garmin Stick 3 USB driver, which extends the base USBDriver class.
 */
export class GarminStick3 extends USBDriver {
    /**
     * Creates an instance of GarminStick3.
     *
     * @param {DebugOptions} [debugOptions={}] - Optional debug options for USB operations.
     *
     * @example
     * ```typescript
     * const garminStick = new GarminStick3({ usbDebugLevel: 1 });
     * garminStick.open(); // Opens the connection to the Garmin Stick 3 device.
     * ```
     */
    constructor(debugOptions: DebugOptions = {}) {
        super(0x0fcf, 0x1009, debugOptions);
    }
}
