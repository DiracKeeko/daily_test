/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #中等 #template-literal

  ### 题目

  实现 `TrimRight<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。

  例如

  ```ts
  type Trimed = TrimRight<'  Hello World  '> // 应推导出 '  Hello World'
  ```

  > 在 Github 上查看：https://tsch.js.org/4803/zh-CN
*/

/* _____________ 你的代码 _____________ */
type BlankChar = ' ' | '\n' | '\t';
type TrimRight<S extends string> = S extends `${infer L}${BlankChar}`
  ? TrimRight<L>
  : S

/* 
  之前有过类似的Trim题目，有点为混PR而提交那味儿了。
*/

/* 
type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]
*/