# ant-plus-next

A modern Node.js module for working with ANT+ USB sticks and sensors.

## Table of Contents

- [About the Project](#about-the-project)
- [Prerequisites](#prerequisites)
  - [Linux](#linux)
  - [Windows](#windows)
  - [macOS](#macos)
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [Create USB Stick Instance](#create-usb-stick-instance)
  - [Create Sensors](#create-sensors)
  - [Attach Events](#attach-events)
  - [Open USB Stick](#open-usb-stick)
  - [Scanning for Sensors](#scanning-for-sensors)
- [Important Notes](#important-notes)
- [API Documentation](#api-documentation)
  - [Stick Objects](#stick-objects)
  - [Sensor Methods](#sensor-methods)
  - [Events](#events)
- [License and Acknowledgements](#license-and-acknowledgements)

## About the Project

This module provides a user-friendly API to communicate with ANT+ USB sticks and sensors. It is compatible with various operating systems and offers a straightforward way to capture heart rate, speed, cadence, power measurements, and more.

## Prerequisites

### Linux

Make sure `libusb` is installed. You can install `libusb` and other required packages using:

```sh
sudo apt-get install build-essential libudev-dev
```

### WIndows

Use [Zadig](http://sourceforge.net/projects/libwdi/files/zadig/) to install the WinUSB driver for your USB device. Otherwise, you will get `LIBUSB_ERROR_NOT_SUPPORTED` when attempting to open devices.

### macOS

When installing `ant-plus-next`, the required `libusb` will also be installed. Ensure that Garmin Express is not running, as it will attach to the ANT+ stick and prevent this module from accessing it.

## Installation

Install the module via npm:
```sh
npm install ant-plus-next
```

## Getting Started

### Create USB Stick Instance

Create a new instance for the USB stick:
```javascript
const Ant = require('ant-plus-next');
const stick = new Ant.GarminStick3();
```

### Create Sensors

Create a sensor, such as a heart rate sensor:
```javascript
const Ant = require('ant-plus-next');
const stick = new Ant.GarminStick3();
```

### Attach Events

React to incoming sensor data:

```javascript
heartRateSensor.on('hbData', (data) => {
    console.log(`Device ID: ${data.DeviceID}, Heart Rate: ${data.ComputedHeartRate}`);
});

stick.on('startup', () => {
    heartRateSensor.attach(0, 0);
});
```

### Open USB Stick

Attempt to open the USB stick:
```javascript
if (!stick.open()) {
    console.error('Stick not found!');
}
```

### Scanning for Sensors

Scan for available sensors:
```javascript
heartRateSensor.on('hbData', (data) => {
    console.log(`Device ID: ${data.DeviceID}, Heart Rate: ${data.ComputedHeartRate}`);
});

stick.on('startup', () => {
    heartRateSensor.scan();
});

if (!stick.open()) {
    console.error('Stick not found!');
}
```

## Important Notes

- Never attach a sensor before receiving the startup event.
- Never attach a new sensor before receiving the attached or detached event of the previous sensor.
- Never detach a sensor before receiving the attached or detached event of the previous sensor.

## API Documentation
### Stick Objects
#### GarminStick2 and GarminStick3

- **maxChannels**: The maximum number of channels this stick supports; valid only after the startup event is fired.

#### Methods:

- `is_present()`: Checks if the stick is present.
- `open()`: Attempts to open the stick.
- `close()`: Closes the stick.

#### Events:

- `startup`: Fired when the stick is properly initialized.
- `shutdown`: Fired when the stick is properly closed.

#### Sensor Methods

- `attach(channel, deviceId)`: Attaches the sensor using the specified channel and deviceId (use 0 to connect to the first device found).
- `detach()`: Detaches the sensor.

#### Events

- `attached`: Fired after the sensor is correctly attached.
- `detached`: Fired after the sensor is correctly detached.

For more details on events and methods, refer to the full API documentation.

## License and Acknowledgements

This project is licensed under the MIT License.

Parts of the code are based on the original project [ant-plus](https://github.com/Loghorn/ant-plus) by Alessandro Vergani (© 2015). The original project was also licensed under the MIT License.

Thanks to the original developers and all contributors!
