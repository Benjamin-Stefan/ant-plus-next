[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / CadenceScanState

# Class: CadenceScanState

Represents the state of a Cadence Sensor during scanning.
Extends the CadenceSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and signal threshold.

## Extends

- [`CadenceSensorState`](CadenceSensorState.md)

## Constructors

### new CadenceScanState()

> **new CadenceScanState**(`deviceId`): [`CadenceScanState`](CadenceScanState.md)

Creates an instance of the CadenceSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`CadenceScanState`](CadenceScanState.md)

#### Example

```ts
const sensorState = new CadenceSensorState(12345);
```

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`constructor`](CadenceSensorState.md#constructors)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:15](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L15)

## Properties

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be one of the following: "New", "Good", "Ok", "Low", "Critical", "Invalid".

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`BatteryStatus`](CadenceSensorState.md#batterystatus)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:90](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L90)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`BatteryStatusBit`](CadenceSensorState.md#batterystatusbit)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:95](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L95)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`BatteryVoltage`](CadenceSensorState.md#batteryvoltage)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:83](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L83)

***

### CadenceEventTime

> **CadenceEventTime**: `undefined` \| `number`

The time of the last cadence event, in seconds.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`CadenceEventTime`](CadenceSensorState.md#cadenceeventtime)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:29](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L29)

***

### CalculatedCadence

> **CalculatedCadence**: `undefined` \| `number`

The calculated cadence in revolutions per minute (RPM).

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`CalculatedCadence`](CadenceSensorState.md#calculatedcadence)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:41](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L41)

***

### CumulativeCadenceRevolutionCount

> **CumulativeCadenceRevolutionCount**: `undefined` \| `number`

The cumulative number of cadence revolutions counted by the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`CumulativeCadenceRevolutionCount`](CadenceSensorState.md#cumulativecadencerevolutioncount)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:35](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L35)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`DeviceId`](CadenceSensorState.md#deviceid)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:23](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L23)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`HwVersion`](CadenceSensorState.md#hwversion)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:65](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L65)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`ManId`](CadenceSensorState.md#manid)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:53](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L53)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`ModelNum`](CadenceSensorState.md#modelnum)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:77](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L77)

***

### Motion?

> `optional` **Motion**: `boolean`

Indicates whether the sensor is in motion.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`Motion`](CadenceSensorState.md#motion)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:101](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L101)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`OperatingTime`](CadenceSensorState.md#operatingtime)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:47](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L47)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.
Indicates the strength of the received signal from the cadence sensor.

#### Defined in

[sensors/cadence/cadenceScanState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceScanState.ts#L14)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`SerialNumber`](CadenceSensorState.md#serialnumber)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:59](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L59)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Inherited from

[`CadenceSensorState`](CadenceSensorState.md).[`SwVersion`](CadenceSensorState.md#swversion)

#### Defined in

[sensors/cadence/cadenceSensorState.ts:71](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceSensorState.ts#L71)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value for the sensor.
Represents the minimum signal strength required for a reliable connection.

#### Defined in

[sensors/cadence/cadenceScanState.ts:21](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/cadence/cadenceScanState.ts#L21)
