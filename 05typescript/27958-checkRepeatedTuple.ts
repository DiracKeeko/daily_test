/*
  27958 - CheckRepeatedTuple
  -------
  by bowen (@jiaowoxiaobala) #中等

  ### 题目

  判断一个元组类型中是否有相同的成员

  For example:

  ```ts
  type CheckRepeatedTuple<[1, 2, 3]>   // false
  type CheckRepeatedTuple<[1, 2, 1]>   // true
  ```

  > 在 Github 上查看：https://tsch.js.org/27958/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1 我的实现
type CheckRepeatedTuple<T extends unknown[], P = never> = T extends [infer F, ...infer R]
? F extends P
  ? true
  : CheckRepeatedTuple<R, P | F>
: false;

// v2 用数组记录迭代结果
/* 
type CheckRepeatedTuple<T extends unknown[],U extends unknown[] = []> = 
T extends [infer F,...infer R]
  ? F extends U[number]
    ? true
    : CheckRepeatedTuple<R, [...U,F]>
  : false
*/

// v3 自我迭代
/* 
type CheckRepeatedTuple<T extends unknown[]> = T extends [infer L, ...infer R] 
? L extends R[number] 
  ? true 
  : CheckRepeatedTuple<R>
: false
 */

/* 
type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
]
*/