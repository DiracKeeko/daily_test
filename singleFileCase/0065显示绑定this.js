//定义一个函数
function foo() {
  console.log(this);
}

// foo.call(window);
foo.call(global);
foo.call({ name: "Mi" }); // { name: 'Mi' }
foo.call(2333); // Number对象 [Number: 2333]


const obj = {
  name: "City"
}

const newFunc = foo.bind(obj);
console.log("newFunc() ↓");
newFunc();
