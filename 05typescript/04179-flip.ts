/*
  4179 - Flip
  -------
  by Farhan Kathawala (@kathawala) #中等 #object

  ### 题目

  Implement the type of `just-flip-object`. Examples:

  ```typescript
  Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
  Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
  ```

  No need to support nested objects and values which cannot be object keys such as arrays

  > 在 Github 上查看：https://tsch.js.org/4179/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 无法通过全量case 对value为true的，true转为key之后会消失
// type Flip<T extends Record<PropertyKey, any>> = {
//   [K in keyof T as T[K]]: K;
// }

// v2 把value明确的转为 字符串
type Flip<T extends Record<PropertyKey, any>> = {
  [K in keyof T as `${T[K]}`]: K;
}


type FlipRes = Flip<{ pi: 3.14, bool: true }>;