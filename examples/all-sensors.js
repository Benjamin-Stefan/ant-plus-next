import * as Ant from "../dist/index.mjs";

const stick = new Ant.GarminStick2();

const debug = true;

const sensorConfigs = [
    {
        name: "HeartRate",
        deviceId: 39266,
        instance: new Ant.HeartRateSensor(stick),
        events: [
            {
                event: "hbData",
                getValue: (data) => {
                    return {
                        type: "heartrate",
                        value: data.ComputedHeartRate,
                        formatedValue: data.ComputedHeartRate,
                        message: `Heart Rate -> Id: ${data.DeviceId} - ${data.ComputedHeartRate} BPM`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
];

stick.on("startup", async () => {
    console.log("Stick initialized successfully");

    const attachPromises = sensorConfigs.map(async (config, index) => {
        try {
            console.log(`Setting up ${config.name} sensor on channel ${index}...`);

            const sensor = setupSensor(config);
            if (sensor) {
                await attachSensor(sensor, config.name, config.deviceId || 0, index);
            }
        } catch (error) {
            console.error(`Failed to attach sensor ${config.name} on channel ${index}: ${error.message}`);
        }
    });

    await Promise.all(attachPromises);
});

stick.on("shutdown", () => {
    console.log("Stick shutdown detected");
});

stick.on("unhandled", (data) => {
    console.warn("Unhandled event received:", data);
});

var result = await stick.open();

if (!result) {
    console.error("Failed to open the ANT+ stick. Exiting.");
    process.exit(1);
} else {
    console.log("ANT+ stick is opening...");
}

/**
 * Sets up a sensor with the provided configuration.
 * It handles logging, event listening, and data sending for each event.
 *
 * @param {Object} sensorConfig - Configuration object for the sensor.
 * @returns {Object} - The initialized sensor instance.
 */
function setupSensor({ instance, logFile, detailsFile, events }) {
    if (!instance) {
        console.error("Sensor instance is not defined. Skipping setup.");
        return null;
    }

    // Register event listeners for each defined event
    events.forEach(({ event, getValue }) => {
        instance.on(event, (data) => {
            const { message, type, debugPrint } = getValue(data);

            if (debug) {
                console.log(`[${type.toUpperCase()}] ${debugPrint}`);
            } else {
                console.log(`[${type.toUpperCase()}] ${message}`);
            }
        });
    });

    return instance;
}

/**
 * Attaches the sensor to a specific channel and device ID.
 * It also handles logging for attach and detach events.
 *
 * @param {Object} instance - The sensor instance to attach.
 * @param {string} sensorName - The name of the sensor.
 * @param {number} deviceId - The device ID for the sensor (usually 0 for wildcards).
 * @param {number} channel - The channel number to attach the sensor to.
 */
async function attachSensor(instance, sensorName, deviceId, channel) {
    try {
        await instance.attach(channel, deviceId);

        instance.on("attached", () => {
            console.log(`${sensorName} sensor attached successfully on channel ${channel}`);
        });

        instance.on("detached", () => {
            console.warn(`${sensorName} sensor detached from channel ${channel}`);
        });
    } catch (error) {
        console.error(`Error attaching ${sensorName} sensor on channel ${channel}: ${error.message}`);
    }
}
