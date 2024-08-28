/*
  28333 - Public Type
  -------
  by KaiKai (@kaikaibenkai) #中等 #object-keys

  ### 题目

  Remove the key starting with `_` from given type `T`.

  > 在 Github 上查看：https://tsch.js.org/28333/zh-CN
*/

/* _____________ 你的代码 _____________ */

type PublicType<T extends object> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K]
}

/* 
type cases = [
  Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
  Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
  Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
  Expect<Equal<PublicType<{ d: string, _e: string }>, { d: string }>>,
  Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
  Expect<Equal<PublicType<{ g: '_g' }>, { g: '_g' }>>,
  Expect<Equal<PublicType<{ __h: number, i: unknown }>, { i: unknown }>>,
] 
*/