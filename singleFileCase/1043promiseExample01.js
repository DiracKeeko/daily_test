/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  resolve();
  console.log("3");
}).then(() => {
  console.log("4");
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 4 5 1

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  // 没有明确的结果
  console.log("3");
}).then(() => {  // then() 不执行
  console.log("4"); 
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 1

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  reject();
  console.log("3");
}).catch(() => {
  console.log("4")
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 4 5 1

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  reject();
  console.log("3");
}).catch(() => {
  console.log("4"); // 进入这个catch (因为new Promise的状态是rejected)
}).catch(() => {
  console.log("5"); (但是这里没有rejected了，所以不会输出5)
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 4 1

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  reject();
  console.log("3");
}).catch(() => {
  console.log("4")
  reject();
}).catch(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 4 5 1

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  reject();
  console.log("3");
}).catch(() => {
  console.log("444");
  // reject();
  // 上下两行等价
  aaaa();
  console.log("4")
}).catch((a) => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 444 5 1
// 不同于new的过程, 实例中, 没有reject方法。因此, reject()之后报错, 就不会往下执行了

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  resolve();
  console.log("3");
}).catch(() => {
  console.log("4")
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 5 1
// 这部分的代码块，
// catch 和 then 都是Promise构造函数的直接后方，
// 不是.catch().then()这样的链式调用


setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  reject();
  console.log("3");
}).catch(() => {
  console.log("4");
  aaaa();
  // reject("---rejected---"); // 这里调用reject() 会报错 catch里找不到reject()方法，就像找不到aaaa()方法一样
}).catch((err) => {
  // 报错，就会被下一个catch捕捉到
  // console.log(err);  // 此处会报错  ReferenceError: aaaa is not defined
  console.log(err.message);  // aaaa is not defined
  console.log("5");
})
console.log("6");

// 上面代码块的输出结果  ↓
/* 
2 
3 
6 
4  
reject is not defined
5 
1 
*/


/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  resolve();
  console.log("3");
}).then(() => {
  console.log("4");
  return new Promise((resolve, reject) => {
    reject("rejected")
  });
}).catch((a) => {
  console.log("a->", a);
  console.log("5");
})
console.log("6"); 
*/
// 上面代码块的输出结果  ↓
/* 
2
3
6
4
a-> rejected
5
1
*/

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  setTimeout(() => {resolve();}) // 宏任务
  console.log("3");
}).then(() => {
  console.log("4");
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 1 4 5

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  return;
  console.log("3");
  resolve();
}).then(() => {
  console.log("4");
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 6 1
// return结束了promise的构造函数

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  resolve();
  console.log("3");
}).then(() => {
  return; // 结束了这个then
  console.log("4");
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 5 1

/* 
setTimeout(() => {
  console.log("1");
})
new Promise((resolve, reject) => {
  console.log("2");
  resolve();
  console.log("3");
}).then(() => {
  return new Promise((resolve, reject) => {});  
  // 返回一个永远 pending 的 promise，中断promise(非终止)
  console.log("4");
}).then(() => {
  console.log("5");
})
console.log("6");
 */
// 上面代码块的输出结果  2 3 6 1
