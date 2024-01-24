// Promise.race() 可以用来给接口设置超时时间，返回默认值
async function promiseTest() {
  const promise1 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    setTimeout(resolve, time, `one-${time}`);
  });

  const promise2 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    setTimeout(resolve, time, `two-${time}`);
  });

  const res12 = await Promise.race([promise1, promise2]);
  console.log("res12->", res12);
  
  const promise3 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    setTimeout(resolve, time, `three-${time}`);
  });
  
  const promise4 = new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 100) + 100;
    setTimeout(resolve, time, `four-${time}`);
  });
  
  const res34 = await Promise.race([promise3, promise4]);
  console.log("res34->", res34);
}

promiseTest();