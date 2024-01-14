// Promise 创建和使用 

let isDone = true;

// 一个在创建时结果就已知的promise
let aPromise = new Promise((resolve, reject) => {
  if(isDone) {
    resolve("正期完成");
  } else {
    reject("鸽了，咕咕咕");
  }
});

aPromise
  .then(result => {
    console.log("成功->", result);
  })
  .catch(result => {
    console.log("没成功->", result);
  })
  .finally(() => {
    console.log("改日再约");
  })
