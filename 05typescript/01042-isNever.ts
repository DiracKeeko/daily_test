/*
  1042 - IsNever
  -------
  by hiroya iizuka (@hiroyaiizuka) #中等 #union #utils

  ### 题目

  Implement a type IsNever, which takes input type `T`.
  If the type of resolves to `never`, return `true`, otherwise `false`.

  For example:

  ```ts
  type A = IsNever<never> // expected to be true
  type B = IsNever<undefined> // expected to be false
  type C = IsNever<null> // expected to be false
  type D = IsNever<[]> // expected to be false
  type E = IsNever<number> // expected to be false
  ```

  > 在 Github 上查看：https://tsch.js.org/1042/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1 使用00898中的 IsEqual, 有点取巧
// type IsNever<T> = IsEqual<never, T>;

// v2 正统写法
type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverRes = IsNever<never>; // true

/* 
  总结:
  不可以用 
    type IsNever<T> = T extends never ? true : false;
    因为 never extends never 的结果也是 false
*/
