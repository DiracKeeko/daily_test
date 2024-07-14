/*
  12 - 可串联构造器
  -------
  by Anthony Fu (@antfu) #中等 #application

  ### 题目

  在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给它赋上类型吗？

  在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 `option(key, value)` 和 `get()`。在 `option` 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 `get` 获取最终结果。

  例如

  ```ts
  declare const config: Chainable

  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

  // 期望 result 的类型是：
  interface Result {
    foo: number
    name: string
    bar: {
      value: string
    }
  }
  ```

  你只需要在类型层面实现这个功能 - 不需要实现任何 TS/JS 的实际逻辑。

  你可以假设 `key` 只接受字符串而 `value` 接受任何类型，你只需要暴露它传递的类型而不需要进行任何处理。同样的 `key` 只会被使用一次。

  > 在 Github 上查看：https://tsch.js.org/12/zh-CN
*/

/* 
// 过程见 https://github.com/type-challenges/type-challenges/issues/13951
// v1 略微有点冗长
type Chainable<R = {}> = {
  option: <K extends string, V>(key: K extends keyof R
    ? V extends R[K] 
      ? never 
      : K
    : K, value: V) 
    => Chainable<Omit<R, K> & Record<K, V>>;
  get(): R;
}
 */
/* 
  1. 要注意的是 option 是一个属性，这个属性的值是函数，这里给函数加类型限制。
  2. 注意 同名K的处理
  3. 思路是 使用 R = {} 来作为默认值，甚至默认参数与默认返回值，再通过递归传递 R 即可实现递归全局记录
*/


// 最新的题目，要求同key不同类型的value也一样报错，但是结果仍被覆盖。
// v2 省略了 同K的判断，直接用后面K的类型，覆盖前面的K的类型
type Chainable<R = {}> = {
  option: <K extends string, V>(
    key: K extends keyof R ? never : K,
    value: V
  ) => Chainable<Omit<R, K> & Record<K, V>>;
  get: () => R;
};


/* 
// v3
type Chainable<R extends Record<string, any> = {}> = {
  option: <K extends string, V>(
    key: K extends keyof R ? never : K,
    value: V
  ) => Chainable<Omit<R, K> & Record<K, V>>;
  get(): R;
};
 */
declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};
