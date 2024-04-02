// 使用严格模式
// "use strict"

// 对象的 属性描述符 configurable

let obj = {}; // 空对象
Object.defineProperty(obj, "age", { 
  writable: true,
  configurable: false // 禁止配置，不可以修改属性描述符，也不可以删除属性
});

obj.age = 18; // writable的值手动设置为false，所以不可修改
console.log(Object.getOwnPropertyDescriptor(obj, "age").value);  // 18


Object.defineProperty(obj, "age", { value: 2 });
console.log("obj.age->", obj.age); // 2

Object.defineProperty(obj, "age", { writable: true });
console.log("writable not change"); // 正常输出，不报错

Object.defineProperty(obj, "age", { writable: false });
console.log("writable change"); // 正常输出，不报错

// Object.defineProperty(obj, "age", { enumerable: true });  // 报错, 不可修改

// Object.defineProperties(obj, "age", {configurable: true}); // 报错, 不可修改

console.log("obj->", obj); // {}
// 配置了configurable: false的属性，不能被删除
delete obj.age; // 非严格模式下，操作无效，但不报错。 严格模式下，报错
console.log("obj->", obj); // {}
console.log("obj.age->", obj.age); // obj.age -> 2


let obj1 = {};
Object.defineProperty(obj1, "age1", { 
  writable: true,
  configurable: true
});

obj1.age1 = 20;
console.log("obj1.age1->", obj1.age1);

delete obj1.age1;
console.log("obj1.age1->", obj1.age1); // undefined