// 测试 a = Math.max(a, b) 以及 a = a > b ? a : b; 这两种赋值语句的速度

let a = 1;
let b = 2;
const count = 100000;

console.time('Math.max');
for (var i = 0; i < count; i++) {
  a = Math.max(a, b);
}
console.timeEnd('Math.max');


console.time('二元算符');
for (var i = 0; i < count; i++) {
  a = a > b ? a : b;
}
console.timeEnd('二元算符');

console.time('if');
for (var i = 0; i < count; i++) {
  if (a < b) {
    a = b;
  }
}
console.timeEnd('if');

// 结论： if 最快，二元算符次快，Math.max最慢
/* 
Math.max: 2.293ms
二元算符: 1.486ms
if: 1.119ms

Math.max: 2.377ms
二元算符: 1.428ms
if: 1.378ms

Math.max: 2.199ms
二元算符: 1.376ms
if: 1.107ms
*/