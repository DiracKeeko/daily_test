/*
  4260 - AllCombinations
  -------
  by 蛭子屋双六 (@sugoroku-y) #中等 #template-literal #infer #union

  ### 题目

  Implement type ```AllCombinations<S>``` that return all combinations of strings which use characters from ```S``` at most once.

  For example:

  ```ts
  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
  ```

  > 在 Github 上查看：https://tsch.js.org/4260/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 最佳实现
type AllCombinations<S extends string, PRE extends string = ''> = S extends `${infer F}${infer R}`
  ? `${F}${AllCombinations<`${PRE}${R}`>}` | AllCombinations<R, `${PRE}${F}`>
  : ''

type AllCombinationsRes = AllCombinations<''>; // ''
type AllCombinationsRes1 = AllCombinations<'A'>; // '' | 'A'
type AllCombinationsRes2 = AllCombinations<'AB'>; // '' | 'A' | 'B' | 'AB' | 'BA'