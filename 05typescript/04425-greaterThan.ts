/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #中等 #array

  ### 题目

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > 在 Github 上查看：https://tsch.js.org/4425/zh-CN
*/

/* _____________ 你的代码 _____________ */
type NumberToArray<T extends number, U extends any[] = []> = U['length'] extends T ? U : NumberToArray<T, [...U, 1]>;
// 对超大的数字，NumberToArray 的执行深度过深，会推导不出结果。

// v1 不能全量通过  对相等的case判断异常
/* 
type GreaterThan<T extends number, U extends number> = 
  NumberToArray<T> extends [...NumberToArray<U>, ...infer _]
    ? true
    : false;
 */

// v2 换个位置  " 短的 extends [...长的, ...infer _] "
type GreaterThan<T extends number, U extends number> = 
  NumberToArray<U> extends [...NumberToArray<T>, ...infer _]
    ? false
    : true;

type GreaterThanRes = GreaterThan<1, 0>; // true
type GreaterThanRes1 = GreaterThan<6, 8>; // false
type GreaterThanRes2 = GreaterThan<10, 10>; // false


