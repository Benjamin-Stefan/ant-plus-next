const { WebUsbStick } = require("../dist/index.cjs");

console.log("Testing CJS Module");
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
