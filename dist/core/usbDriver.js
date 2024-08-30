var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EventEmitter } from "events";
import * as usb from "usb";
import { Constants } from "../types/constants.js";
import { Messages } from "../utils/messages.js";
export class USBDriver extends EventEmitter {
    constructor(idVendor, idProduct, debugOptions = {}) {
        super();
        this.idVendor = idVendor;
        this.idProduct = idProduct;
        this.detachedKernelDriver = false;
        this.usedChannels = 0;
        this.attachedSensors = [];
        this.maxChannels = 0;
        this.canScan = false;
        this.setMaxListeners(50);
        usb.usb.setDebugLevel(debugOptions.usbDebugLevel || 0);
    }
    getDevices() {
        const allDevices = usb.getDeviceList();
        return allDevices.filter(d => d.deviceDescriptor.idVendor === this.idVendor && d.deviceDescriptor.idProduct === this.idProduct).filter(d => USBDriver.deviceInUse.indexOf(d) === -1);
    }
    isPresent() {
        return this.getDevices().length > 0;
    }
    open() {
        const devices = this.getDevices();
        while (devices.length) {
            try {
                const device = devices.shift();
                if (!device) {
                    continue;
                }
                this.device = device;
                this.device.open();
                this.iface = this.device.interfaces[0];
                try {
                    if (this.iface && this.iface.isKernelDriverActive()) {
                        this.detachedKernelDriver = true;
                        this.iface.detachKernelDriver();
                    }
                }
                catch (_a) {
                    // Ignore kernel driver errors;
                }
                this.iface.claim();
                break;
            }
            catch (_b) {
                // Ignore the error and try with the next device, if present
                if (this.device) {
                    this.device.close();
                }
                this.device = undefined;
                this.iface = undefined;
            }
        }
        if (!this.device) {
            return false;
        }
        USBDriver.deviceInUse.push(this.device);
        if (!this.iface) {
            throw new Error("Interface not initialized.");
        }
        this.inEndpoint = this.iface.endpoints[0];
        this.inEndpoint.on("data", (data) => {
            if (!data.length) {
                return;
            }
            if (this.leftover) {
                data = Buffer.concat([this.leftover, data]);
                this.leftover = undefined;
            }
            if (data.readUInt8(0) !== 0xa4) {
                throw new Error("SYNC missing");
            }
            const len = data.length;
            let beginBlock = 0;
            while (beginBlock < len) {
                if (beginBlock + 1 === len) {
                    this.leftover = data.slice(beginBlock);
                    break;
                }
                const blockLen = data.readUInt8(beginBlock + 1);
                const endBlock = beginBlock + blockLen + 4;
                if (endBlock > len) {
                    this.leftover = data.slice(beginBlock);
                    break;
                }
                const readData = data.slice(beginBlock, endBlock);
                this.read(readData);
                beginBlock = endBlock;
            }
        });
        this.inEndpoint.on("error", (err) => {
            console.error("ERROR RECV: ", err);
        });
        this.inEndpoint.on("end", () => {
            //console.info("STOP RECV");
        });
        this.inEndpoint.startPoll();
        this.outEndpoint = this.iface.endpoints[1];
        this.reset();
        return true;
    }
    openAsync(signal) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = new AbortController();
            signal.addEventListener("abort", () => controller.abort());
            const doOpen = () => {
                return new Promise((resolve, reject) => {
                    try {
                        const result = this.open();
                        if (result) {
                            resolve();
                        }
                        else {
                            reject(new Error("Open failed"));
                        }
                    }
                    catch (err) {
                        reject(err instanceof Error ? err : new Error("Unknown error"));
                    }
                });
            };
            const fn = (d) => {
                if (!d || (d.deviceDescriptor.idVendor === this.idVendor && d.deviceDescriptor.idProduct === this.idProduct)) {
                    doOpen()
                        .then(() => {
                        usb.usb.removeListener("attach", fn);
                    })
                        .catch(err => {
                        if (!controller.signal.aborted) {
                            console.error(err); // handle errors
                        }
                    });
                }
            };
            usb.usb.on("attach", fn);
            if (this.isPresent()) {
                setImmediate(() => usb.usb.emit("attach", this.device));
            }
            yield new Promise((resolve, reject) => {
                controller.signal.addEventListener("abort", () => {
                    usb.usb.removeListener("attach", fn);
                    reject(new Error("Operation canceled"));
                });
            });
        });
    }
    close() {
        this.detach_all();
        if (this.inEndpoint) {
            this.inEndpoint.stopPoll(() => {
                if (this.iface) {
                    this.iface.release(true, () => {
                        var _a;
                        if (this.detachedKernelDriver) {
                            this.detachedKernelDriver = false;
                            try {
                                (_a = this.iface) === null || _a === void 0 ? void 0 : _a.attachKernelDriver();
                            }
                            catch (_b) {
                                // Ignore kernel driver errors;
                            }
                        }
                        this.iface = undefined;
                        if (this.device) {
                            this.device.reset(() => {
                                var _a;
                                (_a = this.device) === null || _a === void 0 ? void 0 : _a.close();
                                this.emit("shutdown");
                                const devIdx = USBDriver.deviceInUse.indexOf(this.device);
                                if (devIdx >= 0) {
                                    USBDriver.deviceInUse.splice(devIdx, 1);
                                }
                                if (usb.usb.listenerCount("attach")) {
                                    usb.usb.emit("attach", this.device);
                                }
                                this.device = undefined;
                            });
                        }
                    });
                }
            });
        }
    }
    reset() {
        this.detach_all();
        this.maxChannels = 0;
        this.usedChannels = 0;
        this.write(Messages.resetSystem());
    }
    isScanning() {
        return this.usedChannels === -1;
    }
    attach(sensor, forScan) {
        if (this.usedChannels < 0) {
            return false;
        }
        if (forScan) {
            if (this.usedChannels !== 0) {
                return false;
            }
            this.usedChannels = -1;
        }
        else {
            if (this.maxChannels <= this.usedChannels) {
                return false;
            }
            ++this.usedChannels;
        }
        this.attachedSensors.push(sensor);
        return true;
    }
    detach(sensor) {
        const idx = this.attachedSensors.indexOf(sensor);
        if (idx < 0) {
            return false;
        }
        if (this.usedChannels < 0) {
            this.usedChannels = 0;
        }
        else {
            --this.usedChannels;
        }
        this.attachedSensors.splice(idx, 1);
        return true;
    }
    detach_all() {
        const copy = this.attachedSensors;
        copy.forEach((sensor) => sensor.detach());
    }
    write(data) {
        if (this.outEndpoint) {
            //console.debug("DATA SEND: ", data);
            this.outEndpoint.transfer(data, error => {
                if (error) {
                    console.error("ERROR SEND: ", error);
                }
            });
        }
    }
    read(data) {
        //console.debug("DATA RECV: ", data);
        const messageId = data.readUInt8(2);
        if (messageId === Constants.MESSAGE_STARTUP) {
            this.write(Messages.requestMessage(0, Constants.MESSAGE_CAPABILITIES));
        }
        else if (messageId === Constants.MESSAGE_CAPABILITIES) {
            this.maxChannels = data.readUInt8(3);
            this.canScan = (data.readUInt8(7) & 0x06) === 0x06;
            this.write(Messages.setNetworkKey());
        }
        else if (messageId === Constants.MESSAGE_CHANNEL_EVENT && data.readUInt8(4) === Constants.MESSAGE_NETWORK_KEY) {
            this.emit("startup", data);
        }
        else {
            this.emit("read", data);
        }
    }
}
USBDriver.deviceInUse = [];
//# sourceMappingURL=usbDriver.js.map