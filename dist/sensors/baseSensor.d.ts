import EventEmitter from "events";
import { USBDriver } from "../core/usbDriver.js";
import { SendCallback } from "../types/sendCallback.js";
import { Status } from "../types/status.js";
export declare abstract class BaseSensor extends EventEmitter {
    private stick;
    channel: number | undefined;
    deviceId: number;
    transmissionType: number;
    private messageQueue;
    protected decodeDataCbk: ((data: Buffer) => void) | undefined;
    protected statusCbk: ((status: Status) => boolean) | undefined;
    protected abstract updateState(deviceId: number, data: Buffer): void;
    constructor(stick: USBDriver);
    protected scan(type: string, frequency: number): void;
    protected attachSensor(channel: number, type: string, deviceId: number, deviceType: number, transmissionType: number, timeout: number, period: number, frequency: number): void;
    detach(): void;
    protected write(data: Buffer): void;
    private handleEventMessages;
    protected send(data: Buffer, cbk?: SendCallback): void;
}
