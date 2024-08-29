/*
  30301 - IsOdd
  -------
  by jiangshan (@jiangshanmeta) #中等 #string

  ### 题目

  return true is a number is odd

  > 在 Github 上查看：https://tsch.js.org/30301/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsOdd<T extends number> = `${T}` extends `${number | ""}${1 | 3 | 5 | 7 | 9}` ? true : false;

/* _____________ 测试用例 _____________ */
/* 
type cases = [
  Expect<Equal<IsOdd<5>, true>>,
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
] 
*/