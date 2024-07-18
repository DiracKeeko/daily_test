/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #中等 #template-literal

  ### 题目

  实现 `Replace<S, From, To>` 将字符串 `S` 中的第一个子字符串 `From` 替换为 `To` 。

  例如

  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'
  ```

  > 在 Github 上查看：https://tsch.js.org/116/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${R}`
    : S;

type ReplaceRes = Replace<'foobarbar', 'bar', 'foo'>; // 'foofoobar'
type ReplaceRes1 = Replace<'foobarbar', '', 'foo'>; //  'foobarbar'  空串不替换

/* 
  总结：
    不同于 00110-capitalize 中的 type MyCapitalize<S extends string> = S extends `${infer F}${infer R}`
    
    本题 对明确的类型 (From extends string) 不可以使用 S extends `${infer L}${infer From}${infer R}`
    要使用 S extends `${infer L}${From}${infer R}`
*/