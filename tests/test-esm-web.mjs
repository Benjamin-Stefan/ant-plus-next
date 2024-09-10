import { WebUsbStick } from "../dist/ant-plus-next.mjs";

console.log("Testing ESM Module");
const stick = new WebUsbStick();
console.log(stick); // Should output a valid object
