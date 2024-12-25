[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / CadenceSensor

# Class: CadenceSensor

Represents a Bicycle Cadence sensor.
This class extends the AntPlusSensor class to handle specific data related to cadence measurement.

## Extends

- `AntPlusSensor`

## Constructors

### new CadenceSensor()

> **new CadenceSensor**(`stick`): [`CadenceSensor`](CadenceSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

##### stick

[`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`CadenceSensor`](CadenceSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/antPlusSensor.ts#L16)

## Properties

### wheelCircumference

> **wheelCircumference**: `number` = `2.199`

The wheel circumference in meters, used to calculate speed.

#### Default

```ts
2.199
```

#### Defined in

[sensors/cadence/cadenceSensor.ts:29](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/cadence/cadenceSensor.ts#L29)

***

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x7a`

The device type code for Bicycle Cadence sensors.

#### Defined in

[sensors/cadence/cadenceSensor.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/cadence/cadenceSensor.ts#L22)

## Methods

### attach()

> **attach**(`channel`, `deviceId`): `Promise`\<`void`\>

Attaches the sensor to a specified ANT+ channel and initializes its state.

#### Parameters

##### channel

`number`

The ANT+ channel number used for communication with the sensor.

##### deviceId

`number`

The unique identifier of the sensor device.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
const sensor = new CadenceSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/cadence/cadenceSensor.ts:50](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/cadence/cadenceSensor.ts#L50)

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

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/baseSensor.ts#L249)

***

### setWheelCircumference()

> **setWheelCircumference**(`wheelCircumference`): `void`

Sets the wheel circumference for speed calculation.

#### Parameters

##### wheelCircumference

`number`

The wheel circumference in meters.

#### Returns

`void`

#### Example

```ts
const sensor = new CadenceSensor();
sensor.setWheelCircumference(2.105); // Sets the wheel circumference to 2.105 meters
```

#### Defined in

[sensors/cadence/cadenceSensor.ts:66](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/cadence/cadenceSensor.ts#L66)
