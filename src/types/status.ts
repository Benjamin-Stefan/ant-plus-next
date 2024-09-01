/**
 * Represents the status of an operation or process.
 * This type defines the structure of a status object, which includes a message identifier and a status code.
 *
 * @typedef {Object} Status
 * @property {number} msg - A numeric identifier representing the message associated with the status.
 *                          This could correspond to a specific type of status message or event.
 * @property {number} code - A numeric code indicating the status result or error code.
 *                           Typically used to represent different states or outcomes of an operation.
 *
 * @example
 * // Example of a status object
 * const status = {
 *   msg: 200,
 *   code: 1
 * };
 *
 * console.log(status.msg); // Output: 200
 * console.log(status.code); // Output: 1
 */
export type Status = {
    msg: number;
    code: number;
};
