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

/* 
推导过程:

F<'ABC'>

= 'A'F<'BC'> | F<'BC', 'A'>
(
  F<'BC'> => 'B'F<'C'> | F<'C', 'B'>
  F<'BC', 'A'> => 'B'F<'AC'> | F<'C', 'AB'>
)

= 'AB'F<'C'> | 'A'F<'C', 'B'> | 'B'F<'AC'> | F<'C', 'AB'>
(
  F<'C'> => '' | 'C'
  F<'C', 'B'> => 'C'F<'B'> | F<'', 'BC'> => 'C'F<'B'> | ''
  F<'AC'> => 'A'F<'C'> | F<'C', 'A'>
  F<'C', 'AB'> => 'C'F<'AB'> | F<'', 'ABC'> => 'C'F<'AB'> | ''

  // 注意 F<''>, F<'', 'XXX'>, F<'A'>, F<'B'>, F<'C'> 都是终点
)

= 'ABC' | 'AB' | 'AC'F<'B'> | 'A' | 'BA'F<'C'> | 'B'F<'C', 'A'> | 'C'F<'AB'> | ''
(
  F<'B'> => '' | 'B'
  F<'C'> => '' | 'C'
  F<'C', 'A'> => 'C'F<'A'> | F<'', 'AC'> => 'C'F<'A'> | ''
  F<'AB'> => 'A'F<'B'> | F<'B', 'A'>;
)

= 'ABC' | 'AB' | 'AC' | 'ACB' | 'A' | 'BA' | 'BAC' | 'BC'F<'A'> | 'B' | 'CA'F<'B'> | 'C'F<'B', 'A'> | ''
(
  F<'B', 'A'> => 'B'F<'A'> | F<'', 'AB'> => 'B'F<'A'> | ''
)

= 'ABC' | 'AB' | 'AC' | 'ACB' | 'A' | 'BA' | 'BAC' | 'BC' | 'BCA' | 'B' | 'CA' | 'CAB' | 'CB'F<'A'> | 'C' | ''

= 'ABC' | 'AB' | 'AC' | 'ACB' | 'A' | 'BA' | 'BAC' | 'BC' | 'BCA' | 'B' | 'CA' | 'CAB' | 'CB' | 'CBA' | 'C' | ''

*/