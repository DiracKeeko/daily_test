// ## var
var a = 10;
// console.log(window.a) // 10  // 浏览器环境
// console.log(global.a) // 10  // node环境

// var存在声明提升
console.log(b); // undefined
var b = 20;
/* 
  在编译阶段，编译器会将代码变成如下代码
  var b;
  console.log(b);
  b = 20;
*/

// var 可以对同一个变量进行多次声明
var c = 20;
var c = 30;
console.log('c->', c); // 30

// 函数中使用var声明变量，该变量的作用域是局部的
var d = 20;
function change() {
  var d = 30;
}
change();
console.log('d->', d); // 20


// ## let

// let 不存在声明提升 (声明变量la之前，变量la是不存在的，这时如果用到la，就会抛出一个错误)
// console.log(la); // 报错 ReferenceError: Cannot access 'la' before initialization
let la = 2;

// 有局部作用域
{
  let lb = 20;
}
// console.log(lb); // ReferenceError: lb is not defined.

// let 有暂时性死区 (只要块级作用域内存在let声明的变量(下面代码块中的lc)，这个块级作用域中的此变量就不再受外部影响)
var lc = 123;
var ld = 456
/* 
if (true) {
  ld = 'efg'; // 正常，不报错
  lc = 'abc'; // ReferenceError: Cannot access 'lc' before initialization
  let lc; // 这里 let lc 让代码块中出现了变量lc的暂时性死区
} 
*/
console.log({lc, ld});

// let不允许在相同作用域中重复声明
/* 
  let le = 20
  let le = 30
  // Uncaught SyntaxError: Identifier 'le' has already been declared
*/
// 相同作用域不能重复声明，但是不相同作用域则没问题
let lf = 20
{
    let lf = 30
}

// 因此不能在函数内部重新声明参数 (违背了相同作用域重复声明的问题)
/* 
function func(arg) {
  let arg;
}
func() 
*/
// SyntaxError: Identifier 'arg' has already been declared


// ## const
// const声明一个只读的常量，一旦声明，常量的值就不能改变

/* 
const ca = 1
ca = 3 
// TypeError: Assignment to constant variable.
*/

/* 
// const一旦声明变量，就必须立即初始化，(不能先声明再赋值)
const cb; // SyntaxError: Missing initializer in const declaration
cb = 1; 
*/

// 用var或let声明过变量，再用const声明同样会报错
// var cc = 1;
// let cd = 2;
const cc = 1; // SyntaxError: Identifier 'cc' has already been declared
const cd = 2;

// 注意：const实际上保证的是变量指向的那个内存地址所保存的数据不得改动

// 对于js中的基本数据类型，值就保存在变量名指向的那个内存地址，因此等同于常量
/* 
  但是对于js中的引用数据类型，变量名指向的内存地址中保存只是一个指向实际数据的指针
  const只能保证这个指针是固定的，并不能确保改变量的结构不变 
*/
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
console.log("foo.prop->", foo.prop) // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
