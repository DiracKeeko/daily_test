console.log("01");
let promise = new Promise((resolve, reject) => {
  console.log("02");
  setTimeout(() => {
    resolve("这次一定");
    console.log("04");
  })
  // reject("下次一定");
  // throw new Error("洗洗睡吧");
});

promise.then(
  // ↓ 原生Promise中，传入的参数如果不是函数就要被忽略 (如undefined)
  (result) => {
    console.log(result);
  },
  (result) => {
    console.log(result.message);
  }
);

console.log("03");