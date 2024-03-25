function all(promiseArr) {
  const size = promiseArr.length;
  return new Promise((resolve, reject) => {
    const fulfilledArr = Array(size);
    let fulfilledCount = 0;
    promiseArr.forEach((promiseItem, index) => {
      Promise.resolve(promiseItem)
        .then((val) => {
          fulfilledCount += 1;
          fulfilledArr[index] = val;
          if (fulfilledCount === promiseArr.length) {
            resolve(fulfilledArr);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const promise1 = new Promise((resolve, reject) => {
  const time = Math.floor(Math.random() * 100) + 100;
  if (time < 180) {
    setTimeout(resolve, time, `one-${time}`);
  } else {
    setTimeout(reject, time, `error-one-${time}`);
  }
});

const promise2 = new Promise((resolve, reject) => {
  const time = Math.floor(Math.random() * 100) + 100;
  if (time < 180) {
    setTimeout(resolve, time, `two-${time}`);
  } else {
    setTimeout(reject, time, `error-two-${time}`);
  }
});

all([promise1, promise2])
  .then((res) => {
    console.log('全部成功');
    console.log('res->', res);
  })
  .catch((err) => {
    console.log('至少有一个失败');
    console.log('err->', err);
  });
