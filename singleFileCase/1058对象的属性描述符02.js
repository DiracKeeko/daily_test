// 对象的 属性描述符

let obj = {}; // 空对象
Object.defineProperty(obj, "age", { 
  value: 18, 
  writable: false 
  // writable: true // 改为true之后可以修改
}); // "value"  是属性描述符

obj.age = 28; // writable的值手动设置为false，所以不可修改
console.log(Object.getOwnPropertyDescriptor(obj, "age")); 
// { value: 18, writable: false, enumerable: false, configurable: false }

console.log(obj.age);

