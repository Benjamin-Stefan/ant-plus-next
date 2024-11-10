[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / CadenceSensorState

# Class: CadenceSensorState

Represents the state of a Cadence Sensor.
This class holds the data fields associated with the state of a cadence sensor,
including event times, revolution counts, and device information.

## Extended by

- [`CadenceScanState`](CadenceScanState.md)

## Constructors

### new CadenceSensorState()

> **new CadenceSensorState**(`deviceId`): [`CadenceSensorState`](CadenceSensorState.md)

Creates an instance of the CadenceSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`CadenceSensorState`](CadenceSensorState.md)

#### Example

```ts
const sensorState = new CadenceSensorState(12345);
```

#### Defined in

[sensors/cadence/cadenceSensorState.ts:15](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L15)

## Properties

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be one of the following: "New", "Good", "Ok", "Low", "Critical", "Invalid".

#### Defined in

[sensors/cadence/cadenceSensorState.ts:90](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L90)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:95](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L95)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:83](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L83)

***

### CadenceEventTime

> **CadenceEventTime**: `undefined` \| `number`

The time of the last cadence event, in seconds.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:29](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L29)

***

### CalculatedCadence

> **CalculatedCadence**: `undefined` \| `number`

The calculated cadence in revolutions per minute (RPM).

#### Defined in

[sensors/cadence/cadenceSensorState.ts:41](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L41)

***

### CumulativeCadenceRevolutionCount

> **CumulativeCadenceRevolutionCount**: `undefined` \| `number`

The cumulative number of cadence revolutions counted by the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:35](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L35)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:23](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L23)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:65](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L65)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:53](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L53)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:77](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L77)

***

### Motion?

> `optional` **Motion**: `boolean`

Indicates whether the sensor is in motion.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:101](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L101)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:47](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L47)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:59](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L59)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Defined in

[sensors/cadence/cadenceSensorState.ts:71](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L71)
