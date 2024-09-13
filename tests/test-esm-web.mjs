import { WebUsbStick } from "../dist/index.mjs";

console.log("Testing ESM Module");
try {
    const stick = new WebUsbStick();
    console.log(stick); // Should not output a valid object
} catch (error) {
    if (error.message === "WebUSB API is not available in this environment.") {
        console.log(error.message);
    } else {
        throw error;
    }
}
