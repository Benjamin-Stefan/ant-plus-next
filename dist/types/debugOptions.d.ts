/**
 * Represents the options for configuring debugging levels for USB communication.
 * This interface allows setting different levels of debugging information for development or troubleshooting purposes.
 *
 * @interface DebugOptions
 * @property {number} [usbDebugLevel] - The debugging level for USB communication.
 *                                       Higher values typically indicate more detailed debug output.
 *                                       The exact interpretation of the levels may depend on the specific USB library or tool being used.
 *
 * @example
 * // Example usage of DebugOptions
 * const debugOptions: DebugOptions = {
 *     usbDebugLevel: 3 // Set the USB debug level to 3 for detailed debug output.
 * };
 */
export interface DebugOptions {
    usbDebugLevel?: number;
}
