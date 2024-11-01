// 如果数组 数据量很大的时候，使用 拓展运算符 会直接崩掉

const len = 1000000;
const arr = new Array(len).fill(0);

const data = [];
data.push(...arr); // RangeError: Maximum call stack size exceeded

/* 
  通过 Babel 编译后可知，push 方法最终会编译成 apply

  var arr = new Array(1000000);
  data.push.apply(items,newItems);

  // 一个方法传入过多参数（比如一万个）时，异常结果在不同JavaScript引擎中表现不同
*/

// 在数据可能量比较大的时候，不应该使用拓展运算符，而是改为使用循环 或 concat

for (const item of arr) {
  data.push(item);
}

// 或
arr.forEach(item => data.push(item));

// 或
arr.concat(data);