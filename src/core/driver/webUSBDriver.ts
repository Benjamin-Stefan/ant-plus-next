// import { BaseSensor } from "@/sensors/baseSensor";
// import { DebugOptions } from "@/types/debugOptions";
// import { USBDriverBase } from "@/types/usbDriverBase";
// import EventEmitter from "events";

// export class WebUSBDriver extends EventEmitter implements USBDriverBase {
//     private device: USBDevice | undefined;
//     private attachedSensors: BaseSensor[] = [];
//     private maxChannels: number = 0;
//     private usedChannels: number = 0;
//     private canScan: boolean = false;

//     constructor(debugOptions: DebugOptions = {}) {
//         super();
//         this.setMaxListeners(50);
//     }

//     public async open(): Promise<boolean> {
//         try {
//             const filters = [
//                 { vendorId: 0x0fcf, productId: 0x1008 }, // Device stick1
//                 { vendorId: 0x0fcf, productId: 0x1009 }, // Device stick2
//             ];
//             this.device = await navigator.usb.requestDevice({ filters });
//             await this.device.open();
//             console.log("WebUSB Device opened:", this.device);
//             return true;
//         } catch (error) {
//             console.error("Error opening WebUSB device:", error);
//             return false;
//         }
//     }

//     public async close(): Promise<void> {
//         if (this.device) {
//             await this.device.close();
//             console.log("WebUSB Device closed.");
//         }
//     }

//     public async read(data: Buffer): Promise<void> {
//         // WebUSB-specific logic to read data
//         console.log("Reading data from WebUSB:", data);
//     }

//     public async write(data: Buffer): Promise<void> {
//         if (this.device) {
//             console.log("Writing data to WebUSB:", data);
//             // Implement WebUSB-specific write logic, if necessary
//         }
//     }

//     public async reset(): Promise<void> {
//         console.log("Resetting WebUSB device.");
//         this.maxChannels = 0;
//         this.usedChannels = 0;
//         // Reset logic if needed
//     }

//     public async attach(sensor: BaseSensor, forScan: boolean): Promise<boolean> {
//         if (this.usedChannels < 0) return false;
//         if (forScan) {
//             if (this.usedChannels !== 0) return false;
//             this.usedChannels = -1;
//         } else {
//             if (this.maxChannels <= this.usedChannels) return false;
//             ++this.usedChannels;
//         }
//         this.attachedSensors.push(sensor);
//         return true;
//     }

//     public async detach(sensor: BaseSensor): Promise<boolean> {
//         const idx = this.attachedSensors.indexOf(sensor);
//         if (idx < 0) return false;
//         if (this.usedChannels < 0) {
//             this.usedChannels = 0;
//         } else {
//             --this.usedChannels;
//         }
//         this.attachedSensors.splice(idx, 1);
//         return true;
//     }

//     public async isPresent(): Promise<boolean> {
//         return !!this.device;
//     }

//     public async isScanning(): Promise<boolean> {
//         return this.usedChannels === -1;
//     }
// }
