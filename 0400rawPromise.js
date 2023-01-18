let promise = new Promise((resolve, reject) => {
  resolve("这次一定");
  reject("下次一定");
  // throw new Error("洗洗睡吧");
});

promise.then(
  // ↓ 原生Promise中，传入的参数如果不是函数就要被忽略
  // (result) => {
  //   console.log(result);
  // },
  undefined,
  (result) => {
    console.log(result.message);
  }
);
