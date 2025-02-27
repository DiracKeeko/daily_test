/* 
  %s 是占位符格式化的一种方式，类似于 printf

  %s;  打印字符串。
  %d 或 %i;	打印整数。支持数字格式化。例如，console.log("Foo %.2d", 1.1) 会输出有先导 0 的两位有效数字：Foo 01。
  %f;	打印浮点数。支持格式化，比如 console.log("Foo %.2f", 1.1) 会输出两位小数：Foo 1.10
  %o 或 %O;	打印 JavaScript 对象。在审阅器点击对象名字可展开更多对象的信息。

*/

let a = 1;
let b = "haha";

let intNum = 42;
let floatNum = 3.14

console.log("a-> %s;   b-> %s", a, b); // a-> 1;   b-> haha
console.log("a-> %d;   b-> %d", a, b); // a-> 1;   b-> NaN

console.log("Number: %d, Float: %f", intNum, floatNum); // Number: 42, Float: 3.14

console.log("Number: %d, Float: %f", floatNum, floatNum); // Number: 3.14, Float: 3.14

console.log("Object: %o", { name: "Alice", age: 25 });


