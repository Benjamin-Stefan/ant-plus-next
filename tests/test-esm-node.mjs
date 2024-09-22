import { GarminStick2 } from "../dist/index.mjs";

console.log("Testing ESM Module");
const stick = new GarminStick2();
console.log(stick); // Should output a valid object
