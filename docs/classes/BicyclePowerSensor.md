[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / BicyclePowerSensor

# Class: BicyclePowerSensor

Represents a Bicycle Power sensor.
This class extends the AntPlusSensor class to handle specific data related to bicycle power measurement.

## Extends

- `AntPlusSensor`

## Constructors

### new BicyclePowerSensor()

> **new BicyclePowerSensor**(`stick`): [`BicyclePowerSensor`](BicyclePowerSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

• **stick**: [`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`BicyclePowerSensor`](BicyclePowerSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/antPlusSensor.ts#L16)

## Properties

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x0b`

The device type code for Bicycle Power sensors.

#### Defined in

[sensors/bicyclePower/bicyclePowerSensor.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/bicyclePower/bicyclePowerSensor.ts#L22)

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
const sensor = new BicyclePowerSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/bicyclePower/bicyclePowerSensor.ts:43](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/bicyclePower/bicyclePowerSensor.ts#L43)

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
