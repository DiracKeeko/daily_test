//定义一个函数
function foo() {
  console.log(this);
}

//1.调用方式一：直接调用
foo(); // 浏览器环境: window  node.js环境 <ref *1> Object [global] 

//2.调用方式二：将foo放到一个对象中，再调用
var obj = {
  name: 'keeko',
  foo: foo
};
console.log("No.2");
obj.foo(); // obj对象

// 3.调用方式三：通过call或者apply调用
console.log("No.3");
foo.call('ctgu'); // String {"ctgu"}对象



function sayName() {
  console.log(this.name);
}

const obj1 = {
  name: 'obj1',
  sayName: sayName
};

const obj2 = {
  name: 'obj2',
  obj1: obj1
};

obj2.obj1.sayName(); // obj1