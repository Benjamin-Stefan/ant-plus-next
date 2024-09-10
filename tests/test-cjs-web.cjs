const { WebUsbStick } = require("../dist/ant-plus-next.cjs");

console.log("Testing CJS Module");
const stick = new WebUsbStick();
console.log(stick); // Should output a valid object
