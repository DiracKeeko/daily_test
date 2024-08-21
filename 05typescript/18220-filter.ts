/*
  18220 - Filter
  -------
  by Muhun Kim (@x86chi) #中等 #array #filter

  ### 题目

  Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elements of `Predicate`.

  > 在 Github 上查看：https://tsch.js.org/18220/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Filter<T extends any[], P> = T extends [infer F, ...infer R]
? F extends P
  ? [F, ...Filter<R, P>]
  : Filter<R, P>
: []

/* 
type Falsy = false | 0 | '' | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]
*/