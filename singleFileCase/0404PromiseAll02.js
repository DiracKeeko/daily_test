async function promiseTest() {
  const promise1 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    if (time < 120) {
      setTimeout(resolve, time, `one-${time}`);
    } else {
      setTimeout(reject, time, `error-one-${time}`);
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    if (time < 120) {
      setTimeout(resolve, time, `two-${time}`);
    } else {
      setTimeout(reject, time, `error-two-${time}`);
    }
  });

  /**
   * race只能防范住超时的异常，对接口本身(未超时)报错的处理，还需要借助.catch()
   */
  const res12 = Promise.race([
    promise1.catch((err) => err),
    promise2 // 如果promise2先执行完成，且返回的是reject的状态，由于没有.catch()会导致报错
  ]);

  /* 
  // 如果报错返回 "default value"
  const res12 = Promise.race([
    promise1.catch((err) => err),
    promise2.catch(() => "default value") // 如果promise2先执行完成，且返回的是reject的状态，由于没有.catch()会导致报错
  ]);
  */

  const promise3 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    setTimeout(resolve, time, `three-${time}`);
  });

  const promise4 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    setTimeout(resolve, time, `four-${time}`);
  });

  const res34 = Promise.race([promise3, promise4]);

  const [r12, r34] = await Promise.all([res12, res34]);
  console.log({ r12, r34 });
}

promiseTest();
