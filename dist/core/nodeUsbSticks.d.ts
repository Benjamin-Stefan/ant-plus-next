import { DebugOptions } from "../types/debugOptions.js";
import { NodeUSBDriver } from "./driver/nodeUSBDriver.js";
/**
 * Class representing a Garmin Stick 2 USB driver, which extends the base USBDriver class.
 */
export declare class GarminStick2 extends NodeUSBDriver {
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
    constructor(debugOptions?: DebugOptions);
}
/**
 * Class representing a Garmin Stick 3 USB driver, which extends the base USBDriver class.
 */
export declare class GarminStick3 extends NodeUSBDriver {
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
    constructor(debugOptions?: DebugOptions);
}
//# sourceMappingURL=nodeUsbSticks.d.ts.map