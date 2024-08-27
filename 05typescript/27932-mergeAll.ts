/*
  27932 - MergeAll
  -------
  by scarf (@scarf005) #中等 #object #array #union

  ### 题目

  Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union.

  For example:

  ```ts
  type Foo = { a: 1; b: 2 }
  type Bar = { a: 2 }
  type Baz = { c: 3 }

  type Result = MergeAll<[Foo, Bar, Baz]> // expected to be { a: 1 | 2; b: 2; c: 3 }
  ```

  > 在 Github 上查看：https://tsch.js.org/27932/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MergeAll<T extends Record<string, any>[], P extends Record<string, any> = {}> = 
T extends [infer F, ...infer R extends Record<string, any>[] ]
  ? MergeAll<R, Omit<P, keyof F> & { 
      [K in keyof F]: K extends keyof P ? F[K] | P[K] : F[K] 
    } >
  : Omit<P, never>;

/* 

type cases = [
  Expect<Equal<MergeAll<[]>, {} >>,
  Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
  Expect<Equal<
    MergeAll<[{ a: string }, { a: string }]>,
    { a: string }
>
  >,
  Expect<Equal<
    MergeAll<[{ }, { a: string }]>,
    { a: string }
>
  >,
  Expect<Equal<
    MergeAll<[{ a: 1 }, { c: 2 }]>,
    { a: 1, c: 2 }
>
  >,
  Expect<Equal<
    MergeAll<[{ a: 1, b: 2 }, { a: 2 }, { c: 3 }]>,
    { a: 1 | 2, b: 2, c: 3 }
>
  >,
  Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
  Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>,
]

*/

type ContinuousIntersection = { a: 1 } & { b: 2 } & { c: 3 };
type OmitRes1 = Omit<ContinuousIntersection, never>; // { a: 1, b: 2, c: 3 }


/*
  总结:
    1. 可以通过Omit<ContinuousIntersection, never> 将一个连续的交集转化为一个对象
    2. 必须通过Omit<Obj, Union> 删除原对象上的属性
*/