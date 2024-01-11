// Es6 函数新增特性

// 五、箭头函数

/* 
  使用“箭头”（=>）定义函数
 */
var f = (v) => v;

// 等同于
var f = function (v) {
  return v;
};

/* 
  箭头函数  无参、一个参数、多个参数的定义方式
*/
let f0 = () => 5;
let f1 = (v) => v;
let f2 = (v1, v2) => v1 + v2;
// 箭头函数不需要参数或需要多个参数，就使用一个小括号代表参数部分。仅一个参数的时候可以不加小括号

/* 
  如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
*/
const absSum = (num1, num2) => {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  return num1 + num2;
};

/* 
  如果返回对象，且用简写语法，需要加括号将对象包裹
 */
const getTempItem = (id) => ({ id, name: 'Temp' });
// 这里如果写成 const getTempItem = (id) => { id, name: 'Temp' }; 会报语法错误

/* 
  箭头函数使用注意：
    1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
    2.不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
    3.箭头函数自身没有arguments对象，该对象在函数体内不存在。 它的arguments对象是从外层函数中继承而来的。

    4. 箭头函数不能用作 Generator 函数 (不可以使用yield命令)
*/

// 解释1. 箭头函数没有自己的 this 绑定，它会捕获所在上下文的 this 值，即在定义时的外层作用域的 this。
// 这是箭头函数的一个特性，与普通函数不同，普通函数的 this 值在运行时才确定。
function RegularFunction() {
  this.value = 1;
  setTimeout(function () {
    this.value++;
    console.log(this.value); // 在这里，this 指向全局对象（浏览器环境下通常是 window）
  }, 10);
}

function ArrowFunction() {
  this.value = 1;
  setTimeout(() => {
    this.value++;
    console.log(this.value); // 在这里，this 指向 ArrowFunction 的实例
  }, 10);
}

RegularFunction(); // 输出 NaN，因为在 setTimeout 内部的函数中，this 指向全局对象
ArrowFunction(); // 输出 2，因为箭头函数捕获了外层作用域的 this
// 下面也一样
// new RegularFunction(); // 输出 NaN，因为在 setTimeout 内部的函数中，this 指向全局对象
// new ArrowFunction();   // 输出 2，因为箭头函数捕获了外层作用域的 this

// 解释 2.不可以当作构造函数：
// 箭头函数没有自己的 this，因此不能通过 new 关键字来调用。构造函数要求有自己的实例对象，而箭头函数没有这个能力。
const Example = () => {
  this.value = 42;
};

// const instance = new Example(); // TypeError: Example is not a constructor

// 解释3.不可以使用 arguments 对象：
// 箭头函数没有 arguments 对象，它会捕获所在上下文的 arguments 值。如果需要获取函数参数，可以使用 rest 参数来替代。
const regularFunction = function (a = 1, b = 2) {
  console.log("regularFunction->", arguments); // 可以访问到函数的参数 
};

const arrowFunctionOuter = function(a = 1, b = 2) {
  const inner = (c, d) => {
    console.log('arrowFunction ->', arguments); // 指向运行环境的arguments 这里是arrowFunctionOuter的arguments
  };
  inner(3, 4);
}

regularFunction(); // [Arguments] {}
regularFunction(5, 6); // [Arguments] { '0': 5, '1': 6 }

arrowFunctionOuter(); // [Arguments] {}
arrowFunctionOuter(7, 8); // [Arguments] { '0': 7, '1': 8 } 注意，不是{3, 4}


// 4. 箭头函数不能用作 Generator 函数 (不可以使用yield命令)

// 可以用作Generator函数的样子
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// Expected output: 0

console.log(iterator.next().value);
// Expected output: 1
