
async function test() {

  const res1 = await new Promise((resolve) => {
    setTimeout(resolve, 400, 'success');
  });
  console.log("res1->", res1);

  // 上下两种写法的效果一样

  const res2 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, 400);
  });
  console.log("res2->", res2);
  
}

test();

/* 
  第一种写法，这个 Promise 直接将 resolve 作为回调传递给 setTimeout，并在 400 毫秒后通过 resolve 将 Promise 状态变为 resolved，传递的值是 'success'。

  第二种写法，这个 Promise 也是在 400 毫秒后通过 resolve 将状态变为 resolved，传递的值同样是 'success'。不同之处在于，这里使用了一个匿名函数作为 setTimeout 的回调，而在这个匿名函数内部调用 resolve。
*/