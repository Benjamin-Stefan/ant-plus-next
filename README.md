# ant-plus-next

![npm version](https://img.shields.io/npm/v/ant-plus-next) ![Build Status](https://img.shields.io/github/actions/workflow/status/Benjamin-Stefan/ant-plus-next/ci.yml?branch=main) ![License](https://img.shields.io/github/license/Benjamin-Stefan/ant-plus-next) ![Downloads](https://img.shields.io/npm/dm/ant-plus-next) ![Issues](https://img.shields.io/github/issues/Benjamin-Stefan/ant-plus-next)

A modern Node.js module for interacting with ANT+ USB sticks and sensors. It provides a user-friendly API for heart rate monitors, speed sensors, and more, supporting both Node.js USB and WebUSB (browser) for maximum flexibility in various environments.

## 🚀 Features

-   🖥️ Cross-platform: Supports Linux, Windows, macOS, and WebUSB (browser).
-   🔗 Node.js USB and WebUSB (browser) compatibility for a variety of environments.
-   🏃‍♂️ Easy interaction with heart rate, speed, and power sensors.
-   📦 Simple npm installation and intuitive API.

## 📋 Table of Contents

-   [About](#about)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Migration from ant-plus](#migration-from-ant-plus)
-   [Usage](#usage)
-   [Important Notes](#important-notes)
-   [API Documentation](#api-documentation)
-   [Examples](#examples)
-   [Contributing](#contributing)
-   [License](#license)

## 🛠️ About

`ant-plus-next` is a versatile Node.js library designed for interacting with ANT+ USB sticks and sensors. The library supports **both Node.js (via USB)** and **WebUSB (browser)**, making it easy to integrate with devices like heart rate monitors, speed sensors, and power meters, whether you're building a server-side application or a browser-based solution.

With multi-platform compatibility (Linux, Windows, macOS, and browser), `ant-plus-next` allows seamless access to ANT+ sensor data, regardless of whether you're building a server-side application or an in-browser solution for data acquisition.

## 📦 Prerequisites

Before installing the module, ensure the following prerequisites are met:

### Linux

Make sure `libusb` is installed. You can install `libusb` and other required packages using:

```sh
sudo apt-get install build-essential libudev-dev
```

### WIndows

Use [Zadig](https://zadig.akeo.ie/) to install the WinUSB driver for your USB device. Otherwise, you will get `LIBUSB_ERROR_NOT_SUPPORTED` when attempting to open devices.

### macOS

Ensure that Garmin Express is not running, as it will attach to the ANT+ stick and prevent this module from accessing it.

### Browser (WebUSB)

To use WebUSB in a browser, ensure the following conditions are met:

-   WebUSB is supported in **Google Chrome** (version 61 or higher) and other Chromium-based browsers like **Microsoft Edge**.
-   WebUSB is **not supported in Firefox** or **Safari**.
-   You must serve your web app over **HTTPS**, as WebUSB only works in secure contexts.
-   Users must grant explicit access to the USB device using the browser's permission prompt.

## ⚙️ Installation

Install the module via npm:

```sh
npm install ant-plus-next
```

## 🔄 Migration from `ant-plus`

-   Change variable `DeviceID` to `DeviceId`
-   Renamed method `attach` to `attachSensor` in `BaseSensor`, `AntPlusBaseSensor`, `AntPlusScanner`, `AntPlusSensor`
-   Update the constructor of `GarminStick2` and `GarminStick3` from `constructor(dbgLevel = 0)` to `debugOptions: DebugOptions = {}`.
-   Change event `hbData` to `heartRateData` from Heart rate sensor
-   Various other small, insignificant changes were made.

If you encounter any issues, please check the [Usage](#usage) or [Examples](#examples). If the problem persists, feel free to open an issue.

## 🚀 Usage

Here’s a quick guide to get you started with the `ant-plus-next` module:

### For Node.js

1. Create USB Stick Instance

    ```javascript
    import * as Ant from "ant-plus-next";
    const stick = new Ant.GarminStick3();
    ```

2. Create and configure a sensor:

    ```javascript
    const heartRateSensor = new Ant.HeartRateSensor(stick);
    ```

3. Attach event listeners:

    ```javascript
    heartRateSensor.on("heartRateData", (data) => {
        console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
    });
    ```

4. Open the USB stick and start scanning:

    ```javascript
    stick.on("startup", () => {
        heartRateSensor.attachSensor(0, 0);
    });

    const result = await stick.open();
    if (!result) {
        console.error("Stick not found!");
    }
    ```

### For WebUSB (browser)

1. Create WebUSB Stick Instance

    ```javascript
    import * as Ant from "ant-plus-next";
    const webUsbStick = new Ant.WebUsbStick();
    ```

2. Create and configure a sensor:

    ```javascript
    const heartRateSensor = new Ant.HeartRateSensor(webUsbStick);
    ```

3. Attach event listeners:

    ```javascript
    heartRateSensor.on("heartRateData", (data) => {
        console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
    });
    ```

4. Open the WebUSB stick and start scanning:

    ```javascript
    webUsbStick.on("startup", () => {
        heartRateSensor.attachSensor(0, 0);
    });

    const result = await webUsbStick.open();
    if (!result) {
        console.error("WebUSB Stick not found!");
    }
    ```

## ⚠️ Important Notes

-   Never attach a sensor before receiving the `startup` event.
-   Never attach a new sensor before receiving the `attached` or `detached` event of the previous sensor.
-   Never detach a sensor before receiving the `attached` or `detached` event of the previous sensor.

## 📖 API Documentation

For detailed API documentation, visit the TypeDoc-generated documentation.

## 🧪 Examples

Explore more examples in the [examples](/examples) folder.

### Example: Heart Rate Sensor for Node.js

```javascript
import * as Ant from "ant-plus-next";
const stick = new Ant.GarminStick3();
const heartRateSensor = new Ant.HeartRateSensor(stick);

heartRateSensor.on("heartRateData", (data) => {
    console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
});

stick.on("startup", () => {
    heartRateSensor.attachSensor(0, 0);
});

const result = await stick.open();
if (!result) {
    console.error("Stick not found!");
}
```

### Example: Heart Rate Sensor for WebUSB (browser)

```javascript
import * as Ant from "ant-plus-next";
const webUsbStick = new Ant.WebUsbStick();
const heartRateSensor = new Ant.HeartRateSensor(webUsbStick);

heartRateSensor.on("heartRateData", (data) => {
    console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
});

webUsbStick.on("startup", () => {
    heartRateSensor.attachSensor(0, 0);
});

const result = await webUsbStick.open();
if (!result) {
    console.error("WebUSB Stick not found!");
}
```

## 🤝 Contributing

Contributions are welcome! Please check out the [CONTRIBUTING.md](/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](/CODE_OF_CONDUCT.md) for details.

## 📜 License and Acknowledgements

This project is licensed under the [MIT License](./LICENSE).

Parts of the code are based on the original project [ant-plus](https://github.com/Loghorn/ant-plus) by Alessandro Vergani (© 2015). The original project was also licensed under the MIT License.

### Thanks You!

Thanks to the original developers and all contributors!
