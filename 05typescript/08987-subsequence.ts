/*
  8987 - Subsequence
  -------
  by jiangshan (@jiangshanmeta) #中等 #union

  ### 题目

  Given an array of unique elements, return all possible subsequences.

  A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

  For example:

  ```typescript
  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
  ```

  > 在 Github 上查看：https://tsch.js.org/8987/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 最佳实现
type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
? [F] | [...Subsequence<R>] | [F, ...Subsequence<R>]
: []

// v2 作者实现版本
// type Subsequence<T extends any[], Prefix extends any[] = []> = T extends [infer F, ...infer R]
//   ? Subsequence<R, Prefix | [...Prefix, F]>
//   : Prefix;
