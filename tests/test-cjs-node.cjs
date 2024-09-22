const { GarminStick2 } = require("../dist/index.cjs");

console.log("Testing CJS Module");
const stick = new GarminStick2();
console.log(stick); // Should output a valid object
