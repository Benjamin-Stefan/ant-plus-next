[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / FitnessEquipmentSensor

# Class: FitnessEquipmentSensor

Represents a Fitness Equipment sensor.
This class extends the AntPlusSensor class to handle specific data related to fitness equipment.

## Extends

- `AntPlusSensor`

## Constructors

### new FitnessEquipmentSensor()

> **new FitnessEquipmentSensor**(`stick`): [`FitnessEquipmentSensor`](FitnessEquipmentSensor.md)

Constructs an instance of the AntPlusSensor class.

#### Parameters

• **stick**: [`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`FitnessEquipmentSensor`](FitnessEquipmentSensor.md)

#### Inherited from

`AntPlusSensor.constructor`

#### Defined in

[sensors/antPlusSensor.ts:16](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/antPlusSensor.ts#L16)

## Properties

### deviceType

> `readonly` `static` **deviceType**: `number` = `0x11`

The device type code for Fitness Equipment sensors.

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:24](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L24)

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
const sensor = new FitnessEquipmentSensor();
sensor.attach(1, 12345); // Attaches to channel 1 with device ID 12345
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:45](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L45)

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

### setBasicResistance()

> **setBasicResistance**(`resistance`, `cbk`?): `Promise`\<`void`\>

Sets the basic resistance level on the fitness equipment.

#### Parameters

• **resistance**: `number`

The resistance level to set (0 to 100).

• **cbk?**: [`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setBasicResistance(50, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:124](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L124)

***

### setTargetPower()

> **setTargetPower**(`power`, `cbk`?): `Promise`\<`void`\>

Sets the target power level on the fitness equipment.

#### Parameters

• **power**: `number`

The target power level in watts.

• **cbk?**: [`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setTargetPower(250, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:142](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L142)

***

### setTrackResistance()

> **setTrackResistance**(`slopeOrCallback`?, `rollingResistanceCoeff`?, `cbk`?): `Promise`\<`void`\>

Sets the track resistance on the fitness equipment.

#### Parameters

• **slopeOrCallback?**: `number` \| [`SendCallback`](../type-aliases/SendCallback.md)

The track slope percentage or a callback function.

• **rollingResistanceCoeff?**: `number`

The rolling resistance coefficient.

• **cbk?**: [`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setTrackResistance(5, 0.005, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:222](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L222)

***

### setUserConfiguration()

> **setUserConfiguration**(`userWeightOrCallback`?, `bikeWeight`?, `wheelDiameter`?, `gearRatio`?, `cbk`?): `Promise`\<`void`\>

Sets the user configuration for the sensor.

#### Parameters

• **userWeightOrCallback?**: `number` \| [`SendCallback`](../type-aliases/SendCallback.md)

The user's weight in kilograms or a callback function.

• **bikeWeight?**: `number`

The weight of the bike in kilograms.

• **wheelDiameter?**: `number`

The diameter of the wheel in meters.

• **gearRatio?**: `number`

The gear ratio.

• **cbk?**: [`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setUserConfiguration(70, 10, 0.7, 3.5, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:99](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L99)

***

### setWindResistance()

> **setWindResistance**(`windCoeffOrCallback`?, `windSpeed`?, `draftFactor`?, `cbk`?): `Promise`\<`void`\>

Sets the wind resistance on the fitness equipment.

#### Parameters

• **windCoeffOrCallback?**: `number` \| [`SendCallback`](../type-aliases/SendCallback.md)

The wind resistance coefficient or a callback function.

• **windSpeed?**: `number`

The wind speed in km/h.

• **draftFactor?**: `number`

The drafting factor (0 to 1).

• **cbk?**: [`SendCallback`](../type-aliases/SendCallback.md)

Optional callback function to handle the send response.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
sensor.setWindResistance(0.5, 20, 0.1, callbackFunction);
```

#### Defined in

[sensors/fitnessEquipment/fitnessEquipmentSensor.ts:181](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/sensors/fitnessEquipment/fitnessEquipmentSensor.ts#L181)
