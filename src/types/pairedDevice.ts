/**
 * Represents a device that is paired with the system.
 * This type is used to define the properties of a paired device, including its unique identifier, type, and pairing status.
 *
 * @typedef {Object} PairedDevice
 * @property {number} id - The unique identifier of the paired device.
 * @property {number} type - The type of the device, represented by a numeric code.
 *                           This could correspond to a specific device category or model.
 * @property {boolean} paired - Indicates whether the device is currently paired with the system.
 *
 * @example
 * // Example of a paired device object
 * const device = {
 *   id: 1,
 *   type: 101,
 *   paired: true
 * };
 *
 * console.log(device.id); // Output: 1
 * console.log(device.type); // Output: 101
 * console.log(device.paired); // Output: true
 */
export type PairedDevice = {
    id: number;
    type: number;
    paired: boolean;
};
