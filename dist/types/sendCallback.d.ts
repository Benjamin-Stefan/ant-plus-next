/**
 * A callback function type used to handle the result of a send operation.
 * This callback is invoked after an attempt to send data, indicating whether the operation was successful or not.
 *
 * @callback SendCallback
 * @param {boolean} result - A boolean value indicating the outcome of the send operation.
 *                           `true` if the operation was successful; `false` otherwise.
 *
 * @example
 * const handleSendResult: SendCallback = (result) => {
 *     if (result) {
 *         console.log('Data sent successfully.');
 *     } else {
 *         console.log('Failed to send data.');
 *     }
 * };
 */
export type SendCallback = (result: boolean) => void;
//# sourceMappingURL=sendCallback.d.ts.map