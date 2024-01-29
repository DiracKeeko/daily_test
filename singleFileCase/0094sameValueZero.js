function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x 和 y 相等（可能是 -0 和 +0）或它们都是 NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}

/* 
  == 宽松相等
  === 严格相等
  Object.is(a, b);
  sameValueZero(a, b);

  四种比较方式对不同a,b的结果
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#相等性方法比较
*/

console.log(sameValueZero(0, -0)); // true
console.log(sameValueZero(0, 0)); // true
console.log(sameValueZero(0, +0)); // true
console.log(sameValueZero(-0, +0)); // true


console.log("Object.is(0, -0) ->", Object.is(0, -0)); // false
console.log("Object.is(0, 0) ->", Object.is(0, 0)); // true
console.log("Object.is(0, +0) ->", Object.is(0, +0)); // true
console.log("Object.is(-0, +0) ->", Object.is(-0, +0)); // false
console.log("Object.is(-0, -0) ->", Object.is(-0, -0)); // true