"use strict";

import * as Ant from "../dist/index.mjs";

let stick = new Ant.GarminStick2();
let muscleOxygenSensor = new Ant.MuscleOxygenSensor(stick);

muscleOxygenSensor.on("oxygenData", (data) => {
    console.log(`id: ${data.DeviceId}`);
    console.dir(data);

    if (data.UTCTimeRequired) {
        muscleOxygenSensor.setUTCTime(function () {
            console.log("Set UTC time");
        });
    }
});

stick.on("startup", function () {
    console.log("startup");
    muscleOxygenSensor.attach(0, 0);
});

const result = await stick.open();
if (!result) {
    console.log("Stick not found!");
}
