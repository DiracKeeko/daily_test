function foo() {
  if (this.name) {
    console.log("this.name->", this.name);
  } else {
    console.log(this);
  }
}

const obj1 = {
  name: "obj1",
  foo
}

const obj2 = {
  name: "obj2",
  foo
}

// 隐式绑定
obj1.foo(); // this.name-> obj1
obj2.foo(); // this.name-> obj2

// 显式绑定与隐式绑定同时存在
obj1.foo.call(obj2); // this.name-> obj2
// 显式绑定优先级高于隐式绑定

// new绑定与隐式绑定同时存在
new obj1.foo(); // foo {}
// new绑定优先级高于隐式绑定

// new绑定与显式绑定同时存在
const bar = foo.bind({name: "bind obj"});
new bar(); // foo {}
// new绑定优先级高于显式绑定


