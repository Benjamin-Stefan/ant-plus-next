[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / FitnessEquipmentScanState

# Class: FitnessEquipmentScanState

Represents the state of a Fitness Equipment sensor during scanning.
Extends the FitnessEquipmentSensorState to include additional fields specific to scanning,
such as RSSI (Received Signal Strength Indicator) and signal threshold.

## Extends

- [`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md)

## Constructors

### new FitnessEquipmentScanState()

> **new FitnessEquipmentScanState**(`deviceId`): [`FitnessEquipmentScanState`](FitnessEquipmentScanState.md)

Creates an instance of the FitnessEquipmentSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`FitnessEquipmentScanState`](FitnessEquipmentScanState.md)

#### Example

```ts
const sensorState = new FitnessEquipmentSensorState(12345);
```

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`constructor`](FitnessEquipmentSensorState.md#constructors)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L16)

## Properties

### \_EventCount0x19?

> `optional` **\_EventCount0x19**: `number`

The event count for page 0x19.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`_EventCount0x19`](FitnessEquipmentSensorState.md#_eventcount0x19)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:24](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L24)

***

### \_EventCount0x1A?

> `optional` **\_EventCount0x1A**: `number`

The event count for page 0x1A.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`_EventCount0x1A`](FitnessEquipmentSensorState.md#_eventcount0x1a)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:30](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L30)

***

### AccumulatedPower?

> `optional` **AccumulatedPower**: `number`

The total accumulated power output, in watts.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`AccumulatedPower`](FitnessEquipmentSensorState.md#accumulatedpower)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:177](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L177)

***

### AscendedDistance?

> `optional` **AscendedDistance**: `number`

The distance ascended, in meters.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`AscendedDistance`](FitnessEquipmentSensorState.md#ascendeddistance)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:147](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L147)

***

### AveragePower?

> `optional` **AveragePower**: `number`

The average power output, in watts.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`AveragePower`](FitnessEquipmentSensorState.md#averagepower)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:189](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L189)

***

### Cadence?

> `optional` **Cadence**: `number`

The current cadence, in revolutions per minute (RPM).

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Cadence`](FitnessEquipmentSensorState.md#cadence)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:171](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L171)

***

### CaloricBurnRate?

> `optional` **CaloricBurnRate**: `number`

The caloric burn rate, in kilocalories per hour.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`CaloricBurnRate`](FitnessEquipmentSensorState.md#caloricburnrate)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:135](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L135)

***

### Calories?

> `optional` **Calories**: `number`

The total calories burned.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Calories`](FitnessEquipmentSensorState.md#calories)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:141](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L141)

***

### CycleLength?

> `optional` **CycleLength**: `number`

The cycle length of the equipment, in meters.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`CycleLength`](FitnessEquipmentSensorState.md#cyclelength)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:111](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L111)

***

### DescendedDistance?

> `optional` **DescendedDistance**: `number`

The distance descended, in meters.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`DescendedDistance`](FitnessEquipmentSensorState.md#descendeddistance)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:153](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L153)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`DeviceId`](FitnessEquipmentSensorState.md#deviceid)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:36](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L36)

***

### Distance?

> `optional` **Distance**: `number`

The total distance traveled, in meters.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Distance`](FitnessEquipmentSensorState.md#distance)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:73](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L73)

***

### ElapsedTime?

> `optional` **ElapsedTime**: `number`

The total elapsed time, in seconds.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`ElapsedTime`](FitnessEquipmentSensorState.md#elapsedtime)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:67](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L67)

***

### EquipmentType?

> `optional` **EquipmentType**: `"Treadmill"` \| `"Elliptical"` \| `"Reserved"` \| `"Rower"` \| `"Climber"` \| `"NordicSkier"` \| `"Trainer/StationaryBike"` \| `"General"`

The type of fitness equipment.
Can be "Treadmill", "Elliptical", "Reserved", "Rower", "Climber", "NordicSkier", "Trainer/StationaryBike", or "General".

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`EquipmentType`](FitnessEquipmentSensorState.md#equipmenttype)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:61](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L61)

***

### HeartRate?

> `optional` **HeartRate**: `number`

The current heart rate, in beats per minute (BPM).

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`HeartRate`](FitnessEquipmentSensorState.md#heartrate)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:91](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L91)

***

### HeartRateSource?

> `optional` **HeartRateSource**: `"HandContact"` \| `"EM"` \| `"ANT+"`

The source of the heart rate data.
Can be "HandContact", "EM", or "ANT+".

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`HeartRateSource`](FitnessEquipmentSensorState.md#heartratesource)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:98](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L98)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`HwVersion`](FitnessEquipmentSensorState.md#hwversion)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:226](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L226)

***

### Incline?

> `optional` **Incline**: `number`

The incline of the equipment, in percentage.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Incline`](FitnessEquipmentSensorState.md#incline)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:117](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L117)

***

### InstantaneousPower?

> `optional` **InstantaneousPower**: `number`

The instantaneous power output, in watts.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`InstantaneousPower`](FitnessEquipmentSensorState.md#instantaneouspower)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:183](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L183)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`ManId`](FitnessEquipmentSensorState.md#manid)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:232](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L232)

***

### METs?

> `optional` **METs**: `number`

The metabolic equivalent (MET) value.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`METs`](FitnessEquipmentSensorState.md#mets)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:129](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L129)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`ModelNum`](FitnessEquipmentSensorState.md#modelnum)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:238](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L238)

***

### PairedDevices

> **PairedDevices**: [`PairedDevice`](../type-aliases/PairedDevice.md)[] = `[]`

The list of paired devices associated with the sensor.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`PairedDevices`](FitnessEquipmentSensorState.md#paireddevices)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:256](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L256)

***

### RealSpeed?

> `optional` **RealSpeed**: `number`

The real speed of the equipment, in meters per second.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`RealSpeed`](FitnessEquipmentSensorState.md#realspeed)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:79](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L79)

***

### Resistance?

> `optional` **Resistance**: `number`

The resistance level of the equipment.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Resistance`](FitnessEquipmentSensorState.md#resistance)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:123](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L123)

***

### Rssi

> **Rssi**: `undefined` \| `number`

The received signal strength indicator (RSSI) of the sensor signal.
Indicates the strength of the received signal from the fitness equipment sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentScanState.ts:14](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentScanState.ts#L14)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`SerialNumber`](FitnessEquipmentSensorState.md#serialnumber)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:250](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L250)

***

### SpinDownTime?

> `optional` **SpinDownTime**: `number`

The spin-down time for the sensor, in seconds.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`SpinDownTime`](FitnessEquipmentSensorState.md#spindowntime)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:54](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L54)

***

### State?

> `optional` **State**: `"OFF"` \| `"READY"` \| `"IN_USE"` \| `"FINISHED"`

The state of the equipment.
Can be "OFF", "READY", "IN_USE", or "FINISHED".

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`State`](FitnessEquipmentSensorState.md#state)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:105](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L105)

***

### Strides?

> `optional` **Strides**: `number`

The total number of strides taken.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Strides`](FitnessEquipmentSensorState.md#strides)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:159](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L159)

***

### Strokes?

> `optional` **Strokes**: `number`

The total number of strokes taken.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Strokes`](FitnessEquipmentSensorState.md#strokes)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:165](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L165)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`SwVersion`](FitnessEquipmentSensorState.md#swversion)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:244](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L244)

***

### TargetStatus?

> `optional` **TargetStatus**: `"OnTarget"` \| `"LowSpeed"` \| `"HighSpeed"`

The target status of the equipment.
Can be "OnTarget", "LowSpeed", or "HighSpeed".

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`TargetStatus`](FitnessEquipmentSensorState.md#targetstatus)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:202](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L202)

***

### Temperature?

> `optional` **Temperature**: `number`

The temperature measured by the sensor, in degrees Celsius.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Temperature`](FitnessEquipmentSensorState.md#temperature)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:42](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L42)

***

### Threshold

> **Threshold**: `undefined` \| `number`

The signal threshold value for the sensor.
Represents the minimum signal strength required for a reliable connection.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentScanState.ts:21](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentScanState.ts#L21)

***

### Torque?

> `optional` **Torque**: `number`

The torque value, in newton-meters.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`Torque`](FitnessEquipmentSensorState.md#torque)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:220](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L220)

***

### TrainerStatus?

> `optional` **TrainerStatus**: `number`

The trainer status, typically indicating the current mode or condition of the trainer.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`TrainerStatus`](FitnessEquipmentSensorState.md#trainerstatus)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:195](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L195)

***

### VirtualSpeed?

> `optional` **VirtualSpeed**: `number`

The virtual speed of the equipment, in meters per second.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`VirtualSpeed`](FitnessEquipmentSensorState.md#virtualspeed)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:85](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L85)

***

### WheelPeriod?

> `optional` **WheelPeriod**: `number`

The wheel period, in seconds.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`WheelPeriod`](FitnessEquipmentSensorState.md#wheelperiod)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:214](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L214)

***

### WheelTicks?

> `optional` **WheelTicks**: `number`

The total number of wheel ticks.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`WheelTicks`](FitnessEquipmentSensorState.md#wheelticks)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:208](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L208)

***

### ZeroOffset?

> `optional` **ZeroOffset**: `number`

The zero offset calibration value for the sensor.

#### Inherited from

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md).[`ZeroOffset`](FitnessEquipmentSensorState.md#zerooffset)

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:48](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L48)
