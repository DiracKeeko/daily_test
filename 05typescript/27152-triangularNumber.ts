/*
  27152 - Triangular number
  -------
  by null (@aswinsvijay) #中等 #tuple #array #math

  ### 题目

  Given a number N, find the Nth triangular number, i.e. `1 + 2 + 3 + ... + N`

  > 在 Github 上查看：https://tsch.js.org/27152/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Triangular<N extends number, T extends number[] = [], U extends number[] = []> = T['length'] extends N
? [...U, ...T]['length']
: Triangular<N, [...T, 1], [...U, ...T]>

/* _____________ 测试用例 _____________ */
/* 
type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>,
] 
 */