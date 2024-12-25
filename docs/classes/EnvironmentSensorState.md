[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / EnvironmentSensorState

# Class: EnvironmentSensorState

Represents the state of an Environment Sensor.
This class holds the data fields associated with the state of an environment sensor,
such as the event count and temperature.

## Extended by

- [`EnvironmentScanState`](EnvironmentScanState.md)

## Constructors

### new EnvironmentSensorState()

> **new EnvironmentSensorState**(`deviceId`): [`EnvironmentSensorState`](EnvironmentSensorState.md)

Creates an instance of the EnvironmentSensorState.

#### Parameters

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

[`EnvironmentSensorState`](EnvironmentSensorState.md)

#### Example

```ts
const sensorState = new EnvironmentSensorState(12345);
```

#### Defined in

[sensors/environment/environmentSensorState.ts:15](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/environment/environmentSensorState.ts#L15)

## Properties

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/environment/environmentSensorState.ts:23](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/environment/environmentSensorState.ts#L23)

***

### EventCount

> **EventCount**: `undefined` \| `number`

The event count recorded by the sensor.

#### Defined in

[sensors/environment/environmentSensorState.ts:29](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/environment/environmentSensorState.ts#L29)

***

### Temperature

> **Temperature**: `undefined` \| `number`

The temperature measured by the sensor, in degrees Celsius.

#### Defined in

[sensors/environment/environmentSensorState.ts:35](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/environment/environmentSensorState.ts#L35)
