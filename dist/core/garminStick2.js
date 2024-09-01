import { USBDriver } from "./usbDriver.js";
/**
 * Class representing a Garmin Stick 2 USB driver, which extends the base USBDriver class.
 */
export class GarminStick2 extends USBDriver {
    /**
     * Creates an instance of GarminStick2.
     *
     * @param {DebugOptions} [debugOptions={}] - Optional debug options for USB operations.
     *
     * @example
     * ```typescript
     * const garminStick = new GarminStick2();
     * garminStick.open(); // Opens the connection to the Garmin Stick 2 device.
     * ```
     */
    constructor(debugOptions = {}) {
        super(0x0fcf, 0x1008, debugOptions);
    }
}
//# sourceMappingURL=garminStick2.js.map