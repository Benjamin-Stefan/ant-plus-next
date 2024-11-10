[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / HeartRateScanState

# Class: HeartRateScanState

Represents the state of a Heart Rate sensor during scanning.
Extends the HeartRateSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and signal threshold.

## Extends

- [`HeartRateSensorState`](HeartRateSensorState.md)

## Constructors

### new HeartRateScanState()

> **new HeartRateScanState**(`deviceId`): [`HeartRateScanState`](HeartRateScanState.md)

Creates an instance of the HeartRateSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`HeartRateScanState`](HeartRateScanState.md)

#### Example

```ts
const sensorState = new HeartRateSensorState(12345);
```

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`constructor`](HeartRateSensorState.md#constructors)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L14)

## Properties

### BatteryLevel?

> `optional` **BatteryLevel**: `number`

The battery level of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`BatteryLevel`](HeartRateSensorState.md#batterylevel)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:118](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L118)

***

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be "New", "Good", "Ok", "Low", "Critical", or "Invalid".

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`BatteryStatus`](HeartRateSensorState.md#batterystatus)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:131](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L131)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`BatteryStatusBit`](HeartRateSensorState.md#batterystatusbit)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:136](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L136)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`BatteryVoltage`](HeartRateSensorState.md#batteryvoltage)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:124](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L124)

***

### BeatCount

> **BeatCount**: `undefined` \| `number`

The cumulative count of beat events since the sensor started.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`BeatCount`](HeartRateSensorState.md#beatcount)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L34)

***

### BeatTime

> **BeatTime**: `undefined` \| `number`

The time of the last beat event in milliseconds.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`BeatTime`](HeartRateSensorState.md#beattime)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L28)

***

### ComputedHeartRate

> **ComputedHeartRate**: `undefined` \| `number`

The computed heart rate in beats per minute (BPM).

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`ComputedHeartRate`](HeartRateSensorState.md#computedheartrate)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L40)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`DeviceId`](HeartRateSensorState.md#deviceid)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L22)

***

### EnabledFeatures?

> `optional` **EnabledFeatures**: `number`

The enabled features of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`EnabledFeatures`](HeartRateSensorState.md#enabledfeatures)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:112](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L112)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`HwVersion`](HeartRateSensorState.md#hwversion)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L64)

***

### IntervalAverage?

> `optional` **IntervalAverage**: `number`

The average heart rate over a certain interval.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`IntervalAverage`](HeartRateSensorState.md#intervalaverage)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:88](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L88)

***

### IntervalMax?

> `optional` **IntervalMax**: `number`

The maximum heart rate over a certain interval.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`IntervalMax`](HeartRateSensorState.md#intervalmax)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:94](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L94)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`ManId`](HeartRateSensorState.md#manid)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L52)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`ModelNum`](HeartRateSensorState.md#modelnum)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:76](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L76)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`OperatingTime`](HeartRateSensorState.md#operatingtime)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L46)

***

### PreviousBeat?

> `optional` **PreviousBeat**: `number`

The time of the previous beat measurement.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`PreviousBeat`](HeartRateSensorState.md#previousbeat)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L82)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.

#### Defined in

[sensors/heartRate/heartRateScanState.ts:13](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateScanState.ts#L13)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`SerialNumber`](HeartRateSensorState.md#serialnumber)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L58)

***

### SessionAverage?

> `optional` **SessionAverage**: `number`

The average heart rate over the current session.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`SessionAverage`](HeartRateSensorState.md#sessionaverage)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:100](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L100)

***

### SupportedFeatures?

> `optional` **SupportedFeatures**: `number`

The supported features of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`SupportedFeatures`](HeartRateSensorState.md#supportedfeatures)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:106](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L106)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Inherited from

[`HeartRateSensorState`](HeartRateSensorState.md).[`SwVersion`](HeartRateSensorState.md#swversion)

#### Defined in

[sensors/heartRate/heartRateSensorState.ts:70](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateSensorState.ts#L70)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value for the sensor.

#### Defined in

[sensors/heartRate/heartRateScanState.ts:19](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/heartRate/heartRateScanState.ts#L19)
