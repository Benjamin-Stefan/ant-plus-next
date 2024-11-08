[**ant-plus-next v0.3.0**](../README.md) • **Docs**

***

[ant-plus-next v0.3.0](../README.md) / SpeedScanState

# Class: SpeedScanState

Represents the state of a Speed sensor during scanning.
Extends the SpeedSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and signal threshold.

## Extends

- [`SpeedSensorState`](SpeedSensorState.md)

## Constructors

### new SpeedScanState()

> **new SpeedScanState**(`deviceId`): [`SpeedScanState`](SpeedScanState.md)

Creates an instance of the SpeedSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`SpeedScanState`](SpeedScanState.md)

#### Example

```ts
const sensorState = new SpeedSensorState(12345);
```

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`constructor`](SpeedSensorState.md#constructors)

#### Defined in

[sensors/speed/speedSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L14)

## Properties

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be "New", "Good", "Ok", "Low", "Critical", or "Invalid".

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`BatteryStatus`](SpeedSensorState.md#batterystatus)

#### Defined in

[sensors/speed/speedSensorState.ts:95](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L95)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`BatteryStatusBit`](SpeedSensorState.md#batterystatusbit)

#### Defined in

[sensors/speed/speedSensorState.ts:100](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L100)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`BatteryVoltage`](SpeedSensorState.md#batteryvoltage)

#### Defined in

[sensors/speed/speedSensorState.ts:88](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L88)

***

### CalculatedDistance

> **CalculatedDistance**: `undefined` \| `number`

The calculated distance traveled in meters.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`CalculatedDistance`](SpeedSensorState.md#calculateddistance)

#### Defined in

[sensors/speed/speedSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L40)

***

### CalculatedSpeed

> **CalculatedSpeed**: `undefined` \| `number`

The calculated speed in meters per second (m/s).

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`CalculatedSpeed`](SpeedSensorState.md#calculatedspeed)

#### Defined in

[sensors/speed/speedSensorState.ts:46](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L46)

***

### CumulativeSpeedRevolutionCount

> **CumulativeSpeedRevolutionCount**: `undefined` \| `number`

The cumulative count of speed revolutions since the sensor started.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`CumulativeSpeedRevolutionCount`](SpeedSensorState.md#cumulativespeedrevolutioncount)

#### Defined in

[sensors/speed/speedSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L34)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`DeviceId`](SpeedSensorState.md#deviceid)

#### Defined in

[sensors/speed/speedSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L22)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`HwVersion`](SpeedSensorState.md#hwversion)

#### Defined in

[sensors/speed/speedSensorState.ts:70](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L70)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`ManId`](SpeedSensorState.md#manid)

#### Defined in

[sensors/speed/speedSensorState.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L58)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`ModelNum`](SpeedSensorState.md#modelnum)

#### Defined in

[sensors/speed/speedSensorState.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L82)

***

### Motion?

> `optional` **Motion**: `boolean`

Indicates whether the sensor detects motion.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`Motion`](SpeedSensorState.md#motion)

#### Defined in

[sensors/speed/speedSensorState.ts:106](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L106)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`OperatingTime`](SpeedSensorState.md#operatingtime)

#### Defined in

[sensors/speed/speedSensorState.ts:52](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L52)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.

#### Defined in

[sensors/speed/speedScanState.ts:13](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedScanState.ts#L13)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`SerialNumber`](SpeedSensorState.md#serialnumber)

#### Defined in

[sensors/speed/speedSensorState.ts:64](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L64)

***

### SpeedEventTime

> **SpeedEventTime**: `undefined` \| `number`

The time of the last speed event in seconds, measured as a fractional part.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`SpeedEventTime`](SpeedSensorState.md#speedeventtime)

#### Defined in

[sensors/speed/speedSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L28)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Inherited from

[`SpeedSensorState`](SpeedSensorState.md).[`SwVersion`](SpeedSensorState.md#swversion)

#### Defined in

[sensors/speed/speedSensorState.ts:76](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedSensorState.ts#L76)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value for the sensor.

#### Defined in

[sensors/speed/speedScanState.ts:19](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/speed/speedScanState.ts#L19)
