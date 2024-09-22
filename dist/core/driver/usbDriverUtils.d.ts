/**
 * An array of objects representing supported hardware devices, each identified by a vendor ID and product ID.
 * This array is used to filter and identify specific USB devices that are supported by the system.
 *
 * @type {Array<{ vendorId: number, productId: number }>}
 *
 * @example
 * // Example of accessing the supported hardware list
 * console.log(supportHardware);
 * // Output: [{ vendorId: 0x0fcf, productId: 0x1008 }, { vendorId: 0x0fcf, productId: 0x1009 }]
 */
export declare const supportHardware: Array<{
    vendorId: number;
    productId: number;
}>;
//# sourceMappingURL=usbDriverUtils.d.ts.map