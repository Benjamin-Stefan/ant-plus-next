import * as Ant from "../dist/index.mjs";

const stick = new Ant.GarminStick2();

const debug = true;

const sensorConfigs = [
    {
        name: "BicyclePower",
        instance: new Ant.BicyclePowerSensor(stick),
        events: [
            {
                event: "powerData",
                getValue: (data) => {
                    return {
                        type: "BicyclePower",
                        value: data.CalculatedPower,
                        message: `Bicycle Power -> Id: ${data.DeviceId} - ${data.CalculatedPower}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "Cadence",
        instance: new Ant.CadenceSensor(stick),
        events: [
            {
                event: "cadenceData",
                getValue: (data) => {
                    return {
                        type: "Cadence",
                        value: data.CalculatedCadence,
                        message: `Cadence -> Id: ${data.DeviceId} - ${data.CalculatedCadence}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "Environment",
        instance: new Ant.EnvironmentSensor(stick),
        events: [
            {
                event: "envData",
                getValue: (data) => {
                    return {
                        type: "Environment",
                        value: data.Temperature,
                        message: `Environment -> Id: ${data.DeviceId} - ${data.Temperature}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "FitnessEquipment",
        instance: new Ant.FitnessEquipmentSensor(stick),
        events: [
            {
                event: "fitnessData",
                getValue: (data) => {
                    return {
                        type: "FitnessEquipment",
                        value: data.EquipmentType,
                        message: `Fitness Equipment -> Id: ${data.DeviceId} - ${data.EquipmentType}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "HeartRate",
        instance: new Ant.HeartRateSensor(stick),
        events: [
            {
                event: "heartRateData",
                getValue: (data) => {
                    return {
                        type: "HeartRate",
                        value: data.ComputedHeartRate,
                        message: `Heart Rate -> Id: ${data.DeviceId} - ${data.ComputedHeartRate}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "MuscleOxygen",
        instance: new Ant.MuscleOxygenSensor(stick),
        events: [
            {
                event: "oxygenData",
                getValue: (data) => {
                    return {
                        type: "MuscleOxygen",
                        value: data.TotalHemoglobinConcentration,
                        message: `Muscle Oxygen -> Id: ${data.DeviceId} - ${data.TotalHemoglobinConcentration}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "Speed",
        instance: new Ant.SpeedSensor(stick),
        events: [
            {
                event: "speedData",
                getValue: (data) => {
                    return {
                        type: "Speed",
                        value: data.CalculatedSpeed,
                        message: `Speed -> Id: ${data.DeviceId} - ${data.CalculatedSpeed}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "SpeedCadence",
        instance: new Ant.SpeedCadenceSensor(stick),
        events: [
            {
                event: "cadenceData",
                getValue: (data) => {
                    return {
                        type: "SpeedCadence",
                        value: data.CalculatedCadence,
                        message: `Speed Cadence (Cadence) -> Id: ${data.DeviceId} - ${data.CalculatedCadence}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
            {
                event: "speedData",
                getValue: (data) => {
                    return {
                        type: "SpeedCadence",
                        value: data.CalculatedSpeed,
                        message: `Speed Cadence (Speed) -> Id: ${data.DeviceId} - ${data.CalculatedSpeed}`,
                        debugPrint: JSON.stringify(data),
                    };
                },
            },
        ],
    },
    {
        name: "StrideSpeedDistance",
        instance: new Ant.StrideSpeedDistanceSensor(stick),
        events: [
            {
                event: "ssdData",
                getValue: (data) => {
                    return {
                        type: "StrideSpeedDistance",
                        value: data.CadenceInteger,
                        message: `StrideSpeedDistance -> Id: ${data.DeviceId} - ${data.CadenceInteger}`,
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
