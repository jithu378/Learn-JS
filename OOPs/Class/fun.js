// const math = require("./math");
// console.log(math.add(2,3));
// console.log(math.sub(5,3));
// console.log(math.mul(8,3));


// named export
// import {add,sub,mul} from "./math.js";
// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(mul(10,20));

// default export
import add from "./math.js";
console.log(add(10,20));