// PromiseStaticFunction

/* 
  3. Promise.race() 静态方法接受一个 promise 可迭代对象作为输入，并返回一个 promise 实例。
      这个返回的 promise 实例会随着第一个 promise 的敲定而敲定。

    const p = Promise.race([p1, p2, p3]);

    Promise.race 的异步性
    与其他 promise 并发方法不同，Promise.race 总是异步的：即使 iterable 为空，它也永远不会同步地完成。


  4. Promise.any() 静态方法将一个 Promise 可迭代对象作为输入，并返回一个 Promise。
      当输入的任何一个 Promise 兑现时，这个返回的 Promise 将会兑现，并返回第一个兑现的值。
      当所有输入 Promise 都被拒绝（包括传递了空的可迭代对象）时，它会以一个包含拒绝原因数组的 AggregateError 拒绝。
      
      Promise.any([p1, p2, p3]) 如果在时间线上第一个拒绝，第二个兑现，第三个拒绝，那也会返回第二个兑现的结果。

  Promise.race() 和 Promise.any()的区别
    Promise.any() 会以第一个兑现的 Promise 来兑现，即使有 Promise 先被拒绝。
    这与 Promise.race() 不同，Promise.race() 会使用第一个敲定的 Promise 来兑现或拒绝。
*/

function sleep(time, value, state) {
  return new Promise((re, rj) => {
    setTimeout(() => {
      if (state === '兑现') {
        re(value);
      } else {
        rj(new Error(value));
      }
    }, time);
  });
}
async function showPromise() {
  // Promise.race
  const p1 = sleep(500, '一', '兑现');
  const p2 = sleep(100, '二', '兑现');
  Promise.race([p1, p2]).then((val) => {
    console.log('val p1 p2->', val);
  });

  const p3 = sleep(100, '三', '兑现');
  const p4 = sleep(500, '四', '拒绝');

  Promise.race([p3, p4]).then(
    (value) => {
      console.log('val p3 p4->', value); // “三”
      // p3 更快，所以它兑现
    },
    (error) => {
      // 不会被调用
    }
  );

  const p5 = sleep(500, '五', '兑现');
  const p6 = sleep(100, '六', '拒绝');

  Promise.race([p5, p6]).then(
    (value) => {
      // 不会被调用
    },
    (error) => {
      console.error('val p5 p6->', error.message); // “六”
      // p6 更快，所以它拒绝
    }
  );

  // 上下两种写法的效果一致 ( .then(funcRe, funcRj) 与 .then(funcRe).catch(funcRj) 效果一致)
  Promise.race([p5, p6])
    .then((value) => {
      // 不会被调用
    })
    .catch((error) => {
      console.error('use catch->', error.message); // “六”
      // p6 更快，所以它拒绝
    });
}

showPromise();

// Promise.race()的异步性
// 传入一个已经解决的 Promise 数组，以尽快触发 Promise.race。
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// 立即打印 p 的值
console.log(p); // !! 这里一定是 pending状态，必须等待下一个事件循环后 p才会变为fulfilled状态

// 使用 setTimeout，我们可以在堆栈为空后执行代码
setTimeout(() => {
  console.log('堆栈现在为空');
  console.log(p);
});

// 按顺序打印：
// Promise { <state>: "pending" }
// 堆栈现在为空
// Promise { <state>: "fulfilled", <value>: 33 }

// Promise.any()
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
const promise4 = Promise.reject(1);

Promise.any([promise1, promise2, promise3, promise4])
  .then((value) => console.log(value))
  .catch((error) => console.log(error)); // Expected output: "quick"

// Promise.any([promise1, promise4])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));
// [AggregateError: All promises were rejected] { [errors]: [ 0, 1 ] }
