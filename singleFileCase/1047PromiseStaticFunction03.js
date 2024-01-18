// PromiseStaticFunction

/* 
  5. Promise.resolve() 静态方法将给定的值转换为一个 Promise。如果该值本身就是一个 Promise，那么该 Promise 将被返回(复用)。

    Promise.resolve(value)
      - value 要被该 Promise 对象解决的参数。也可以是一个 Promise 对象或一个 thenable 对象。

    注意：
      Promise.resolve() 不是返回一个 fulfilled 状态的promise
      
      它是将现有对象转为 Promise对象

    Promise.resolve('foo')
    // 等同于
    new Promise(resolve => resolve('foo'))
  
    参数可以分成四种情况，分别如下：
      1. 参数是一个 Promise 实例，promise.resolve将不做任何修改、原封不动地返回这个实例
      2. 参数是一个thenable对象，promise.resolve会将这个对象转为 Promise对象，然后就立即执行thenable对象的then()方法
      3. 参数不是具有then()方法的对象，或根本就不是对象，Promise.resolve()会返回一个新的 Promise 对象，状态为fulfilled
      4. 没有参数时，直接返回一个fulfilled状态的 Promise 对象

  6. Promise.reject() 静态方法返回一个已拒绝（rejected）的 Promise 对象，拒绝原因为给定的参数。
      Promise.reject(reason)

    const p = Promise.reject('出错了');
    // 等同于
    const p = new Promise((resolve, reject) => reject('出错了'))

    Promise.reject与 Promise.resolve 不同，Promise.reject 方法不会重用已存在的 Promise 实例。它始终返回一个新的 promise 实例，该实例封装了拒绝的原因（reason）
*/

function showPromiseResolve() {
  // Promise.resolve
  Promise.resolve('成功').then(
    (value) => {
      console.log(value); // "成功"
    },
    (reason) => {
      console.log('resaon->', reason);
      // 不会被调用
    }
  );

  const original = Promise.resolve(33);
  const cast = Promise.resolve(original);
  cast.then((value) => {
    console.log(`值：${value}`);
  });
  console.log(`original === cast -> ${original === cast}`);

  // 按顺序打印：
  // original === cast ? true
  // 值：33

  const or1 = Promise.reject('就是失败了');
  const cast1 = Promise.resolve(or1);
  cast1.then(
    (msg) => {
      console.log('use msg->', msg);
    },
    (error) => {
      console.error('use error', error);
    }
  );
}

showPromiseResolve();

async function showPromiseReject() {
  // Promise.reject
  Promise.reject(new Error('失败')).then(
    () => {
      // 不会被调用
    },
    (error) => {
      console.error(error.message); // Stacktrace
    }
  );

  const p = Promise.resolve(1);
  const rejected = Promise.reject(p);
  console.log('rejected === p ->', rejected === p); // false

  rejected.then(
    (msg) => {
      console.log('msg->', msg);
      // 不会被调用
    },
    (error) => {
      console.error('error === p ->', error === p);
    }
  );
  // 上下两种写法的结果一致
  /* 
  rejected.catch((v) => {
    console.log("v === p ->", v === p); // true
  }); 
  */
}

// showPromiseReject();
