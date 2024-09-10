const { GarminStick2 } = require("../dist/ant-plus-next.cjs");

console.log("Testing CJS Module");
const stick = new GarminStick2();
console.log(stick); // Should output a valid object
