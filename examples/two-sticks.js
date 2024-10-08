"use strict";

import * as Ant from "../dist/index.mjs";

const stick = new Ant.GarminStick2();

const fitnessEquipmentSensor = new Ant.FitnessEquipmentSensor(stick);

fitnessEquipmentSensor.on("fitnessData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});

stick.on("startup", function () {
    console.log("startup");
    fitnessEquipmentSensor.attach(0, 0);
});

if (!stick.open()) {
    console.log("Stick not found!");
}

const stick2 = new Ant.GarminStick2();

const hrSensor = new Ant.HeartRateSensor(stick2);

hrSensor.on("heartRateData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);
});

stick2.on("startup", function () {
    console.log("startup2");
    hrSensor.attach(0, 0);
});

if (!stick2.open()) {
    console.log("Stick 2 not found!");
}
