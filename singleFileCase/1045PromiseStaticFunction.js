// PromiseStaticFunction

/* 
  1. Promise.all()方法用于将多个 Promise实例，包装成一个新的 Promise实例

    const p = Promise.all([p1, p2, p3]);

    接受一个数组（迭代对象）作为参数，数组成员都应为Promise实例
    实例p的状态由p1、p2、p3决定，分为两种：

    若p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数
    若p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

  2. Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例
    只有等到所有这些参数实例都返回结果，(不管是fulfilled还是rejected) 包装实例才会结束

    它的返回结果是一个数组，其中每个元素是一个对象
      status
      一个字符串，要么是 "fulfilled"，要么是 "rejected"，表示 promise 的最终状态。

      value
      仅当 status 为 "fulfilled"，才存在。promise 兑现的值。

      reason
      仅当 status 为 "rejected"，才存在，promise 拒绝的原因。

      形如：
      [
        { status: 'fulfilled', value: 3 },
        { status: 'fulfilled', value: 1337 },
        { status: 'rejected', reason: 'bar' }
      ]
*/


async function showPromise() {
  // Promise.all 
  const p1 = Promise.resolve(3);
  const p2 = 1337;
  const p3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('foo');
    }, 100);
  });

  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('bar');
    }, 100);
  });

  const res = await Promise.all([p1, p2, p3]);
  console.log('res->', res); // res-> [ 3, 1337, 'foo' ]

  await Promise.all([p1, p2, p4])
    .then((resGood) => {
      console.log("fulfilled->");
      console.log('resGood->', resGood);
    })
    .catch((resBad) => {
      console.log("rejected->");
      console.log('resBad->', resBad); // resBad-> bar 注意这里的返回结果不是一个p1,p2,p4的结果数组，仅仅是p4的结果
    });

  // Promise.allSettled
  Promise.allSettled([p1, p2, p3, p4])
    .then((res) => {
      console.log('res in allSettled ->', res);
    })
    .catch((err) => {
      console.log('err in allSettled ->', err);
      /* 
        res in allSettled -> [
          { status: 'fulfilled', value: 3 },
          { status: 'fulfilled', value: 1337 },
          { status: 'fulfilled', value: 'foo' },
          { status: 'rejected', reason: 'bar' }
        ]
      */
    });
}

showPromise();
