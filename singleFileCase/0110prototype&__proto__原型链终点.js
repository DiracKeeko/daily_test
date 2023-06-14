// 构造函数Person
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`);
}

// 函数才有.prototype属性

// 要记住，所有的函数都是由 Function 构造出来的，包括 Function 自身。 (Object也是由Function构造出来的)
console.log("Person.__proto__ === Function.prototype ->", Person.__proto__ === Function.prototype); // true
console.log("Function.__proto__ === Function.prototype ->", Function.__proto__ === Function.prototype); // true

// 回顾0108中的这句话 -> 实例对象的原型(__proto__)指向构造函数的原型对象(prototype) 

console.log("Function.prototype.__proto__ === Object.prototype ->", Function.prototype.__proto__ === Object.prototype); // true

// 构造函数 与 Object有什么关联？
console.log("Person.prototype.__proto__ === Object.prototype ->", Person.prototype.__proto__ === Object.prototype); // true

// Object也是由Function构造出来的
console.log("Object.__proto__ === Function.prototype ->", Object.__proto__ === Function.prototype); // true
console.log("Object.__proto__ === Function.__proto__ ->", Object.__proto__ === Function.__proto__); // true

// 原型链的终点
console.log("Object.prototype.__proto__ === null ->", Object.prototype.__proto__ === null); // true
