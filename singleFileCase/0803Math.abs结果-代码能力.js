const ex1 = 0;
const ex2 = 1;
const ex3 = -3;
console.log("Math.abs 0 -> ", Math.abs(ex1));
console.log("Math.abs 1 -> ", Math.abs(ex2));
console.log("Math.abs -3 -> ", Math.abs(ex3));

const ex4 = null;
console.log("Math.abs null -> ", Math.abs(ex4)); // 0
/* 
  Math.abs() 期望接收一个数值类型的参数。
  null 在进行数学运算时，会先转换为 0。 (JavaScript 认为 null 代表“无值”或“空值”。 )
  因此，Math.abs(null) 的结果是 0。
 */

const ex5 = undefined;
console.log("Math.abs undefined -> ", Math.abs(ex5)); // NaN
/* 
  Math.abs() 期望接收一个数值类型的参数。
  undefined 在进行数学运算时，无法转换成有效数值，会变成 NaN（Not a Number）。
    (在 JavaScript 中，undefined 代表的是“未定义的值”, JavaScript 不能推断它的数值意义)
  所以 Math.abs(undefined) 结果是 NaN。
 */