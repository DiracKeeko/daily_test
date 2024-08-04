/*
  3062 - Shift
  -------
  by jiangshan (@jiangshanmeta) #中等 #array

  ### 题目

  Implement the type version of ```Array.shift```

  For example

  ```typescript
  type Result = Shift<[3, 2, 1]> // [2, 1]
  ```

  > 在 Github 上查看：https://tsch.js.org/3062/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Shift<T extends any[]> = T extends [infer _, ...infer R] ? R : [];

type ShiftRes = Shift<[]>; // [];
type ShiftRes1 = Shift<[1]>; // [];
type ShiftRes2 = Shift<[3, 2, 1]>; // [2, 1];
