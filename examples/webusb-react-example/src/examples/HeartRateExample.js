import React, { useState } from "react";
import { WebUsbStick, HeartRateSensor } from "ant-plus-next";

const HeartRateExample = () => {
    const [isConnected, setIsConnected] = useState(false);

    const handleConnect = async () => {
        try {
            const stick = new WebUsbStick();
            const heartRateSensor = new HeartRateSensor(stick);

            heartRateSensor.on("hbData", (data) => {
                console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
            });

            stick.on("startup", () => {
                heartRateSensor.attach(0, 0);
            });

            const result = await stick.open();

            if (!result) {
                console.error("Stick not found!");
                return;
            }

            setIsConnected(true); // Set the state to show the connection is successful

            // Cleanup function to close the device if necessary
            return () => {
                if (stick) {
                    stick.close(); // Close the stick when the component unmounts
                }
            };
        } catch (error) {
            console.error("USB connection failed", error);
        }
    };

    return (
        <div>
            <h2>Heart Rate Sensor Example</h2>
            {!isConnected ? (
                <div>
                    <p>Click "Connect" to connect the heart rate sensor.</p>
                    <button onClick={handleConnect}>Connect USB Device</button>
                </div>
            ) : (
                <p>Connected to the ANT+ heart rate sensor!</p>
            )}
        </div>
    );
};

export default HeartRateExample;
