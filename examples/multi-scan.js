"use strict";

import * as Ant from "../dist/index.mjs";

const stick = new Ant.GarminStick2();

const hrScanner = new Ant.HeartRateScanner(stick);
hrScanner.on("heartRateData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});
hrScanner.on("attached", () => {
    speedCadenceScanner.scan();
    speedScanner.scan();
    cadenceScanner.scan();
    fitnessEquipmentScanner.scan();
    environmentScanner.scan();
});

const environmentScanner = new Ant.EnvironmentScanner(stick);
environmentScanner.on("envData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});

const fitnessEquipmentScanner = new Ant.FitnessEquipmentScanner(stick);
fitnessEquipmentScanner.on("fitnessData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});

const speedCadenceScanner = new Ant.SpeedCadenceScanner(stick);
speedCadenceScanner.on("speedData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});
speedCadenceScanner.on("cadenceData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});

const speedScanner = new Ant.SpeedScanner(stick);
speedScanner.on("speedData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});

const cadenceScanner = new Ant.CadenceScanner(stick);
cadenceScanner.on("cadenceData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});

stick.on("startup", function () {
    console.log("startup");
    hrScanner.scan();
});

const result = await stick.open();
if (!result) {
    console.log("Stick not found!");
}
