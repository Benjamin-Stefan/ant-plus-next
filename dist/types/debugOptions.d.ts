/**
 * Represents the options for configuring debugging levels for USB communication.
 * This interface allows setting different levels of debugging information for development or troubleshooting purposes.
 *
 * @interface DebugOptions
 * @property {number} [usbDebugLevel] - The debugging level for USB communication.
 *                                       Higher values typically indicate more detailed debug output.
 *                                       The exact interpretation of the levels may depend on the specific USB library or tool being used.
 * @property {boolean} [throwLibUSBException] - Specifies whether to throw exceptions when USB errors occur.
 *                                              If set to `true`, any USB-related exceptions will be thrown.
 *                                              If `false`, errors may be handled more silently or logged without interrupting execution.
 *
 * @example
 * // Example usage of DebugOptions
 * const debugOptions: DebugOptions = {
 *     usbDebugLevel: 3, // Set the USB debug level to 3 for detailed debug output.
 *     throwLibUSBException: true // Throw exceptions on USB errors.
 * };
 */
export interface DebugOptions {
    usbDebugLevel?: number;
    throwLibUSBException?: boolean;
}
//# sourceMappingURL=debugOptions.d.ts.map