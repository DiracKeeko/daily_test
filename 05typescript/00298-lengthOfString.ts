/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #中等 #template-literal

  ### 题目

  计算字符串的长度，类似于 `String#length` 。

  > 在 Github 上查看：https://tsch.js.org/298/zh-CN
*/

/* _____________ 你的代码 _____________ */

type StringToArray<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : []
type LengthOfString<S extends string> = StringToArray<S>['length'];

type LengthOfStringRes1 = LengthOfString<''>; // 0
type LengthOfStringRes2 = LengthOfString<'hello'>; // 5

/* 
  总结：
    必须是数组(元组) 才有length属性 (T['length'])
*/
