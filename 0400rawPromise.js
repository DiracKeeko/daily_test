let promise = new Promise((resolve, reject) => {
  // resolve("这次一定");
  // reject("下次一定");
  throw new Error("洗洗睡吧");
});

promise.then(
  (result) => {
    console.log(result);
  },
  (result) => {
    console.log(result.message);
  }
);
