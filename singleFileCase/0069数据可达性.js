// 全局变量可以被视为根，因此他们是可达的
const globalVariable = {
  name: "I'm a global variable"
};

// 函数的参数和内部变量也是可达的
function someFunction(someArgs) {
  let variableInFunc = {
    name: "I'm a variable inside a func"
  };
  console.log('someArgs->', someArgs);
  console.log('variableInFunc->', variableInFunc);
}

someFunction('an arg');

/* 
  函数本身是可达的，函数本身在script执行完毕之前都不会被销毁。

  函数的参数和函数内部的变量也是可达的:
  - 在运行这个函数的时候，我们函数所使用到的参数，以及开发者在函数内部定义的变量不会被垃圾回收
  - 在函数执行完毕之后，函数作用域被销毁，函数所用到的参数，内部定义的对象都会被销毁
*/

// 对象的属性也是可达的，因为它们可以通过对象引用链从根访问
let objectA = {
  objectProperty: {
    name: "I'm a property of an object"
  }
};

console.log(objectA.objectProperty);
