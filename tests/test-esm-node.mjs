import { GarminStick2 } from "../dist/ant-plus-next.mjs";

console.log("Testing ESM Module");
const stick = new GarminStick2();
console.log(stick); // Should output a valid object
