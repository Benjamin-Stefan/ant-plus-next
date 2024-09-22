"use strict";

import * as Ant from "../dist/index.mjs";

let stick = new Ant.GarminStick2();
let bicyclePowerSensor = new Ant.BicyclePowerSensor(stick);

bicyclePowerSensor.on("powerData", (data) => {
    console.log(`id: ${data.DeviceId}, cadence: ${data.Cadence}, power: ${data.Power}`);
});

stick.on("startup", function () {
    console.log("startup");
    bicyclePowerSensor.attach(0, 0);
});

const result = await stick.open();
if (!result) {
    console.log("Stick not found!");
}
