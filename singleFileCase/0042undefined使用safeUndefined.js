
console.log("before ->", !!undefined); // false

// undefined 是一个全局变量, 可能被修改
var undefined = "hello";
console.log(undefined);
console.log("after ->", !!undefined); // true

let safeUndefined = void 0;
console.log("safeUndefined ->", safeUndefined); // undefined