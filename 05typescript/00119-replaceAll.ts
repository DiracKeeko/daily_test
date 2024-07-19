/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #中等 #template-literal

  ### 题目

  实现 `ReplaceAll<S, From, To>` 将一个字符串 `S` 中的所有子字符串 `From` 替换为 `To`。

  例如

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
  ```

  > 在 Github 上查看：https://tsch.js.org/119/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1 不能全量通过
/* 
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? ReplaceAll<`${L}${To}${R}`, From, To>
    : S;
 */

// v2 可以全量通过
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}` // 这一行的实现
  : S;


type ReplaceAllRes = ReplaceAll<'foobarfoobar', 'ob', 'b'>; // "fobarfobar"