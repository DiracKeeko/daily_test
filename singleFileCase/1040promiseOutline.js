// Promise

/* 
  Promise是一种处理异步编程的解决方案。
    对比传统的回调函数处理异步编程的方案
    1. 使用Promise避免了多层回调函数的嵌套
    2. promise.then()可以链式调用，降低了编码难度
    3. promise.then()增加了代码的可读性

  一个promise实例代表一个创建时结果未定的状态，这个promise实例的状态可以在将来的某个时间节点被确定。

  一个 Promise 必然处于以下几种状态之一：
    待定（pending）：初始状态，既没有被兑现，也没有被拒绝。
    已兑现（fulfilled）：意味着操作成功完成。
    已拒绝（rejected）：意味着操作失败。
*/

/* 
  用 new Promise(function(resolve, reject) { resolve() || reject() } 创建promise实例
    参数：
    resolve是一个function，调用resolve()，将promise实例变更为fulfilled状态。可以在调用resolve的时候传递参数给then方法。
    reject也是一个function，调用reject()，将promise实例变更为rejected状态。可以在调用reject()的时候传递参数给catch方法。

    改变promise实例的状态：
    1、resolve() 可以改变状态 (变为fulfilled)  
        如果在resolve([someMessage]) 传递一些信息，这些信息可以被后面的 .then((someMessage) => {}) 接收到。
    2、reject() 可以改变状态  (变为rejected)
        如果在reject([someError]) 传递一个错误信息，这个错误信息可以被后面的 .catch((someError) => {}) 接收到。
    3、throw "an error"; 抛出错误的方式也可以改变状态。 (变为rejected)
        throw出来的"an error" 也可以被.catch((someError) => {}) 接收到。
*/

async function axiosLike(isSuccess, info = {}) {
  return new Promise((resolve, reject) => {
    if (isSuccess) {
      if (info.code === "0") {
        resolve(info.data);
      } else {
        reject(info.msg);
      }
    } else {
      new Error("serve err");
    }
  });
}

/* 
  一个promise实例上有下面的方法 (Promise.prototype.function)
    1. then()
    2. catch()
    3. finally()

    1. then是实例状态发生改变时的回调函数，第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数
        then方法返回的是一个 promise 实例，也就是promise能链式书写的原因

    2. catch, Promise 实例的 catch() 方法用于注册一个在 promise 被拒绝时调用的函数。
        catch方法返回一个 promise 实例，这可以允许你链式调用其他 promise 的方法。
        
        catch方法是 Promise.prototype.then(undefined, onRejected) 的一种简写形式
    
    3. finally, Promise 实例的 finally() 方法用于注册一个在 promise 敲定（兑现或拒绝）时调用的函数。
        finally() 会返回一个 promise 实例，这可以允许你链式调用其他 promise 方法。
*/

/* 
  Promise构造函数方法 (静态方法)  (Promise.function)

  Promise构造函数存在以下方法：
    all()
    allSettled()
    race()
    any()
    resolve()
    reject()
 */