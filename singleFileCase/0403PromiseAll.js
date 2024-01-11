async function promiseTest() {
  const promise1 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random(100) * 100) + 100;
    setTimeout(resolve, time, `one-${time}`);
  });

  const promise2 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random(100) * 100) + 100;
    setTimeout(resolve, time, `two-${time}`);
  });

  const res12 = Promise.race([promise1, promise2]);

  const promise3 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random(100) * 100) + 100;
    setTimeout(resolve, time, `three-${time}`);
  });

  const promise4 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random(100) * 100) + 100;
    setTimeout(resolve, time, `four-${time}`);
  });

  const res34 = Promise.race([promise3, promise4]);

  const [r12, r34] = await Promise.all([res12, res34]);
  console.log({ r12, r34 });
}

promiseTest();
