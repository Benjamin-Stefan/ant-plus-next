import { GarminStick2, HeartRateSensor, HeartRateSensorState } from "../dist/index.mjs";

const stick: GarminStick2 = new GarminStick2();
const heartRateSensor: HeartRateSensor = new HeartRateSensor(stick);

heartRateSensor.on("heartRateData", (heartRateData: HeartRateSensorState) => {
    console.log(`Heart Rate -> Id: ${heartRateData.DeviceId} - ${heartRateData.ComputedHeartRate} BPM`);
    console.dir(heartRateData);
});

stick.on("startup", function () {
    console.log("startup");
    heartRateSensor.attach(0, 0);
});

stick.on("attached", async () => {});

const result = await stick.open();
if (!result) {
    console.log("Stick not found!");
}
