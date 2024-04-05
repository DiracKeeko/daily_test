// 柯里化

function sum(a, b, c) {
  console.log(a + b + c);
}

function curry(fn) {
  return function curried(...args) {
    console.log("args->", args);
    if (args.length >= fn.length) {
      // 如果参数的个数达到length，执行原函数
      return fn.apply(this, args);
    } else {
      // 如果参数的个数没有达到length，返回一个新的函数
      return function(...args2) {
        console.log("args2->", args2);
        return curried.apply(this, [...args, ...args2]);
      }
    }
  }
}

let _sum = curry(sum);
let functionA = _sum(1);
let functionB = functionA(2);
functionB(3)