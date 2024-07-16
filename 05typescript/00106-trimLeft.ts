/*
  106 - 去除左侧空白
  -------
  by Anthony Fu (@antfu) #中等 #template-literal

  ### 题目

  实现 `TrimLeft<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。

  例如

  ```ts
  type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
  ```

  > 在 Github 上查看：https://tsch.js.org/106/zh-CN
*/

/* _____________ 你的代码 _____________ */

type WhiteSpace = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer R}` ? TrimLeft<R> : S;
/* 
  总结:
    1. 学习这种字符串类型推断的写法
*/
type TrimLeftRes = TrimLeft<' str'>; // 'str'
type TrimLeftRes1 = TrimLeft<'   \n\t foo bar '>; // 'foo bar '
