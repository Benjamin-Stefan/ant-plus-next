"use strict";

import * as Ant from "../dist/index.mjs";

const stick = new Ant.GarminStick2();
const speedCadenceSensor = new Ant.SpeedCadenceSensor(stick);
speedCadenceSensor.setWheelCircumference(2.12); //Wheel circumference in meters

speedCadenceSensor.on("speedData", (data) => {
    console.log(`speed: ${data.CalculatedSpeed}`);
});

speedCadenceSensor.on("cadenceData", (data) => {
    console.log(`cadence: ${data.CalculatedCadence}`);
});

stick.on("startup", function () {
    console.log("startup");
    speedCadenceSensor.attach(0, 0);
});

const result = await stick.open();
if (!result) {
    console.log("Stick not found!");
}
