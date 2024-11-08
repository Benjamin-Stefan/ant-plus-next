[**ant-plus-next v0.3.0**](../README.md) • **Docs**

***

[ant-plus-next v0.3.0](../README.md) / EnvironmentScanState

# Class: EnvironmentScanState

Represents the state of an Environment Sensor during scanning.
Extends the EnvironmentSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and signal threshold.

## Extends

- [`EnvironmentSensorState`](EnvironmentSensorState.md)

## Constructors

### new EnvironmentScanState()

> **new EnvironmentScanState**(`deviceId`): [`EnvironmentScanState`](EnvironmentScanState.md)

Creates an instance of the EnvironmentSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`EnvironmentScanState`](EnvironmentScanState.md)

#### Example

```ts
const sensorState = new EnvironmentSensorState(12345);
```

#### Inherited from

[`EnvironmentSensorState`](EnvironmentSensorState.md).[`constructor`](EnvironmentSensorState.md#constructors)

#### Defined in

[sensors/environment/environmentSensorState.ts:15](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/environment/environmentSensorState.ts#L15)

## Properties

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`EnvironmentSensorState`](EnvironmentSensorState.md).[`DeviceId`](EnvironmentSensorState.md#deviceid)

#### Defined in

[sensors/environment/environmentSensorState.ts:23](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/environment/environmentSensorState.ts#L23)

***

### EventCount

> **EventCount**: `undefined` \| `number`

The event count recorded by the sensor.

#### Inherited from

[`EnvironmentSensorState`](EnvironmentSensorState.md).[`EventCount`](EnvironmentSensorState.md#eventcount)

#### Defined in

[sensors/environment/environmentSensorState.ts:29](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/environment/environmentSensorState.ts#L29)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.
Indicates the strength of the received signal from the environment sensor.

#### Defined in

[sensors/environment/environmentScanState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/environment/environmentScanState.ts#L14)

***

### Temperature

> **Temperature**: `undefined` \| `number`

The temperature measured by the sensor, in degrees Celsius.

#### Inherited from

[`EnvironmentSensorState`](EnvironmentSensorState.md).[`Temperature`](EnvironmentSensorState.md#temperature)

#### Defined in

[sensors/environment/environmentSensorState.ts:35](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/environment/environmentSensorState.ts#L35)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value for the sensor.
Represents the minimum signal strength required for a reliable connection.

#### Defined in

[sensors/environment/environmentScanState.ts:21](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/environment/environmentScanState.ts#L21)
