import { EventEmitter } from "events";
import { Messages } from "../../src/utils/messages";
import { USBDriverBase } from "../../src/types/usbDriverBase";

/**
 * Builds a complete ANT message as the stick would deliver it:
 * sync byte, length (channel + payload), message id, channel, payload, checksum.
 */
export function antMessage(messageId: number, channel: number, payload: number[]): number[] {
    const message = [0xa4, payload.length + 1, messageId, channel, ...payload];
    return [...message, Messages.getChecksum(message)];
}

/**
 * Returns the message as a view that does not start at offset 0 of its backing buffer,
 * like a message sliced out of a USB transfer that carried several messages.
 */
export function atOffset(message: number[], offset = 5): Uint8Array {
    const backing = new Uint8Array(offset + message.length + 7).fill(0xee);
    backing.set(message, offset);
    return backing.subarray(offset, offset + message.length);
}

/** Lets pending promise callbacks and nextTick/setImmediate work run. */
export function flush(): Promise<void> {
    return new Promise((resolve) => setImmediate(resolve));
}

/** Minimal in-memory stand-in for a USB stick, recording everything written to it. */
export class FakeStick extends EventEmitter {
    written: Uint8Array[] = [];
    scanSupported = true;
    failWrites = false;

    async open() {
        return Promise.resolve(true);
    }
    async close() {}
    async read() {}
    async write(data: Uint8Array) {
        if (this.failWrites) {
            throw new Error("write failed");
        }
        this.written.push(data);
        return Promise.resolve();
    }
    async reset() {}
    async attach() {
        return Promise.resolve(true);
    }
    async detach() {
        return Promise.resolve(true);
    }
    async isPresent() {
        return Promise.resolve(true);
    }
    async isScanning() {
        return Promise.resolve(false);
    }
    async canScan() {
        return Promise.resolve(this.scanSupported);
    }
    async canAttach() {
        return Promise.resolve(true);
    }

    asDriver(): USBDriverBase {
        return this as unknown as USBDriverBase;
    }
}
