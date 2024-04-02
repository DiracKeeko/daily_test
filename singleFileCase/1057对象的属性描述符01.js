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


let obj2 = {};
Object.defineProperty(obj2, "age", { 
  // value: 18,
  // writable: true,
  get() { 
    return this.value; 
  },
  set(val) {
    this.value = val;
  }
});
console.log(Object.getOwnPropertyDescriptor(obj2, "age"));
/* 
{
  get: [Function: get],
  set: [Function: set],
  enumerable: false,
  configurable: false
}
*/

// 使用对象字面量创建对象，对象属性的writable默认为true
let obj3 = {
  age: 15
}
console.log("obj3->", Object.getOwnPropertyDescriptor(obj3, "age"));
// obj3-> { value: 15, writable: true, enumerable: true, configurable: true }