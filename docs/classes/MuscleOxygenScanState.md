[**ant-plus-next v0.3.0**](../README.md) • **Docs**

***

[ant-plus-next v0.3.0](../README.md) / MuscleOxygenScanState

# Class: MuscleOxygenScanState

Represents the state of a Muscle Oxygen sensor during scanning.
Extends the MuscleOxygenSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and signal threshold.

## Extends

- [`MuscleOxygenSensorState`](MuscleOxygenSensorState.md)

## Constructors

### new MuscleOxygenScanState()

> **new MuscleOxygenScanState**(`deviceId`): [`MuscleOxygenScanState`](MuscleOxygenScanState.md)

Creates an instance of the MuscleOxygenSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`MuscleOxygenScanState`](MuscleOxygenScanState.md)

#### Example

```ts
const sensorState = new MuscleOxygenSensorState(12345);
```

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`constructor`](MuscleOxygenSensorState.md#constructors)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L14)

## Properties

### \_EventCount?

> `optional` **\_EventCount**: `number`

The count of events detected by the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`_EventCount`](MuscleOxygenSensorState.md#_eventcount)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L22)

***

### BatteryStatus?

> `optional` **BatteryStatus**: `"New"` \| `"Good"` \| `"Ok"` \| `"Low"` \| `"Critical"` \| `"Invalid"`

The battery status of the sensor.
Can be "New", "Good", "Ok", "Low", "Critical", or "Invalid".

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`BatteryStatus`](MuscleOxygenSensorState.md#batterystatus)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:117](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L117)

***

### BatteryStatusBit?

> `optional` **BatteryStatusBit**: `number`

The battery status bit of the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`BatteryStatusBit`](MuscleOxygenSensorState.md#batterystatusbit)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:122](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L122)

***

### BatteryVoltage?

> `optional` **BatteryVoltage**: `number`

The battery voltage of the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`BatteryVoltage`](MuscleOxygenSensorState.md#batteryvoltage)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:110](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L110)

***

### CurrentSaturatedHemoglobinPercentage?

> `optional` **CurrentSaturatedHemoglobinPercentage**: `number` \| `"Invalid"` \| `"AmbientLightTooHigh"`

The percentage of saturated hemoglobin from the current measurement.
Can be a numeric value, "AmbientLightTooHigh", or "Invalid".

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`CurrentSaturatedHemoglobinPercentage`](MuscleOxygenSensorState.md#currentsaturatedhemoglobinpercentage)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:68](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L68)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`DeviceId`](MuscleOxygenSensorState.md#deviceid)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:28](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L28)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`HwVersion`](MuscleOxygenSensorState.md#hwversion)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:74](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L74)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`ManId`](MuscleOxygenSensorState.md#manid)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:80](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L80)

***

### MeasurementInterval?

> `optional` **MeasurementInterval**: `1` \| `2` \| `0.5` \| `0.25`

The measurement interval in seconds.
Possible values: 0.25, 0.5, 1, or 2 seconds.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`MeasurementInterval`](MuscleOxygenSensorState.md#measurementinterval)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:47](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L47)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`ModelNum`](MuscleOxygenSensorState.md#modelnum)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:86](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L86)

***

### OperatingTime?

> `optional` **OperatingTime**: `number`

The cumulative operating time of the sensor in seconds.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`OperatingTime`](MuscleOxygenSensorState.md#operatingtime)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:104](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L104)

***

### PreviousSaturatedHemoglobinPercentage?

> `optional` **PreviousSaturatedHemoglobinPercentage**: `number` \| `"Invalid"` \| `"AmbientLightTooHigh"`

The percentage of saturated hemoglobin from the previous measurement.
Can be a numeric value, "AmbientLightTooHigh", or "Invalid".

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`PreviousSaturatedHemoglobinPercentage`](MuscleOxygenSensorState.md#previoussaturatedhemoglobinpercentage)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:61](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L61)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.

#### Defined in

[sensors/muscleOxygen/muscleOxygenScanState.ts:13](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenScanState.ts#L13)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`SerialNumber`](MuscleOxygenSensorState.md#serialnumber)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:98](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L98)

***

### SupportANTFS?

> `optional` **SupportANTFS**: `boolean`

Indicates whether ANT-FS is supported by the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`SupportANTFS`](MuscleOxygenSensorState.md#supportantfs)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:40](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L40)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`SwVersion`](MuscleOxygenSensorState.md#swversion)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:92](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L92)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value for the sensor.

#### Defined in

[sensors/muscleOxygen/muscleOxygenScanState.ts:19](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenScanState.ts#L19)

***

### TotalHemoglobinConcentration?

> `optional` **TotalHemoglobinConcentration**: `number` \| `"Invalid"` \| `"AmbientLightTooHigh"`

The total hemoglobin concentration.
Can be a numeric value, "AmbientLightTooHigh", or "Invalid".

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`TotalHemoglobinConcentration`](MuscleOxygenSensorState.md#totalhemoglobinconcentration)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:54](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L54)

***

### UTCTimeRequired?

> `optional` **UTCTimeRequired**: `boolean`

Indicates whether UTC time is required by the sensor.

#### Inherited from

[`MuscleOxygenSensorState`](MuscleOxygenSensorState.md).[`UTCTimeRequired`](MuscleOxygenSensorState.md#utctimerequired)

#### Defined in

[sensors/muscleOxygen/muscleOxygenSensorState.ts:34](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/muscleOxygen/muscleOxygenSensorState.ts#L34)
