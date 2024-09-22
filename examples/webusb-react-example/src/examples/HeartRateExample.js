import React, { useState } from "react";
import { WebUsbStick, HeartRateSensor } from "ant-plus-next";

const HeartRateExample = () => {
    const [stickState, setStickState] = useState();
    const [isConnected, setIsConnected] = useState(stickState?.isScanning());
    const [sensorData, setSensorData] = useState({ DeviceId: null, ComputedHeartRate: null });

    const handleConnect = async () => {
        try {
            const stick = new WebUsbStick();
            const heartRateSensor = new HeartRateSensor(stick);

            setStickState(stick);
            heartRateSensor.on("hbData", (data) => {
                console.log(`DeviceId: ${data.DeviceId}, HeartRate: ${data.ComputedHeartRate}`);

                setSensorData({
                    DeviceId: data.DeviceId,
                    ComputedHeartRate: data.ComputedHeartRate,
                });
            });

            stick.on("startup", () => {
                console.log("Stick initialized successfully");
                heartRateSensor.attach(0, 0);
                setIsConnected(true);
            });

            stick.on("shutdown", () => {
                console.log("Stick shutdown detected");
            });

            stick.on("unhandled", (data) => {
                console.warn("Unhandled event received:", data);
            });

            await stick.open();

            return () => {
                if (stick) {
                    stick.close();
                }
            };
        } catch (error) {
            console.error("USB connection failed", error);
        }
    };

    const handleDisconnect = async () => {
        if (stickState) {
            stickState.close();
            setIsConnected(false);
        }
    };

    return (
        <>
            <h2>Heart Rate Sensor Example</h2>
            {!isConnected ? (
                <div>
                    <p>Click "Connect" to connect the heart rate sensor.</p>
                    <button onClick={handleConnect}>Connect USB Device</button>
                </div>
            ) : (
                <div>
                    <p>Connected to the ANT+ heart rate sensor!</p>
                    <button onClick={handleDisconnect}>Disconnect USB Device</button>
                    <p>Sensor data</p>
                    <span>{sensorData.DeviceId !== null && sensorData.ComputedHeartRate !== null ? `Device ID: ${sensorData.DeviceId}, Heart Rate: ${sensorData.ComputedHeartRate}` : "No data available"}</span>
                </div>
            )}
        </>
    );
};

export default HeartRateExample;
