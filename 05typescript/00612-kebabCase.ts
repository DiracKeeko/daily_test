/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #中等 #template-literal

  ### 题目

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > 在 Github 上查看：https://tsch.js.org/612/zh-CN
*/

/* _____________ 你的代码 _____________ */

type KebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<F>}${KebabCase<R>}`
    : `${Uncapitalize<F>}-${KebabCase<R>}`
  : S; // 只有空串会走到这个逻辑分支

// 理解infer 对字符串的拆分 关联00459
type T6 = '' extends `${infer F}${infer R}` ? R : never; // T6 = never
type T7 = 'A' extends `${infer F}${infer R}` ? R : never; // T7 = ""
type T8 = 'AB' extends `${infer F}${infer R}` ? R : never; // T8 = "B"
type T9 = 'ABC' extends `${infer F}${infer R}` ? R : never; // T9 = "BC"

type T6R = '' extends `${infer F}${infer R}` ? true : false; // T6R = false
type T7R = 'A' extends `${infer F}${infer R}` ? true : false; // T7R = true


type UncapitalizeRes1 = Uncapitalize<'Hello'>; // 'hello'
type UncapitalizeRes2 = Uncapitalize<'WORLD'>; // 'wORLD'

/* 
  解释:
    1. 空串 '' 不符合 `${infer F}${infer R}`

    2. 使用 Uncapitalize<T> 可以将单词首字母转成小写字母，
      通过判断单词开头是不是小写字母来反推逻辑，
      如果是小写字母我们就继续判断下一个，如果是大写字母，我们就加个 - ，继续判断
*/

