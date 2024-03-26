class Person {
  constructor(name) {
    this.name = name;
    this.say1 = () => {
      console.log("我在constructor内部 ", this.name);
    }
  }
  say2() {
    console.log("我在constructor外部-", this.name);
  }
}

const A = new Person("A");
const B = new Person("B");

A.say1(); // 我在constructor内部  A
A.say2(); // 我在constructor外部- A


// constructor外部定义的属性存在于实例的__proto__上
console.log(A.__proto__.say1); // undefined
console.log(A.__proto__.say2); // [Function: say2]

// constructor外部定义的属性，所有实例共享
console.log(A.say1 === B.say1); // false
console.log(A.say2 === B.say2); // true

// [ 'name', 'say1' ]
console.log(Object.keys(A));