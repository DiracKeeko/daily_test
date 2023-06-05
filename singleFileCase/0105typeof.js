console.log(typeof undefined);  // "undefined"
console.log(typeof true);       // "boolean"
console.log(typeof 42);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof Symbol());   // "symbol"
console.log(typeof 123n);       // "bigint"
console.log(typeof function() {});  // "function" // function 不是基本数据类型

console.log(typeof {});         // "object"
console.log(typeof null);       // "object" （null 被误判为对象类型，这是 JavaScript 的历史遗留问题）
console.log(typeof []);         // "object"
console.log(typeof new Date()); // "object"

console.log(typeof Infinity);   // "number"
console.log(typeof NaN);        // "number"
