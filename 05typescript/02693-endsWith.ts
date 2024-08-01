/*
  2693 - EndsWith
  -------
  by jiangshan (@jiangshanmeta) #中等 #template-literal

  ### 题目

  实现`EndsWith<T, U>`,接收两个string类型参数,然后判断`T`是否以`U`结尾,根据结果返回`true`或`false`

  例如:

  ```typescript
  type a = EndsWith<'abc', 'bc'> // expected to be true
  type b = EndsWith<'abc', 'abc'> // expected to be true
  type c = EndsWith<'abc', 'd'> // expected to be false
  ```

  > 在 Github 上查看：https://tsch.js.org/2693/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1
// type EndsWith<T extends string, U extends string> = T extends `${infer _}${U}` ? true : false;

// v1变种
// type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;

// v2 递归 对比 02688 startsWith
type EndsWith<T extends string, U extends string> = T extends U
  ? true
  : T extends `${infer _}${infer R}`
    ? EndsWith<R, U>
    : false;

type EndWithRes = EndsWith<'abc', 'bc'>; // true