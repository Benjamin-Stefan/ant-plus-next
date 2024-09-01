# ant-plus-next

A modern Node.js module for working with ANT+ USB sticks and sensors.

## Table of Contents

-   [About the Project](#about-the-project)
-   [Prerequisites](#prerequisites)
    -   [Linux](#linux)
    -   [Windows](#windows)
    -   [macOS](#macos)
-   [Installation](#installation)
-   [Migration from ant-plus](#migration-from-ant-plus)
-   [Getting Started](#getting-started)
    -   [Create USB Stick Instance](#create-usb-stick-instance)
    -   [Create Sensors](#create-sensors)
    -   [Attach Events](#attach-events)
    -   [Open USB Stick](#open-usb-stick)
    -   [Scanning for Sensors](#scanning-for-sensors)
-   [Important Notes](#important-notes)
-   [API Documentation](#api-documentation)
    -   [Stick Objects](#stick-objects)
        -   [GarminStick2 and GarminStick3](#garminstick2-and-garminstick3)
        -   [Properties](#properties)
        -   [Methods](#methods)
        -   [Events](#events)
    -   [Common to All Sensors](#common-to-all-sensors)
        -   [Methods](#methods-1)
        -   [Events](#events-1)
    -   [Common to All Scanners](#common-to-all-scanners)
        -   [Methods](#methods-2)
        -   [Events](#events-2)
    -   [Specific Sensors](#specific-sensors)
        -   [HeartRate Sensor](#heartrate-sensor)
        -   [SpeedCadence Sensor](#speedcadence-sensor)
        -   [StrideSpeedDistance Sensor](#stridespeeddistance-sensor)
        -   [BicyclePower Sensor](#bicyclepower-sensor)
        -   [FitnessEquipment Sensor](#fitnessequipment-sensor)
        -   [Environment Sensor](#environment-sensor)
-   [Examples](#examples)
-   [License and Acknowledgements](#license-and-acknowledgements)

## About the Project

This module provides a user-friendly API to communicate with ANT+ USB sticks and sensors. It is compatible with various operating systems and offers a straightforward way to capture heart rate, speed, cadence, power measurements, and more.

## Prerequisites

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
-   Change Contructor of `GarminStick2` and `GarminStick2` from `constructor(dbgLevel = 0)` to `debugOptions: DebugOptions = {}`

## Getting Started

### Create USB Stick Instance

Create a new instance for the USB stick:

```javascript
const Ant = require("ant-plus-next");
const stick = new Ant.GarminStick3();
```

### Create Sensors

Create a sensor, such as a heart rate sensor:

```javascript
const Ant = require("ant-plus-next");
const stick = new Ant.GarminStick3();
```

### Attach Events

React to incoming sensor data:

```javascript
heartRateSensor.on("hbData", data => {
    console.log(`Device Id: ${data.DeviceId}, Heart Rate: ${data.ComputedHeartRate}`);
});

stick.on("startup", () => {
    heartRateSensor.attach(0, 0);
});
```

### Open USB Stick

Attempt to open the USB stick:

```javascript
if (!stick.open()) {
    console.error("Stick not found!");
}
```

### Scanning for Sensors

Scan for available sensors:

```javascript
heartRateSensor.on("hbData", data => {
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

-   Never attach a sensor before receiving the startup event.
-   Never attach a new sensor before receiving the attached or detached event of the previous sensor.
-   Never detach a sensor before receiving the attached or detached event of the previous sensor.

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
const Ant = require("ant-plus-next");
const stick = new Ant.GarminStick3();
const heartRateSensor = new Ant.HeartRateSensor(stick);

heartRateSensor.on("hbData", data => {
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

This project is licensed under the MIT License.

Parts of the code are based on the original project [ant-plus](https://github.com/Loghorn/ant-plus) by Alessandro Vergani (© 2015). The original project was also licensed under the MIT License.

Thanks to the original developers and all contributors!
