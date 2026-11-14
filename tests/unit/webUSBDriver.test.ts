import { WebUSBDriver } from "../../src/core/driver/webUSBDriver";
import { Constants } from "../../src/types/constants";
import { antMessage, flush } from "./helpers";

type PendingTransfer = { resolve: (result: USBInTransferResult) => void; reject: (error: Error) => void };

/** In-memory USBDevice: transferIn waits until the test pushes data or the device is closed. */
class FakeUSBDevice {
    private pending: PendingTransfer[] = [];
    private queued: Uint8Array[] = [];

    configuration = {
        interfaces: [
            {
                interfaceNumber: 0,
                alternate: {
                    endpoints: [
                        { direction: "in", endpointNumber: 1, packetSize: 64 },
                        { direction: "out", endpointNumber: 1, packetSize: 64 },
                    ],
                },
            },
        ],
    };

    async open() {}
    async claimInterface() {}
    async releaseInterface() {}
    async transferOut() {
        return Promise.resolve({ status: "ok", bytesWritten: 0 });
    }
    async close() {
        for (const transfer of this.pending.splice(0)) {
            transfer.reject(new Error("device closed"));
        }
        return Promise.resolve();
    }

    transferIn(): Promise<USBInTransferResult> {
        const next = this.queued.shift();
        if (next) {
            return Promise.resolve(this.result(next));
        }
        return new Promise((resolve, reject) => this.pending.push({ resolve, reject }));
    }

    push(bytes: number[]) {
        const data = new Uint8Array(bytes);
        const transfer = this.pending.shift();
        if (transfer) {
            transfer.resolve(this.result(data));
        } else {
            this.queued.push(data);
        }
    }

    private result(data: Uint8Array): USBInTransferResult {
        return { status: "ok", data: new DataView(data.buffer, data.byteOffset, data.byteLength) } as USBInTransferResult;
    }
}

const withTimeout = <T>(promise: Promise<T>, ms = 500) => Promise.race([promise, new Promise<never>((_, reject) => setTimeout(() => reject(new Error(`timed out after ${ms} ms`)), ms))]);

describe("WebUSBDriver", () => {
    const networkKeyAck = antMessage(Constants.MESSAGE_CHANNEL_EVENT, 0, [Constants.MESSAGE_NETWORK_KEY, 0x00]);

    function createDriver() {
        const driver = new WebUSBDriver();
        const device = new FakeUSBDevice();
        (driver as unknown as { device: FakeUSBDevice }).device = device;
        return { driver, device };
    }

    beforeEach(() => {
        jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("resolves open() while the read loop keeps running", async () => {
        const { driver, device } = createDriver();
        const startup = jest.fn();
        driver.on("startup", startup);

        await expect(withTimeout(driver.open())).resolves.toBe(true);

        device.push(networkKeyAck);
        await flush();
        expect(startup).toHaveBeenCalledTimes(1);

        await driver.close();
    });

    it("reads again after the device was closed and reopened", async () => {
        const { driver, device } = createDriver();
        const startup = jest.fn();
        driver.on("startup", startup);

        await withTimeout(driver.open());
        await driver.close();

        (driver as unknown as { device: FakeUSBDevice }).device = device;
        await withTimeout(driver.open());
        device.push(networkKeyAck);
        await flush();

        expect(startup).toHaveBeenCalledTimes(1);
        await driver.close();
    });
});
