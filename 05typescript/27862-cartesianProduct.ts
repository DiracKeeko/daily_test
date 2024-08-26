/*
  27862 - CartesianProduct
  -------
  by jazelly (@jazelly) #中等 #union

  ### 题目

  Given 2 sets (unions), return its Cartesian product in a set of tuples, e.g.
  ```ts
  CartesianProduct<1 | 2, 'a' | 'b'>
  // [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']
  ```

  > 在 Github 上查看：https://tsch.js.org/27862/zh-CN
*/

/* _____________ 你的代码 _____________ */

type CartesianProduct<T, U> = T extends T
? U extends U
  ? [T, U]
  : never
: never;

/* 
type cases = [
  Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>>,
  Expect<Equal<CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c' >, [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']>>,
  Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a'] >>,
  Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>,
]
*/

/* 
  复习:
    1. 创建union的方式  (1.分配率 -> U extends T 2. array K -> K[number] 3. object O -> keyof O )
    2. 遍历union的方式  (key in union)  00008
*/