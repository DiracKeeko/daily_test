// 定义多个属性描述符

let obj = {};

Object.defineProperties(obj, {
  age: {
    value: 18,
    writable: false
  },
  name: {
    value: "why",
    writable: true
  }
});

console.log(obj.age); // 18
console.log(obj.name); // why

obj.age = 19;
obj.name = "kobe";

console.log(obj.age); // 18
console.log(obj.name); // kobe

// 获取这个对象的属性描述符
let descriptor = Object.getOwnPropertyDescriptor(obj, "age");
console.log("descriptor->", descriptor);