import React, { useEffect } from "react";
import { WebUsbStick, HeartRateSensor } from "ant-plus-next";

const HeartRateExample = () => {
    useEffect(() => {
        const stick = new WebUsbStick();
        const heartRateSensor = new HeartRateSensor(stick);

        heartRateSensor.on("hbData", (data) => {
            console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
        });

        stick.on("startup", () => {
            heartRateSensor.attachSensor(0, 0);
        });

        if (!stick.open()) {
            console.error("Stick not found!");
        }

        // Cleanup function
        return () => {
            if (stick) {
                stick.close(); // Schließt den Stick, wenn die Komponente unmontiert wird
            }
        };
    }, []);

    return (
        <div>
            <h2>Heart Rate Sensor Example</h2>
            <p>Connecting to the ANT+ Heart Rate Sensor...</p>
        </div>
    );
};

export default HeartRateExample;
