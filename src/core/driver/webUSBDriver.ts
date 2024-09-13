import { BaseSensor } from "../../sensors/baseSensor";
import { USBDriverBase } from "../../types/usbDriverBase";
import EventEmitter from "events";
import { supportHardware } from "./usbDriverUtils";
import { Messages } from "../../utils/messages";
import { Constants } from "../../types/constants";

export class WebUSBDriver extends EventEmitter implements USBDriverBase {
    private static deviceInUse: USBDevice[] = [];
    private device: USBDevice | undefined;
    private iface: USBInterface | undefined;
    private inEndpoint: USBEndpoint | undefined;
    private outEndpoint: USBEndpoint | undefined;
    private leftover: Buffer | undefined;
    private usedChannels: number = 0;
    private attachedSensors: BaseSensor[] = [];

    private abortController: AbortController;
    private signal: AbortSignal;

    maxChannels: number = 0;
    _canScan: boolean = false;

    constructor() {
        super();
        this.setMaxListeners(50);
        this.abortController = new AbortController();
        this.signal = this.abortController.signal;
    }

    async canScan(): Promise<boolean> {
        return Promise.resolve(this._canScan);
    }

    public async open(): Promise<boolean> {
        try {
            if (!this.device) {
                this.device = await navigator.usb.requestDevice({ filters: supportHardware });
            }

            await this.device.open();
            this.iface = this.device.configuration?.interfaces[0];

            if (!this.iface) {
                throw new Error("Keine Interface-Konfiguration gefunden.");
            }

            await this.device.claimInterface(this.iface.interfaceNumber);

            WebUSBDriver.deviceInUse.push(this.device);

            this.inEndpoint = this.iface.alternate.endpoints.find((e) => e.direction === "in");
            this.outEndpoint = this.iface.alternate.endpoints.find((e) => e.direction === "out");

            if (!this.inEndpoint || !this.outEndpoint) {
                throw new Error("In- oder Out-Endpunkt nicht gefunden.");
            }

            await this.reset();

            await this.readLoop();

            return true;
        } catch {
            await this.close();

            return false;
        }
    }

    private async readLoop() {
        while (!this.signal.aborted) {
            try {
                if (!this.inEndpoint) {
                    return;
                }

                const result = await this.device?.transferIn(this.inEndpoint.endpointNumber, this.inEndpoint.packetSize);
                if (!result || !result.data) {
                    continue;
                }

                let buffer = Buffer.from(new Uint8Array(result.data.buffer));

                if (this.leftover) {
                    buffer = Buffer.concat([this.leftover, buffer]);
                    this.leftover = undefined;
                }

                if (buffer.readUInt8(0) !== 0xa4) {
                    console.error("SYNC fehlt");
                    continue;
                }

                let beginBlock = 0;
                const len = buffer.length;

                while (beginBlock < len) {
                    if (beginBlock + 1 === len) {
                        this.leftover = buffer.slice(beginBlock);
                        break;
                    }

                    const blockLen = buffer.readUInt8(beginBlock + 1);
                    const endBlock = beginBlock + blockLen + 4;

                    if (endBlock > len) {
                        this.leftover = buffer.slice(beginBlock);
                        break;
                    }

                    const readData = buffer.slice(beginBlock, endBlock);
                    await this.read(readData);
                    beginBlock = endBlock;
                }
            } catch (error) {
                if (this.signal.aborted) {
                    break;
                }

                throw error;
            }
        }
    }

    public async close(): Promise<void> {
        this.cancelReadLoop();
        await this.detachAll();

        if (this.device) {
            try {
                await this.device.close();
            } catch (error) {
                console.error("Fehler beim Schließen des Geräts:", error);
            }

            const devIdx = WebUSBDriver.deviceInUse.indexOf(this.device);
            if (devIdx >= 0) {
                WebUSBDriver.deviceInUse.splice(devIdx, 1);
            }

            this.emit("shutdown");
            this.device = undefined;
        }
    }

    public cancelReadLoop() {
        if (!this.signal.aborted) {
            this.abortController.abort();
            console.log("Anforderung zum Abbruch der Leseschleife gesendet.");
        }
    }

    public async read(data: Buffer): Promise<void> {
        const messageId = data.readUInt8(2);
        if (messageId === Constants.MESSAGE_STARTUP) {
            await this.write(Messages.requestMessage(0, Constants.MESSAGE_CAPABILITIES));
        } else if (messageId === Constants.MESSAGE_CAPABILITIES) {
            this.maxChannels = data.readUInt8(3);
            this._canScan = (data.readUInt8(7) & 0x06) === 0x06;
            await this.write(Messages.setNetworkKey());
        } else if (messageId === Constants.MESSAGE_CHANNEL_EVENT && data.readUInt8(4) === Constants.MESSAGE_NETWORK_KEY) {
            this.emit("startup", data);
        } else {
            this.emit("read", data);
        }
    }

    public async write(data: Buffer): Promise<void> {
        if (this.device && this.outEndpoint) {
            await this.device.transferOut(this.outEndpoint.endpointNumber, data);
        }
    }

    public async reset(): Promise<void> {
        await this.detachAll();
        this.maxChannels = 0;
        this.usedChannels = 0;
        await this.write(Messages.resetSystem());
    }

    public async attach(sensor: BaseSensor, forScan: boolean): Promise<boolean> {
        if (this.usedChannels < 0) {
            return Promise.resolve(false);
        }

        if (forScan && this.usedChannels !== 0) {
            return Promise.resolve(false);
        }
        if (!forScan && this.maxChannels <= this.usedChannels) {
            return Promise.resolve(false);
        }

        this.usedChannels = forScan ? -1 : this.usedChannels + 1;
        this.attachedSensors.push(sensor);

        return Promise.resolve(true);
    }

    public async detach(sensor: BaseSensor): Promise<boolean> {
        const idx = this.attachedSensors.indexOf(sensor);
        if (idx < 0) {
            return Promise.resolve(false);
        }

        this.usedChannels = this.usedChannels < 0 ? 0 : this.usedChannels - 1;
        this.attachedSensors.splice(idx, 1);

        return Promise.resolve(true);
    }

    public async isPresent(): Promise<boolean> {
        return Promise.resolve(!!this.device);
    }

    public async isScanning(): Promise<boolean> {
        return Promise.resolve(this.usedChannels === -1);
    }

    private async detachAll(): Promise<void> {
        for (const sensor of this.attachedSensors.slice()) {
            await sensor.detach();
        }

        this.attachedSensors = [];
    }
}
