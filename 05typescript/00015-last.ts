/*
  15 - 最后一个元素
  -------
  by Anthony Fu (@antfu) #中等 #array

  ### 题目

  > 在此挑战中建议使用TypeScript 4.0

  实现一个`Last<T>`泛型，它接受一个数组`T`并返回其最后一个元素的类型。

  例如

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // 应推导出 'c'
  type tail2 = Last<arr2> // 应推导出 1
  ```

  > 在 Github 上查看：https://tsch.js.org/15/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 用pre会被ts提示 'pre' is declared but its value is never read
// type Last<T extends any[]> = T extends [...infer pre, infer L] ? L : never;

// v2 将pre 改为 '_'
// type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;

// v3 在前面补一个，再取length
type Last<T extends any[]> = [any, ...T][T['length']];

/* 
  总结:
    1. 在ts类型推断的时候 '...' 可以放在前面
    2. 可以用 T['length'] 来取一个数组的length 
*/



type arr1 = ['a', 'b', 'c']
type LastRes1 = Last<arr1>; // "c"