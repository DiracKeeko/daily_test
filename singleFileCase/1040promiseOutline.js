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

