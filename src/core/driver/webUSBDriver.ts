import { BaseSensor } from "@/sensors/baseSensor";
import { USBDriverBase } from "@/types/usbDriverBase";
import EventEmitter from "events";
import { supportHardware } from "./usbDriverUtils";
import { Messages } from "@/utils/messages";
import { Constants } from "@/types/constants";

export class WebUSBDriver extends EventEmitter implements USBDriverBase {
    private static deviceInUse: USBDevice[] = [];
    private device: USBDevice | undefined;
    private iface: USBInterface | undefined;
    private inEndpoint: USBEndpoint | undefined;
    private outEndpoint: USBEndpoint | undefined;
    private leftover: DataView | undefined;
    private usedChannels: number = 0;
    private attachedSensors: BaseSensor[] = [];

    maxChannels: number = 0;
    _canScan: boolean = false;

    constructor() {
        super();
        this.setMaxListeners(50);
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

            if (this.iface) {
                await this.device.claimInterface(this.iface.interfaceNumber);
            }
        } catch {
            if (this.device) {
                await this.device.close();
            }

            this.device = undefined;
            this.iface = undefined;
        }

        if (!this.device) {
            return Promise.resolve(false);
        }

        WebUSBDriver.deviceInUse.push(this.device);

        if (!this.iface) {
            throw new Error("Interface not initialized.");
        }

        this.inEndpoint = this.iface.alternate.endpoints.find((e) => e.direction === "in");
        this.outEndpoint = this.iface.alternate.endpoints.find((e) => e.direction === "out");

        await this.reset();

        // TODO polling/data read

        return true;
    }

    public async close(): Promise<void> {
        await this.detachAll();

        if (this.device) {
            await this.device.close();
            console.log("WebUSB Device closed.");
        }
    }

    public async read(data: Buffer): Promise<void> {
        //console.debug("DATA RECV: ", data);
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
        if (this.device) {
            console.log("Writing data to WebUSB:", data);
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

        if (forScan) {
            if (this.usedChannels !== 0) {
                return Promise.resolve(false);
            }

            this.usedChannels = -1;
        } else {
            if (this.maxChannels <= this.usedChannels) {
                return Promise.resolve(false);
            }

            ++this.usedChannels;
        }

        this.attachedSensors.push(sensor);

        return Promise.resolve(true);
    }

    public async detach(sensor: BaseSensor): Promise<boolean> {
        const idx = this.attachedSensors.indexOf(sensor);
        if (idx < 0) {
            return Promise.resolve(false);
        }

        if (this.usedChannels < 0) {
            this.usedChannels = 0;
        } else {
            --this.usedChannels;
        }

        this.attachedSensors.splice(idx, 1);

        return Promise.resolve(true);
    }

    public async isPresent(): Promise<boolean> {
        return Promise.resolve(!!this.device);
    }

    public async isScanning(): Promise<boolean> {
        return Promise.resolve(this.usedChannels === -1);
    }

    /**
     * Detaches all sensors from the USB driver.
     */
    private async detachAll(): Promise<void> {
        const copy = this.attachedSensors;

        for (const sensor of copy) {
            await sensor.detach();
        }
    }
}
