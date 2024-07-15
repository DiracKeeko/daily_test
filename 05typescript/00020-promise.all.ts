/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #中等 #array #promise

  ### 题目

  给函数`PromiseAll`指定类型，它接受元素为 Promise 或者类似 Promise 的对象的数组，返回值应为`Promise<T>`，其中`T`是这些 Promise 的结果组成的数组。

  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // 应推导出 `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)
  ```

  > 在 Github 上查看：https://tsch.js.org/20/zh-CN
*/

/* _____________ 你的代码 _____________ */

type PromiseFlat<T> = T extends Promise<infer R> ? PromiseFlat<R> : T;

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<
  {
    [K in keyof T]: PromiseFlat<T[K]>;
  }
>;

const promiseAllTest1 = PromiseAll([1, 2, 3] as const); // Promise<[1, 2, 3]>
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const); // Promise<[1, 2, number]>
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]); // Promise<[number, number, number]>
