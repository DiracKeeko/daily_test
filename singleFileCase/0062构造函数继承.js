function Parent() {
  this.sayHello = function () {
    console.log('Hello');
  };
}

Parent.prototype.a = "父类构造函数属性";

function Child() {
  Parent.call(this);
}

const child1 = new Child();
const child2 = new Child();

console.log(child1.sayHello === child2.sayHello); // false
console.log("child1.a->", child1.a); // undefined

