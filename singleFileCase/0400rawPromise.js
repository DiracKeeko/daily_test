console.log('01');
let promise = new Promise((resolve, reject) => {
  console.log('02');
  /* setTimeout(() => {
    resolve('这次一定');
    console.log('04');
  }, 200); */

  setTimeout(() => {
    reject('错了');
    console.log('05');
    throw new Error("洗洗睡吧");
  }, 200);
  // reject("下次一定");
  // throw new Error("洗洗睡吧");
});

/* promise.then(
  // ↓ 原生Promise中，传入的参数如果不是函数就要被忽略 (如undefined)
  (result) => {
    console.log('进入resolve');
    console.log(result);
  },
  (res) => {
    console.log('进入reject');
    console.log(res);
  }
); */

promise
  .then(
    // ↓ 原生Promise中，传入的参数如果不是函数就要被忽略 (如undefined)
    (result) => {
      console.log('进入resolve');
      console.log(result);
    },
    (res) => {
      console.log('进入reject');
      console.log(res);
    }
  )
  .catch((err) => {
    console.log('进入catch');
    console.log(err);
  });

console.log('03');
