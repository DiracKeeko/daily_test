const aObj = {
  getName() {
    return this.name;
  },
  a: "a string",
  name: "aObj"
}

// Object.create(aObj); 创建一个空对象，并将空对象的 __proto__ 指向aObj

const Obj1 = Object.create(aObj); // {}.__proto__ = aObj;

console.log('Obj1->', Obj1); // {}
console.log("Obj1.__proto__ === aObj ->", Obj1.__proto__ === aObj); // true


console.log(Obj1.a); // a string
console.log(Obj1.getName()); // aObj

function Child() {
  this.name = "child name";
}

let child = new Child();
console.log("child.a ->", child.a); // undefined

Child.prototype = Obj1;
let child2 = new Child();
console.log("child2.a ->", child2.a); // a string
