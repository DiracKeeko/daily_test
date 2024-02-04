
let obj = {}
let arr = [];

// 不可以用typeof
console.log("对象->", typeof obj); // 对象-> object
console.log("数组->", typeof arr); // 数组-> object


// instanceof
console.log("对象 ins->", obj instanceof Array); // false
console.log("数组 ins->", arr instanceof Array); // true


// Array.isArray() // es6
console.log(Array.isArray(arr)); // true
