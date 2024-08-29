import * as Ant from "../dist/index.js";

const stick = new Ant.GarminStick2(3);

stick.on("startup", async () => {
    console.log("Stick initialized successfully");
    let channel = 0;
});

stick.on("shutdown", () => {
    console.log("Stick shutdown detected");
});

stick.on("unhandled", data => {
    console.log("Unhandled event received:", data);
});

var sensor1 = new Ant.HeartRateSensor(stick);

var dev_id = 0;

sensor1.on("hbdata", function (data) {
    console.log(stickid, "sensor 1: ", data.DeviceID, data.ComputedHeartRate, data);
    if (data.DeviceID !== 0 && dev_id === 0) {
        dev_id = data.DeviceID;
        console.log(stickid, "detaching...");
        sensor1.detach();
        sensor1.once("detached", function () {
            sensor1.attach(0, dev_id);
        });
    }
});

sensor1.on("attached", function () {
    console.log(stickid, "sensor1 attached");
});
sensor1.on("detached", function () {
    console.log(stickid, "sensor1 detached");
});

if (!stick.open()) {
    console.error("Failed to open the ANT+ stick. Exiting.");
    process.exit(1);
} else {
    console.log("ANT+ stick is opening...");
}
