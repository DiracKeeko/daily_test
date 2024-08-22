/*
  21220 - Permutations of Tuple
  -------
  by null (@gaac510) #中等 #union #tuple #conditional type #recursion

  ### 题目

  Given a generic tuple type `T extends unknown[]`, write a type which produces all permutations of `T` as a union.

  For example:

  ```ts
  PermutationsOfTuple<[1, number, unknown]>
  // Should return:
  // | [1, number, unknown]
  // | [1, unknown, number]
  // | [number, 1, unknown]
  // | [unknown, 1, number]
  // | [number, unknown, 1]
  // | [unknown, number ,1]
  ```

  > 在 Github 上查看：https://tsch.js.org/21220/zh-CN
*/

/* _____________ 你的代码 _____________ */
type Insert<T extends any[], U> = T extends [infer F, ...infer R]
? [F, U, ...R] | [F, ...Insert<R, U>]
: [U];

type PermutationsOfTuple<
  T extends unknown[],
  R extends unknown[] = []
> = 
T extends [infer F,...infer L]
  ? PermutationsOfTuple<L,Insert<R,F> | [F,...R] >
  : R;

/* 
type cases = [
  Expect<Equal<PermutationsOfTuple<[]>, []>>,
  Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
  Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
  Expect<Equal<
    PermutationsOfTuple<[any, unknown, never]>,
    | [any, unknown, never]
    | [unknown, any, never]
    | [unknown, never, any]
    | [any, never, unknown]
    | [never, any, unknown]
    | [never, unknown, any]
  >>,
  Expect<Equal<
    PermutationsOfTuple<[1, number, unknown]>,
    | [1, number, unknown]
    | [1, unknown, number]
    | [number, 1, unknown]
    | [unknown, 1, number]
    | [number, unknown, 1]
    | [unknown, number, 1]
  >>,
  ExpectFalse<Equal<PermutationsOfTuple<[ 1, number, unknown ]>, [unknown]>>,
]
*/