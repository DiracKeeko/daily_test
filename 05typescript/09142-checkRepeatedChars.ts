/*
  9142 - CheckRepeatedChars
  -------
  by Hong (@RThong) #中等 #union #string

  ### 题目

  判断一个string类型中是否有相同的字符
  ```ts
  type CheckRepeatedChars<'abc'>   // false
  type CheckRepeatedChars<'aba'>   // true
  ```

  > 在 Github 上查看：https://tsch.js.org/9142/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 最佳实现
// type CheckRepeatedChars<T extends string, U extends string = never> = T extends `${infer F}${infer R}`
// ? F extends U
//   ? true
//   : CheckRepeatedChars<R, U | F>
// : false;

type CheckRepeatedChars<T extends string, U extends Record<string, boolean> = {}> = T extends `${infer F}${infer R}`
? U[F] extends true
  ? true
  : CheckRepeatedChars<R, U & Record<F, true> > // 这里如果用 U & { [F]: true } 会ts报错，要换用Record<F, true>
: false;

type CheckRepeatedCharsRes = CheckRepeatedChars<'abc'>;