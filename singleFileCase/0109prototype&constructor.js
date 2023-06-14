// 构造函数Person
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`);
}

console.log("Person.prototype.constructor === Person->", Person.prototype.constructor === Person); // true


console.log("Object.prototype.constructor === Object->", Object.prototype.constructor === Object); // true


console.log("Function.prototype.constructor === Function->", Function.prototype.constructor === Function); // true

// 函数才有.prototype属性

// 要记住，所有的函数都是由 Function 构造出来的，包括 Function 自身。
console.log("Person.__proto__ === Function.prototype ->", Person.__proto__ === Function.prototype); // true
console.log("Function.__proto__ === Function.prototype ->", Function.__proto__ === Function.prototype); // true


function Man() {
  this.sex = "male";
}

console.log("Man.__proto__ === Function.prototype ->", Man.__proto__ === Function.prototype); // true

// 记住 constructor是prototype的属性
console.log("Man.prototype.constructor === Man ->", Man.prototype.constructor === Man); // true