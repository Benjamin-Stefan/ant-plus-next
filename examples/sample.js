import * as Ant from "../dist/index.mjs";

async function openStick(stick, stickid) {
    var sensor1 = new Ant.HeartRateSensor(stick);

    var dev_id = 0;

    sensor1.on("heartRateData", function (data) {
        console.log(stickid, "sensor 1: ", data.DeviceId, data.ComputedHeartRate, data);
        if (data.DeviceId !== 0 && dev_id === 0) {
            dev_id = data.DeviceId;
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

    var sensor2 = new Ant.StrideSpeedDistanceSensor(stick);

    sensor2.on("ssddata", function (data) {
        console.log(stickid, "sensor 2: ", data.DeviceId, data);
    });

    sensor2.on("attached", function () {
        console.log(stickid, "sensor2 attached");
    });
    sensor2.on("detached", function () {
        console.log(stickid, "sensor2 detached");
    });

    var scanner = new Ant.HeartRateScanner(stick);

    scanner.on("heartRateData", function (data) {
        console.log(stickid, "scanner: ", data.DeviceId, data.ComputedHeartRate, data.Rssi, data);
    });

    scanner.on("attached", function () {
        console.log(stickid, "scanner attached");
    });
    scanner.on("detached", function () {
        console.log(stickid, "scanner detached");
    });

    stick.on("startup", function () {
        console.log(stickid, "startup");

        console.log(stickid, "Max channels:", stick.maxChannels);

        try {
            sensor1.attach(0, 0);
        } catch (error) {
            console.error(error);
        }

        setTimeout(function (data) {
            sensor2.attach(1, 0);
        }, 2000);

        setTimeout(function () {
            sensor1.once("detached", function () {
                sensor2.detach();
            });
            sensor2.once("detached", function () {
                scanner.scan();
            });
            sensor1.detach();
        }, 5000);
    });

    stick.on("shutdown", function () {
        console.log(stickid, "shutdown");
    });

    try {
        await stick.open();
        console.log(stickid, "Stick found");

        setTimeout(() => {
            stick.close();
        }, 10000);
    } catch (err) {
        console.error(stickid, err);
    }
}

openStick(new Ant.GarminStick2(), 1);
openStick(new Ant.GarminStick2(), 2);
openStick(new Ant.GarminStick3(), 3);

openStick(new Ant.GarminStick2(), 4);
openStick(new Ant.GarminStick2(), 5);
openStick(new Ant.GarminStick3(), 6);
