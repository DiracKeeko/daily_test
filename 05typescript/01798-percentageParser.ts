/*
  1978 - Percentage Parser
  -------
  by SSShuai1999 (@SSShuai1999) #中等 #template-literal

  ### 题目

  实现类型 PercentageParser<T extends string>。根据规则 `/^(\+|\-)?(\d*)?(\%)?$/` 匹配类型 T。

  匹配的结果由三部分组成，分别是：[`正负号`, `数字`, `单位`]，如果没有匹配，则默认是空字符串。

  例如：

  ```ts
  type PString1 = ''
  type PString2 = '+85%'
  type PString3 = '-85%'
  type PString4 = '85%'
  type PString5 = '85'

  type R1 = PercentageParser<PString1> // expected ['', '', '']
  type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
  type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
  type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
  type R5 = PercentageParser<PString5> // expected ["", "85", ""]
  ```

  > 在 Github 上查看：https://tsch.js.org/1978/zh-CN
*/


/* _____________ 你的代码 _____________ */

type PercentageParser<A extends string> = A extends `${infer F}${infer R}`
  ? F extends ('+' | '-')
    ? R extends `${infer N}%`
      ? [F, N, '%']
      : [F, R, '']
    : A extends `${infer N}%`
      ? ['', N, '%']
      : ['', A, '']
  : ['', '', ''];

type PercentageParserRes = PercentageParser<'88%'>; // ["", "88", "%"]