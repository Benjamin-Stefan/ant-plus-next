import { WebUSBDriver } from "./driver/webUSBDriver.js";
/**
 * WebUsbStick class extends the WebUSBDriver to represent a specific USB stick that uses the WebUSB API.
 * It checks for WebUSB API availability in the environment before initializing.
 *
 * @category Drivers
 * @extends WebUSBDriver
 */
export declare class WebUsbStick extends WebUSBDriver {
    /**
     * Creates an instance of WebUsbStick.
     * Throws an error if the WebUSB API is not available in the current environment (e.g., unsupported browsers).
     *
     * @throws {Error} If the WebUSB API is not available in the environment.
     *
     * @example
     * try {
     *   const usbStick = new WebUsbStick();
     *   // Use usbStick for further operations
     * } catch (error) {
     *   console.error(error.message);
     * }
     */
    constructor();
}
//# sourceMappingURL=webUsbStick.d.ts.map