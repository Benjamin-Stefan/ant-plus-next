# ant-plus-next

![License](https://img.shields.io/github/license/Benjamin-Stefan/ant-plus-next)

A modern Node.js module for working with ANT+ USB sticks and sensors, providing a user-friendly API to interact with various ANT+ sensors like heart rate monitors, speed sensors, and more.

## Table of Contents

-   [About the Project](#about-the-project)
-   [Prerequisites](#prerequisites)
    -   [Linux](#linux)
    -   [Windows](#windows)
    -   [macOS](#macos)
-   [Installation](#installation)
-   [Migration from ant-plus](#migration-from-ant-plus)
-   [Getting Started](#getting-started)
    -   [Step 1: Create USB Stick Instance](#step-1-create-usb-stick-instance)
    -   [Step 2: Create Sensors](#step-2-create-sensors)
    -   [Step 3: Attach Events](#step-3-attach-events)
    -   [Step 4: Open USB Stick](#step-4-open-usb-stick)
    -   [Step 5: Scanning for Sensors](#step-5-scanning-for-sensors)
-   [Important Notes](#important-notes)
-   [API Documentation](#api-documentation)
    -   [Stick Objects](#stick-objects)
    -   [Common to All Sensors](#common-to-all-sensors)
    -   [Common to All Scanners](#common-to-all-scanners)
    -   [Specific Sensors](#specific-sensors)
-   [Examples](#examples)
-   [License and Acknowledgements](#license-and-acknowledgements)

## About the Project

`ant-plus-next` provides a modern Node.js module for communicating with ANT+ USB sticks and sensors. The module is compatible with Linux, Windows, and macOS, offering an easy way to capture data from heart rate monitors, speed sensors, power meters, and more.

## Prerequisites

Before installing the module, ensure the following prerequisites are met:

### Linux

Make sure `libusb` is installed. You can install `libusb` and other required packages using:

```sh
sudo apt-get install build-essential libudev-dev
```

### WIndows

Use [Zadig](https://zadig.akeo.ie/) to install the WinUSB driver for your USB device. Otherwise, you will get `LIBUSB_ERROR_NOT_SUPPORTED` when attempting to open devices.

### macOS

When installing `ant-plus-next`, the required `libusb` will also be installed. Ensure that Garmin Express is not running, as it will attach to the ANT+ stick and prevent this module from accessing it.

## Installation

Install the module via npm:

```sh
npm install ant-plus-next
```

## Migration from ant-plus

-   Change variable `DeviceID` to `DeviceId`
-   Change method `attach` to `attachSensor` on `BaseSensor`, `AntPlusBaseSensor`, `AntPlusScanner`, `AntPlusSensor`
-   Update the constructor of `GarminStick2` and `GarminStick3` from `constructor(dbgLevel = 0)` to `debugOptions: DebugOptions = {}`.

## Getting Started

Follow these steps to set up and use ant-plus-next:

### Step 1: Create USB Stick Instance

Create a new instance for the USB stick:

```javascript
import * as Ant from "ant-plus-next";
const stick = new Ant.GarminStick3();
```

### Step 2: Create Sensors

Create a sensor, such as a heart rate sensor:

```javascript
import * as Ant from "ant-plus-next";
const stick = new Ant.GarminStick3();
```

### Step 3: Attach Events

React to incoming sensor data:

```javascript
heartRateSensor.on("hbData", (data) => {
    console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
});

stick.on("startup", () => {
    heartRateSensor.attach(0, 0);
});
```

### Step 4: Open USB Stick

Attempt to open the USB stick:

```javascript
if (!stick.open()) {
    console.error("Stick not found!");
}
```

### Step 5: Scanning for Sensors

Scan for available sensors:

```javascript
heartRateSensor.on("hbData", (data) => {
    console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
});

stick.on("startup", () => {
    heartRateSensor.scan();
});

if (!stick.open()) {
    console.error("Stick not found!");
}
```

## Important Notes

-   Never attach a sensor before receiving the `startup` event.
-   Never attach a new sensor before receiving the `attached` or `detached` event of the previous sensor.
-   Never detach a sensor before receiving the `attached` or `detached` event of the previous sensor.

## API Documentation

### Stick Objects

#### GarminStick2 and GarminStick3

`GarminStick2` is the driver for ANT+ sticks with a USB product ID of `0x1008`.  
As well as the old Garmin USB2 ANT+ stick, this works with many of the common off-brand clones.

`GarminStick3` is the driver for the mini Garmin ANT+ stick, which has a USB product ID of `0x1009`.

##### Properties

-   **maxChannels**: The maximum number of channels that this stick supports; valid only after the `startup` event is fired.

##### Methods

-   **isPresent()**:  
    Checks if the stick is present.  
    **Returns:** `true` if it is, `false` otherwise.

-   **open()**:  
    Tries to open the stick.  
    **Returns:** `false` on failure.

-   **openAsync(callback)**:  
    Tries to open the stick, waiting for it if not available right now.  
    **Returns:** A cancellation token with a method `cancel()` to stop waiting.  
    **Parameters:**

    -   `callback`: A function accepting a single `Error` parameter. Called when the stick is open (with the parameter `undefined`) or in case of failure (with the parameter set to the error).

-   **close()**:  
    Closes the stick.

##### Events

-   **startup**:  
    Fired after the stick is correctly initialized.

-   **shutdown**:  
    Fired after the stick is properly closed.

### Common to All Sensors

##### Methods

-   **attach(channel, deviceId)**:  
    Attaches the sensor using the specified `channel` and `deviceId` (use `0` to connect to the first device found).

-   **detach()**:  
    Detaches the sensor.

##### Events

-   **attached**:  
    Fired after the sensor is correctly attached.

-   **detached**:  
    Fired after the sensor is correctly detached.

### Common to All Scanners

##### Methods

-   **scan()**:  
    Attaches the sensors and starts scanning for data from every device in range.

-   **detach()**:  
    Detaches the sensor.

##### Events

-   **attached**:  
    Fired after the sensor is correctly attached.

-   **detached**:  
    Fired after the sensor is correctly detached.

### Specific Sensors

#### HeartRate Sensor

##### Events

-   **hbData**:  
    Fired when new heartbeat data is received.

#### SpeedCadence Sensor

##### Methods

-   **setWheelCircumference(circumferenceInMeters)**:  
    Calibrates the speed sensor.  
    **Defaults to:** a wheel with a diameter of 70 cm (2.199 meters).

##### Events

-   **speedData**:  
    Fired when a new wheel speed is calculated.

-   **cadenceData**:  
    Fired when a new pedal cadence is calculated.

#### StrideSpeedDistance Sensor

##### Events

-   **ssdData**:  
    Fired when new stride, speed, or distance data has been calculated.

#### BicyclePower Sensor

##### Events

-   **powerData**:  
    Fired when new power data has been calculated.

#### FitnessEquipment Sensor

##### Events

-   **fitnessData**:  
    Fired when new data is received from the fitness equipment.

#### Environment Sensor

##### Events

-   **envData**:  
    Fired when new environmental data is received.  
    The `state.EventCount` value can be used to determine when a new measurement has been made by the sensor - its value will have been incremented.

## Examples

Refer to the [examples](/examples) folder for more comprehensive examples of using `ant-plus-next`.

### Example: Heart Rate Sensor

```javascript
import * as Ant from "ant-plus-next";
const stick = new Ant.GarminStick3();
const heartRateSensor = new Ant.HeartRateSensor(stick);

heartRateSensor.on("hbData", (data) => {
    console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
});

stick.on("startup", () => {
    heartRateSensor.attachSensor(0, 0);
});

if (!stick.open()) {
    console.error("Stick not found!");
}
```

## License and Acknowledgements

This project is licensed under the [MIT License](./LICENSE).

Parts of the code are based on the original project [ant-plus](https://github.com/Loghorn/ant-plus) by Alessandro Vergani (© 2015). The original project was also licensed under the MIT License.

### Thanks You!

Thanks to the original developers and all contributors!
