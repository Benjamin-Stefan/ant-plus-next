import * as usb from "usb";
import { ICancellationToken } from "../types/cancellationToken.js";

export class CancellationTokenListener implements ICancellationToken {
    private _completed = false;

    constructor(
        private fn: (d: any) => void,
        private cb: (err: Error) => void
    ) {}

    public cancel() {
        if (!this._completed) {
            this._completed = true;
            usb.usb.removeListener("attach", this.fn);
            this.cb(new Error("Canceled"));
        }
    }
}
