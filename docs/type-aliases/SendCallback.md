[**ant-plus-next v0.3.2**](../README.md)

***

[ant-plus-next](../README.md) / SendCallback

# Type Alias: SendCallback()

> **SendCallback**: (`result`) => `void`

A callback function type used to handle the result of a send operation.
This callback is invoked after an attempt to send data, indicating whether the operation was successful or not.

## Parameters

### result

`boolean`

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

[types/sendCallback.ts:18](https://github.com/Benjamin-Stefan/ant-plus-next/blob/c98e5e404c47b4703ad614bf119e7be885968f1a/src/types/sendCallback.ts#L18)
