[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / SpeedSensor

# Class: SpeedSensor

Represents a Bicycle Speed sensor.
This class extends the AntPlusSensor class to handle specific data related to speed measurement.

## Extends

- `AntPlusSensor`

## Constructors

### new SpeedSensor()

> **new SpeedSensor**(`stick`): [`SpeedSensor`](SpeedSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

• **stick**: [`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`SpeedSensor`](SpeedSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/antPlusSensor.ts#L16)

## Properties

### wheelCircumference

> **wheelCircumference**: `number` = `2.199`

The wheel circumference in meters, used to calculate speed.

#### Default

```ts
2.199
```

#### Defined in

[sensors/speed/speedSensor.ts:29](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/speed/speedSensor.ts#L29)

***

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x7b`

The device type code for Bicycle Speed sensors.

#### Defined in

[sensors/speed/speedSensor.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/speed/speedSensor.ts#L22)

## Methods

### attach()

> **attach**(`channel`, `deviceId`): `Promise`\<`void`\>

Attaches the sensor to a specified ANT+ channel and initializes its state.

#### Parameters

• **channel**: `number`

The ANT+ channel number used for communication with the sensor.

• **deviceId**: `number`

The unique identifier of the sensor device.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
const sensor = new SpeedSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/speed/speedSensor.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/speed/speedSensor.ts#L58)

***

### detach()

> **detach**(): `Promise`\<`void`\>

Detaches the sensor from its assigned channel and stops communication.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if there is an issue detaching.

#### Inherited from

`AntPlusSensor.detach`

#### Defined in

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/baseSensor.ts#L249)

***

### setWheelCircumference()

> **setWheelCircumference**(`wheelCircumference`): `void`

Sets the wheel circumference for speed calculation.

#### Parameters

• **wheelCircumference**: `number`

The wheel circumference in meters.

#### Returns

`void`

#### Example

```ts
const sensor = new SpeedSensor();
sensor.setWheelCircumference(2.105); // Sets the wheel circumference to 2.105 meters
```

#### Defined in

[sensors/speed/speedSensor.ts:42](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/speed/speedSensor.ts#L42)
