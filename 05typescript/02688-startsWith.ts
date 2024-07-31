/*
  2688 - StartsWith
  -------
  by jiangshan (@jiangshanmeta) #中等 #template-literal

  ### 题目

  实现`StartsWith<T, U>`,接收两个string类型参数,然后判断`T`是否以`U`开头,根据结果返回`true`或`false`

  例如:

  ```typescript
  type a = StartsWith<'abc', 'ac'> // expected to be false
  type b = StartsWith<'abc', 'ab'> // expected to be true
  type c = StartsWith<'abc', 'abcd'> // expected to be false
  ```

  > 在 Github 上查看：https://tsch.js.org/2688/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1
// type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}`
//   ? true
//   : false;

// v1变种
// type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
//   ? true
//   : false;

// v2
type StartsWith<T extends string, U extends string> = U extends `${infer F}${infer RU}`
  ? T extends `${F}${infer RT}`
    ? StartsWith<RT, RU>
    : false
  : true;

type StartWithRes = StartsWith<'abc', 'ab'>;