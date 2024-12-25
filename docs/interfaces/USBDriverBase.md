[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / USBDriverBase

# Interface: USBDriverBase

Interface representing the base functionalities of a USB driver.
This interface extends EventEmitter to allow for emitting and handling events.
It provides methods to open, close, read, write, and manage sensors.

## Extends

- `EventEmitter`

## Properties

### maxChannels

> **maxChannels**: `number`

The maximum number of channels available for communication.

#### Example

```ts
console.log(driver.maxChannels); // Outputs the maximum number of channels available
```

#### Defined in

[types/usbDriverBase.ts:145](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L145)

***

### usedChannels

> **usedChannels**: `number`

The number of channels currently in use.

#### Example

```ts
console.log(driver.usedChannels); // Outputs the number of channels in use
```

#### Defined in

[types/usbDriverBase.ts:136](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L136)

## Methods

### attach()

> **attach**(`sensor`, `forScan`): `Promise`\<`boolean`\>

Attaches a sensor to the USB driver and assigns it a channel.

#### Parameters

##### sensor

[`BaseSensor`](../classes/BaseSensor.md)

The sensor to attach.

##### forScan

`boolean`

Whether the sensor is being attached for scanning.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the sensor was successfully attached, otherwise false.

#### Example

```ts
const sensor = new SomeSensor();
const attached = await driver.attach(sensor, true);
console.log(attached); // true if successfully attached
```

#### Defined in

[types/usbDriverBase.ts:82](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L82)

***

### canAttach()

> **canAttach**(): `Promise`\<`boolean`\>

Checks if a new sensor can be attached based on the available channels.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if a new sensor can be attached, otherwise false.

#### Example

```ts
const canAttach = await driver.canAttach();
console.log(canAttach); // true if another sensor can be attached
```

#### Defined in

[types/usbDriverBase.ts:156](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L156)

***

### canScan()

> **canScan**(): `Promise`\<`boolean`\>

Checks if the USB driver is capable of scanning for devices.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the driver can scan, otherwise false.

#### Example

```ts
const canScan = await driver.canScan();
console.log(canScan); // true if the device can scan
```

#### Defined in

[types/usbDriverBase.ts:127](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L127)

***

### close()

> **close**(): `Promise`\<`void`\>

Closes the connection to the USB device.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the device is successfully closed.

#### Example

```ts
await driver.close();
console.log("Device closed.");
```

#### Defined in

[types/usbDriverBase.ts:33](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L33)

***

### detach()

> **detach**(`sensor`): `Promise`\<`boolean`\>

Detaches a sensor from the USB driver.

#### Parameters

##### sensor

[`BaseSensor`](../classes/BaseSensor.md)

The sensor to detach.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the sensor was successfully detached, otherwise false.

#### Example

```ts
const detached = await driver.detach(sensor);
console.log(detached); // true if successfully detached
```

#### Defined in

[types/usbDriverBase.ts:94](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L94)

***

### isPresent()

> **isPresent**(): `Promise`\<`boolean`\>

Checks if a USB device is currently present and connected.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the device is present, otherwise false.

#### Example

```ts
const isPresent = await driver.isPresent();
console.log(isPresent); // true if the device is present
```

#### Defined in

[types/usbDriverBase.ts:105](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L105)

***

### isScanning()

> **isScanning**(): `Promise`\<`boolean`\>

Checks if the USB driver is currently scanning for devices.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the driver is scanning, otherwise false.

#### Example

```ts
const isScanning = await driver.isScanning();
console.log(isScanning); // true if the device is scanning
```

#### Defined in

[types/usbDriverBase.ts:116](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L116)

***

### open()

> **open**(): `Promise`\<`boolean`\>

Opens the connection to the USB device.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if the device was successfully opened, otherwise false.

#### Example

```ts
const driver: USBDriverBase = new SomeUSBDriver();
const isOpen = await driver.open();
console.log(isOpen); // true if successfully opened, false otherwise
```

#### Defined in

[types/usbDriverBase.ts:22](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L22)

***

### read()

> **read**(`data`): `Promise`\<`void`\>

Reads data from the USB device.

#### Parameters

##### data

`Uint8Array`\<`ArrayBufferLike`\>

The data received from the USB device.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the data has been processed.

#### Example

```ts
const data = new Uint8Array([0x01, 0x02, 0x03]);
await driver.read(data);
```

#### Defined in

[types/usbDriverBase.ts:45](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L45)

***

### reset()

> **reset**(): `Promise`\<`void`\>

Resets the USB device and channels.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the device has been reset.

#### Example

```ts
await driver.reset();
console.log("Device reset.");
```

#### Defined in

[types/usbDriverBase.ts:68](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L68)

***

### write()

> **write**(`data`): `Promise`\<`void`\>

Writes data to the USB device.

#### Parameters

##### data

`Uint8Array`\<`ArrayBufferLike`\>

The data to send to the USB device.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the data has been sent.

#### Example

```ts
const data = new Uint8Array([0xA4, 0xB5]);
await driver.write(data);
```

#### Defined in

[types/usbDriverBase.ts:57](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/usbDriverBase.ts#L57)
