/**
 * A polyfill for `process.nextTick`, providing cross-platform compatibility.
 * In Node.js, it uses `process.nextTick`. In browsers, it falls back to
 * `setImmediate` if available, or `setTimeout` as a last resort.
 *
 * This function ensures that the provided callback function is executed asynchronously
 * after the current execution stack, similar to how `process.nextTick` works in Node.js.
 *
 * @param {() => void} fn - The callback function to execute asynchronously.
 *
 * @returns {void} No return value; the function is executed asynchronously.
 *
 * @example
 * nextTick(() => {
 *   console.log("This runs asynchronously after the current stack.");
 * });
 */
export declare function nextTick(fn: () => void): void;
//# sourceMappingURL=customPolyfills.d.ts.map