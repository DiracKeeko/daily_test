// 数组解构发生了什么

/* 
const [x, y] = { x: 1, y: 2 };

console.log("x ->", x);
console.log("y ->", y);

// 直接运行会报错
// TypeError: {(intermediate value)(intermediate value)} is not iterable
 */

const obj = { x: 1, y: 2 };
obj[Symbol.iterator] = function* () {
  yield this.x;
  yield this.y;
}

const [x, y] = obj;

console.log("x ->", x);
console.log("y ->", y);