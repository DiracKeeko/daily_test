/*
  7544 - Construct Tuple
  -------
  by Lo (@LoTwT) #中等 #tuple

  ### 题目

  构造一个给定长度的元组。

  例如

  ```ts
  type result = ConstructTuple<2> // 期望得到 [unknown, unkonwn]
  ```

  > 在 Github 上查看：https://tsch.js.org/7544/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ConstructTuple<L extends number, U extends unknown[] = []> = U['length'] extends L
  ? U
  : ConstructTuple<L, [...U, unknown]>;
