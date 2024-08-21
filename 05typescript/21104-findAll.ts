/*
  21104 - FindAll
  -------
  by tunamagur0 (@tunamagur0) #中等 #template-literal #string

  ### 题目

  Given a pattern string P and a text string T, implement the type `FindAll<T, P>` that returns an Array that contains all indices (0-indexed) from T where P matches.

  > 在 Github 上查看：https://tsch.js.org/21104/zh-CN
*/

/* _____________ 你的代码 _____________ */

type FindAll<T extends string, P extends string, U extends string[] = [], Res extends number[] = []> = 
P extends ''
  ? []
  : T extends `${infer F}${infer R}`
    ? T extends `${P}${string}`
      ? FindAll<R, P, [...U, F], [...Res, U['length']]>
      : FindAll<R, P, [...U, F], Res>
    : Res;

/*
type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
] 
 */