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

// 取消obj的age属性描述符
Object.defineProperty(obj, "age", {
})
console.log("obj->", obj);
console.log("obj.age->", obj.age);