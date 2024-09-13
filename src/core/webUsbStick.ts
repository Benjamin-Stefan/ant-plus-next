import { WebUSBDriver } from "./driver/webUSBDriver.js";

export class WebUsbStick extends WebUSBDriver {
    constructor() {
        if (typeof navigator === "undefined" || typeof navigator.usb === "undefined") {
            throw new Error("WebUSB API is not available in this environment.");
        }

        super();
    }
}
