// Math.floor()统一向下取整
/* 
  1.5 -> 1
  1.6 -> 1
  1.9 -> 1
  2.0 -> 2

  -1.5 -> -2
  -1.6 -> -2
*/

// parseInt() 则是直接去掉小数点之后的数。(对于正数向下取整，对于负数向上取整)
/* 
  1.5 -> 1
  1.6 -> 1

  -1.5 -> -1
  -1.6 -> -1
*/

const [min, max] = [-2, -1];
// 在取随机数的场景中，只能用Math.floor(); (如果改用parseInt() 会在负数范围有异常)
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log("randomRange->", randomRange(min, max));

function randomRangeOdd(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min)
}

console.log("randomRangeOdd->", randomRangeOdd(min, max)); // 产生 [-1, 0] 之间的随机数
