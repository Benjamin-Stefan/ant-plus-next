[**ant-plus-next v0.3.0**](../README.md) • **Docs**

***

[ant-plus-next v0.3.0](../README.md) / FitnessEquipmentSensorState

# Class: FitnessEquipmentSensorState

Represents the state of a Fitness Equipment sensor.
This class holds the data fields associated with the state of a fitness equipment sensor,
including metrics such as heart rate, speed, distance, power, and more.

## Extended by

- [`FitnessEquipmentScanState`](FitnessEquipmentScanState.md)

## Constructors

### new FitnessEquipmentSensorState()

> **new FitnessEquipmentSensorState**(`deviceId`): [`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md)

Creates an instance of the FitnessEquipmentSensorState.

#### Parameters

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

[`FitnessEquipmentSensorState`](FitnessEquipmentSensorState.md)

#### Example

```ts
const sensorState = new FitnessEquipmentSensorState(12345);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L16)

## Properties

### \_EventCount0x19?

> `optional` **\_EventCount0x19**: `number`

The event count for page 0x19.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:24](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L24)

***

### \_EventCount0x1A?

> `optional` **\_EventCount0x1A**: `number`

The event count for page 0x1A.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:30](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L30)

***

### AccumulatedPower?

> `optional` **AccumulatedPower**: `number`

The total accumulated power output, in watts.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:177](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L177)

***

### AscendedDistance?

> `optional` **AscendedDistance**: `number`

The distance ascended, in meters.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:147](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L147)

***

### AveragePower?

> `optional` **AveragePower**: `number`

The average power output, in watts.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:189](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L189)

***

### Cadence?

> `optional` **Cadence**: `number`

The current cadence, in revolutions per minute (RPM).

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:171](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L171)

***

### CaloricBurnRate?

> `optional` **CaloricBurnRate**: `number`

The caloric burn rate, in kilocalories per hour.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:135](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L135)

***

### Calories?

> `optional` **Calories**: `number`

The total calories burned.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:141](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L141)

***

### CycleLength?

> `optional` **CycleLength**: `number`

The cycle length of the equipment, in meters.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:111](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L111)

***

### DescendedDistance?

> `optional` **DescendedDistance**: `number`

The distance descended, in meters.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:153](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L153)

***

### DeviceId

> **DeviceId**: `number`

The unique identifier of the sensor device.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:36](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L36)

***

### Distance?

> `optional` **Distance**: `number`

The total distance traveled, in meters.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:73](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L73)

***

### ElapsedTime?

> `optional` **ElapsedTime**: `number`

The total elapsed time, in seconds.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:67](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L67)

***

### EquipmentType?

> `optional` **EquipmentType**: `"Treadmill"` \| `"Elliptical"` \| `"Reserved"` \| `"Rower"` \| `"Climber"` \| `"NordicSkier"` \| `"Trainer/StationaryBike"` \| `"General"`

The type of fitness equipment.
Can be "Treadmill", "Elliptical", "Reserved", "Rower", "Climber", "NordicSkier", "Trainer/StationaryBike", or "General".

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:61](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L61)

***

### HeartRate?

> `optional` **HeartRate**: `number`

The current heart rate, in beats per minute (BPM).

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:91](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L91)

***

### HeartRateSource?

> `optional` **HeartRateSource**: `"HandContact"` \| `"EM"` \| `"ANT+"`

The source of the heart rate data.
Can be "HandContact", "EM", or "ANT+".

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:98](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L98)

***

### HwVersion?

> `optional` **HwVersion**: `number`

The hardware version of the sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:226](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L226)

***

### Incline?

> `optional` **Incline**: `number`

The incline of the equipment, in percentage.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:117](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L117)

***

### InstantaneousPower?

> `optional` **InstantaneousPower**: `number`

The instantaneous power output, in watts.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:183](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L183)

***

### ManId?

> `optional` **ManId**: `number`

The manufacturer ID of the sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:232](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L232)

***

### METs?

> `optional` **METs**: `number`

The metabolic equivalent (MET) value.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:129](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L129)

***

### ModelNum?

> `optional` **ModelNum**: `number`

The model number of the sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:238](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L238)

***

### PairedDevices

> **PairedDevices**: `PairedDevice`[] = `[]`

The list of paired devices associated with the sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:256](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L256)

***

### RealSpeed?

> `optional` **RealSpeed**: `number`

The real speed of the equipment, in meters per second.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:79](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L79)

***

### Resistance?

> `optional` **Resistance**: `number`

The resistance level of the equipment.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:123](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L123)

***

### SerialNumber?

> `optional` **SerialNumber**: `number`

The serial number of the sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:250](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L250)

***

### SpinDownTime?

> `optional` **SpinDownTime**: `number`

The spin-down time for the sensor, in seconds.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:54](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L54)

***

### State?

> `optional` **State**: `"OFF"` \| `"READY"` \| `"IN_USE"` \| `"FINISHED"`

The state of the equipment.
Can be "OFF", "READY", "IN_USE", or "FINISHED".

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:105](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L105)

***

### Strides?

> `optional` **Strides**: `number`

The total number of strides taken.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:159](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L159)

***

### Strokes?

> `optional` **Strokes**: `number`

The total number of strokes taken.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:165](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L165)

***

### SwVersion?

> `optional` **SwVersion**: `number`

The software version of the sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:244](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L244)

***

### TargetStatus?

> `optional` **TargetStatus**: `"OnTarget"` \| `"LowSpeed"` \| `"HighSpeed"`

The target status of the equipment.
Can be "OnTarget", "LowSpeed", or "HighSpeed".

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:202](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L202)

***

### Temperature?

> `optional` **Temperature**: `number`

The temperature measured by the sensor, in degrees Celsius.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:42](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L42)

***

### Torque?

> `optional` **Torque**: `number`

The torque value, in newton-meters.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:220](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L220)

***

### TrainerStatus?

> `optional` **TrainerStatus**: `number`

The trainer status, typically indicating the current mode or condition of the trainer.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:195](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L195)

***

### VirtualSpeed?

> `optional` **VirtualSpeed**: `number`

The virtual speed of the equipment, in meters per second.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:85](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L85)

***

### WheelPeriod?

> `optional` **WheelPeriod**: `number`

The wheel period, in seconds.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:214](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L214)

***

### WheelTicks?

> `optional` **WheelTicks**: `number`

The total number of wheel ticks.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:208](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L208)

***

### ZeroOffset?

> `optional` **ZeroOffset**: `number`

The zero offset calibration value for the sensor.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensorState.ts:48](https://github.com/Benjamin-Stefan/ant-plus-next/blob/284d5c599fd81345e0426b3f5a9e656ec481f9ca/src/sensors/fitnessEquipment/fitnessEquipmentSensorState.ts#L48)
