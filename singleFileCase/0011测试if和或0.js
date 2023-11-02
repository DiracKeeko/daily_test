/* 
  测试 
    1、先判断if再运算
    2、直接运算，用 || 0处理 
  哪种效率更高
*/

let baseArr = [undefined, 1];
let numArr = [1, 3];

for (let i = 2; i <= 25; i++) {
  baseArr = [...baseArr, ...baseArr];
  numArr = [...numArr, ...numArr];
}

// console.log("baseArr.length->", baseArr.length); // 数组长度 -> 2 ^ 25 = 33554432


console.time("sum if");
let sumIf = 0;

// for (let i = 0; i < numArr.length; i++) {
//   if (numArr[i] < 2) { // 32ms
//     sumIf += numArr[i];
//   }
// }

for (let i = 0; i < baseArr.length; i++) {
  // if (baseArr[i] !== undefined) { // 30ms;
  // if (baseArr[i] === 1) { // 142ms
  if (baseArr[i]) { // 43ms
    sumIf += baseArr[i];
  }
  /* 
  if (baseArr[i] === undefined) { // 36ms;
    sumIf += numArr[i];
  }
  */
} 
console.timeEnd("sum if"); // 43ms


/* 
console.time("sum or");
let sumOr = 0;
for (let i = 0; i < baseArr.length; i++) {
  sumOr += baseArr[i] || 0;
}
console.timeEnd("sum or"); // 40ms
 */

// 结论
/* 
  从快到慢的顺序 依次是:

  快
      [undefined || 数字] !== undefined      (30ms) 
      数字 > 数字                             (32ms)
      [undefined || 数字] === undefined      (36ms)    
      || 0                                   (40ms)
      [undefined || 数字] === true           (43ms)
  慢

*/