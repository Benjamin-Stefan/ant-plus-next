import { BaseSensor } from "../sensors/baseSensor";
import EventEmitter from "events";

export interface USBDriverBase extends EventEmitter {
    open(): Promise<boolean>;
    close(): Promise<void>;
    read(data: Buffer): Promise<void>;
    write(data: Buffer): Promise<void>;
    reset(): Promise<void>;
    attach(sensor: BaseSensor, forScan: boolean): Promise<boolean>;
    detach(sensor: BaseSensor): Promise<boolean>;
    isPresent(): Promise<boolean>;
    isScanning(): Promise<boolean>;
    canScan(): Promise<boolean>;
}
