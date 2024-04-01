// 对象的 属性描述符

let obj = {}; // 空对象
Object.defineProperty(obj, "age", { value: 18 }); // "value"  是属性描述符

console.log(obj.age); // 18
console.log(Object.getOwnPropertyDescriptor(obj, "age")); 
// { value: 18, writable: false, enumerable: false, configurable: false }
// writable的值默认为false

console.log(Object.getOwnPropertyDescriptor(obj, "age").value); // 18

obj.age = 28;
console.log("change->", obj.age);