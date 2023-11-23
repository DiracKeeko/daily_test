const arr = [1, 2, 3, 2, 1];

const res1 = arr.slice(0).sort((a, b) => a - b);
console.log({res1}); // { res1: [ 1, 1, 2, 2, 3 ] }
const res2 = arr.slice(0).sort((a, b) => a > b);
console.log({res2}); // { res2: [ 1, 2, 3, 2, 1 ] }

const res3 = arr.slice(0).sort((a, b) => b - a);
console.log({res3}); // { res3: [ 3, 2, 2, 1, 1 ] }
const res4 = arr.slice(0).sort((a, b) => a < b);
console.log({res4}); // { res4: [ 1, 2, 3, 2, 1 ] }

// sort的返回值 必须得是数字，才能保证返回结果的正确性 (布尔值根本就没有效果)
/* 
      如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
 * 		如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
 *      备注： ECMAScript 标准并不保证这一行为，
 *            而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
 * 		如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
*/