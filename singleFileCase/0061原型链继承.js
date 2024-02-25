// 原型链继承
function Parent() {
  this.name = "parent";
}

Parent.prototype.getName = function() {
  return this.name;
}

function Child() {
  this.name = "child";
}

// 重点  子类继承父类，就在这里
Child.prototype = new Parent();

let child = new Child();
console.log("child.getName->", child.getName()); // "child.getName-> child"