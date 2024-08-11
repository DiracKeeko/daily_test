/*
  5140 - Trunc
  -------
  by jiangshan (@jiangshanmeta) #中等 #template-literal

  ### 题目

  Implement the type version of ```Math.trunc```, which takes string or number and returns the integer part of a number by removing any fractional digits.

  For example:

  ```typescript
  type A = Trunc<12.34> // 12
  ```

  > 在 Github 上查看：https://tsch.js.org/5140/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Trunc<T extends string | number> = `${T}` extends `${infer F}.${infer _}` ? F : `${T}`;

/* 
  这题原作者的答案就是这样，估计case后来被改了，代码实现面目全非(加很多边界条件)
  https://github.com/type-challenges/type-challenges/issues/5142
  
  理解核心思想是转换为字符串就行了。
  
*/