[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / StrideSpeedDistanceScanner

# Class: StrideSpeedDistanceScanner

Represents a scanner for Stride-Based Speed and Distance Monitor (SDM) sensors.
Extends the AntPlusScanner class to handle scanning and state updates for multiple SDM sensors.

## Extends

- `AntPlusScanner`

## Constructors

### new StrideSpeedDistanceScanner()

> **new StrideSpeedDistanceScanner**(`stick`): [`StrideSpeedDistanceScanner`](StrideSpeedDistanceScanner.md)

Constructs an instance of the AntPlusScanner class.

#### Parameters

##### stick

[`USBDriverBase`](../interfaces/USBDriverBase.md)

The USB driver instance used for communication with the ANT+ stick.

#### Returns

[`StrideSpeedDistanceScanner`](StrideSpeedDistanceScanner.md)

#### Inherited from

`AntPlusScanner.constructor`

#### Defined in

[sensors/antPlusScanner.ts:42](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/antPlusScanner.ts#L42)

## Methods

### detach()

> **detach**(): `Promise`\<`void`\>

Detaches the sensor from its assigned channel and stops communication.

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if there is an issue detaching.

#### Inherited from

`AntPlusScanner.detach`

#### Defined in

[sensors/baseSensor.ts:249](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/baseSensor.ts#L249)

***

### scan()

> **scan**(): `Promise`\<`void`\>

Initiates a scan for ANT+ sensors by receiving broadcast messages.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the scanning process is complete.

#### Example

```ts
// Example usage:
const scanner = new AntPlusScanner();
scanner.scan();
```

#### Inherited from

`AntPlusScanner.scan`

#### Defined in

[sensors/antPlusScanner.ts:58](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/sensors/antPlusScanner.ts#L58)
