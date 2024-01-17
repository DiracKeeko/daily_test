// http请求
// 返回体结构 info = { code: returnCode, data: {...}, msg: "success" }
async function axiosLike(isSuccess, info = {}) {
  return new Promise((resolve, reject) => {
    if (isSuccess) {
      if (info.code === "0") {
        resolve(info.data);
      } else {
        reject(info.msg);
      }
    } else {
      throw "serve err";
      /* 
        err-> serve err
       */

      // throw new Error("serve err 01"); // 这种写法与上面写法的不同在于程序会指出报错位置
      /* 
        err-> Error: serve err 01
          at Promise (D:\project_daily_test\0043promiseExample02catch.js:13:13)
          at new Promise (<anonymous>)
      */
    }
  });
}

const tempInfoSuccess = {
  code: "0",
  data: { name: "mike", age: 15 },
  msg: "success",
};
const tempInfoFailed = {
  code: "2",
  data: { name: "mike", age: 15 },
  msg: "unknown exception",
};

async function handle1(isSuccess, info = {}) {
  try {
    const res = await axiosLike(isSuccess, info);
    console.log("001");
    console.log("res->", res);
  } catch (err) {
    console.log("err->", err);
  }
}

// handle1(true, tempInfoSuccess); // res-> { name: "mike", age: 15 }
// handle1(true, tempInfoFailed); // err-> unknown exception
// handle1(false); // err-> serve err  只要进入catch,await下面的同步语句也不在执行,不抛出“001”

// try...catch 的catch会捕获 reject()的状态,且能够拿到reject(err)中的err
// try...catch 的catch也会捕获 throw抛出的异常 并且也能拿到 throw err 的 err

function handle2(isSuccess, info = {}) {
  axiosLike(isSuccess, info)
    .then((res) => {
      console.log("res->", res);
    })
    .catch((err) => {
      console.log("err->", err);
    });
}

// handle2(true, tempInfoSuccess); // res-> { name: "mike", age: 15 }
// handle2(true, tempInfoFailed); // err-> unknown exception
// handle2(false); // err-> serve err

// Promise.then().catch() 中的catch会捕获 reject()的状态,且能够拿到reject(err)中的err
// Promise.then().catch() 中的catch也会捕获 throw抛出的异常 并且也能拿到 throw err 的 err

function handle3(isSuccess, info = {}) {
  try {
    axiosLike(isSuccess, info)
      .then((res) => {
        console.log("res->", res);
      })
      .catch((err) => {
        console.log("err in .then.catch ->", err);
      });
  } catch (err) {
    console.log("err in try...catch ->", err);
  }
}

// handle3(true, tempInfoFailed); // err in .then.catch -> unknown exception
// handle3(false); // err in .then.catch -> serve err
// .then.catch中catch的优先级高于try...catch...中的catch

function handle4(isSuccess, info = {}) {
  try {
    axiosLike(isSuccess, info).then((res) => {
      console.log("res->", res);
    });
  } catch (err) {
    console.log("err in try...catch ->", err);
  }
}

// handle4(true, tempInfoFailed); // 报错如下 ↓
/* 
  UnhandledPromiseRejectionWarning: unknown exception
  UnhandledPromiseRejectionWarning: Unhandled promise rejection. 
  This error originated either by throwing inside of an async function without a catch block, 
  or by rejecting a promise which was not handled with .catch(). 
*/
// try...catch 的catch不能处理rejected状态的promise.

// handle4(false); // 报错如下 ↓
/* 
  UnhandledPromiseRejectionWarning: serve err
  UnhandledPromiseRejectionWarning: Unhandled promise rejection. 
  This error originated either by throwing inside of an async function without a catch block, 
  or by rejecting a promise which was not handled with .catch().
*/
// throw err 也将promise实例变为了rejected状态,而try...catch 的catch不能处理

// 观察handle4()的两条执行结果,可以发现,异步结果中的报错,try...catch中的catch是无法处理的。

/* 
async function axiosLike(isSuccess, info = {}) {
  return new Promise((resolve, reject) => {
    if (isSuccess) {
      if (info.code === "0") {
        resolve(info.data);
      } else {
        reject(info.msg);
      }
    } else {
      reject(new Error("serve err")); // 建议使用reject，给 reject 方法传递一个Error类型的对象抛出错误。
    }
  });
}
 */
