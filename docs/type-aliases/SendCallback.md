[**ant-plus-next v0.3.1**](../README.md) • **Docs**

***

[ant-plus-next v0.3.1](../README.md) / SendCallback

# Type Alias: SendCallback()

> **SendCallback**: (`result`) => `void`

A callback function type used to handle the result of a send operation.
This callback is invoked after an attempt to send data, indicating whether the operation was successful or not.

## Parameters

• **result**: `boolean`

A boolean value indicating the outcome of the send operation.
                          `true` if the operation was successful; `false` otherwise.

## Returns

`void`

## Example

```ts
const handleSendResult: SendCallback = (result) => {
    if (result) {
        console.log('Data sent successfully.');
    } else {
        console.log('Failed to send data.');
    }
};
```

## Defined in

[types/sendCallback.ts:18](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c9567bc41ed33c15275cf583dde1cd362dcbccff/src/types/sendCallback.ts#L18)
