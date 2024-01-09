// Es6 函数新增特性

// 一、函数的参数设置默认值 (ES6允许为函数的参数设置默认值)
function log(x, y = 'World') {
  console.log(x, y);
}

console.log('Hello'); // Hello World
console.log('Hello', 'China'); // Hello China
console.log('Hello', 'hh'); // Hello hh

// 参数默认值可以与解构赋值的默认值结合起来使用
function foo({ x, y = 5 }) {
  console.log(x, y);
}

foo({}); // undefined 5
foo({ x: 1 }); // 1 5
foo({ x: 1, y: 2 }); // 1 2

// 下面这行会报错
// foo(); // TypeError: Cannot read property 'x' of undefined
// 当参数为对象的时候才能进行解构，没有提供参数的时候，变量x和y就不会生成，从而报错

/* 
  优化:
  function foo({x, y = 5} = {}) {
    console.log(x, y);
  }

  function foo({x, y = 5} = {}) {
    console.log(x, y);
  }

  foo() // undefined 5
*/

// 注意： 参数默认值应该是函数的尾参数，如果不是非尾部的参数设置默认值，实际上这个参数是无法省略的
function test(x = 1, y) {
  return [x, y];
}

test(); // [1, undefined]
test(2); // [2, undefined]
// test(, 1) // 报错
test(undefined, 1); // [1, 1]

console.log('================Function==============');

// 二、ES6函数新增属性
// 1. name 返回该函数的函数名
var f = function () {};

// ES5
console.log(f.name); // ""

// ES6
console.log(f.name); // "f"

/* 
  如果将一个具名函数赋值给一个变量，则 name 属性都返回这个具名函数原本的名字
 */

const bar = function instance() {};
console.log(bar.name); // "instance"

/* 
  Function构造函数返回的函数实例，name属性的值为anonymous
*/
console.log(new Function().name); // "anonymous"

/* 
  bind返回的函数，name属性值会加上bound前缀
 */

function foo() {};
const bindRes = foo.bind({}).name // "bound foo"
console.log("bindRes->", bindRes);

const bindRes2 = (function(){}).bind({}).name // "bound "
console.log("bindRes2->", bindRes2);

// 2. length 返回函数期望的参数数量 (没有指定默认值的参数个数)
/* 
  特性：
    1、rest 参数不会计入length属性
    2、设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
      即：(只计算第一个具有默认值的参数之前的参数)
*/
console.log("=========length↓=========");
console.log(Function.length); // 1 固定为1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2，依此类推

console.log(((...args) => {}).length); // 0，剩余参数不计算在内

console.log(((a, b = 1, c) => {}).length); // 1，只计算第一个具有默认值的参数之前的参数
console.log(((a, b, c = 1, d) => {}).length); // 2，只计算第一个具有默认值的参数之前的参数

