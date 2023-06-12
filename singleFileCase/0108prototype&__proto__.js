// 构造函数Person
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`);
}

const p1 = new Person("Mike"); // 实例对象p1
// 实例对象的原型(__proto__)指向构造函数的原型对象(prototype) 
// 下文我们用 _proto作为__proto__的简写(_proto在读的时候也读作dunder proto) 避免使用原型、原型对象等易混淆的中文名

p1.sayHello(); // "Hello, Mike!"

console.log("Person.prototype->", Person.prototype);
console.log("p1.__proto__->", p1.__proto__); // __proto__是非标准的属性，未在ECMAScript 6标准中定义。
console.log("getPrototypeOf(p1)->", Object.getPrototypeOf(p1));
// 几乎所有的现代浏览器都支持 __proto__属性
// 为了更好的兼容性和标准性，可以使用 Object.getPrototypeOf(obj) 方法来获取对象的原型。

console.log("Person.prototype === p1.__proto__->", Person.prototype === p1.__proto__); // true
console.log(Person.prototype === Object.getPrototypeOf(p1)); // true

const p2 = { name: "John" }; // 2、未经new，直接声明的对象我们称之为普通对象
console.log(p2.__proto__); // [Object: null prototype] {} -> 是一个空对象{} 
console.log(p2.__proto__ === Object.prototype); // true

console.log(Object.prototype.__proto__); // null

// 构造函数 与 Object有什么关联？
console.log(Person.prototype.__proto__ === Object.prototype); // true

// 2个问题
console.log("Object.__proto__ === Object.prototype->", Object.__proto__ === Object.prototype); // false
console.log("Function.__proto__ === Function.prototype->", Function.__proto__ === Function.prototype); // true
