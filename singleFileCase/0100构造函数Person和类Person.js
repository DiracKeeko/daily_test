function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 原型方法
Person.prototype.sayName = function () {
  console.log("我的名字是: " + this.name);
}

// 静态方法
Person.staticFunction = function () {
  console.log("我是静态方法");
}

const personES5 = new Person("ES5", 18);
personES5.sayName(); // 我的名字是: ES5
Person.staticFunction(); // 我是静态方法

// personES5.staticFunction(); // TypeError: personES5.staticFunction is not a function

console.log("prop in personES5");
for (let prop in personES5) {
  console.log(prop); // name, age, sayName
}

console.log("===================");

// 转为class
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log("我的名字是: " + this.name);
  }

  static staticFunction() {
    console.log("我是静态方法");
  }
}

const personES6 = new Person2("ES6", 18);
personES6.sayName(); // 我的名字是: ES6
Person2.staticFunction(); // 我是静态方法

// personES6.staticFunction(); // TypeError: personES6.staticFunction is not a function

console.log("prop in personES6");
for (let prop in personES6) {
  console.log(prop); // name, age
}


function isConstructable(fn) {
  try {
    Reflect.construct(Object, [], fn);
    return true;
  } catch(e) {
    return false;
  }
}

console.log("personES5 ->", isConstructable(personES5.sayName)); // personES5 -> true
console.log("personES6 ->", isConstructable(personES6.sayName)); // personES6 -> false