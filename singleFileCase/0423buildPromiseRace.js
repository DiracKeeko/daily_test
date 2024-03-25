function race(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach(promiseItem => {
      Promise.resolve(promiseItem)
        .then(val => resolve(val))
        .catch(err => reject(err))
    })
  });
}

const promise1 = new Promise((resolve, reject) => {
  const time = Math.floor(Math.random() * 100) + 100;
  if (time < 150) {
    setTimeout(resolve, time, `one-${time}`);
  } else {
    setTimeout(reject, time, `error-one-${time}`);
  }
});

const promise2 = new Promise((resolve, reject) => {
  const time = Math.floor(Math.random() * 100) + 100;
  if (time < 150) {
    setTimeout(resolve, time, `two-${time}`);
  } else {
    setTimeout(reject, time, `error-two-${time}`);
  }
});

race([promise1, promise2])
  .then((res) => {
    console.log('成功');
    console.log('res->', res);
  })
  .catch((err) => {
    console.log('失败');
    console.log('err->', err);
  });
