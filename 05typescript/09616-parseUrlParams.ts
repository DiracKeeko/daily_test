/*
  9616 - Parse URL Params
  -------
  by Anderson. J (@andersonjoseph) #中等 #infer #string #template-literal

  ### 题目

  You're required to implement a type-level parser to parse URL params string into an Union.

  ```ts
  ParseUrlParams<':id'> // id
  ParseUrlParams<'posts/:id'> // id
  ParseUrlParams<'posts/:id/:user'> // id | user
  ```

  > 在 Github 上查看：https://tsch.js.org/9616/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1
// type ParseUrlParams<T extends string, U extends string = never> = 
// T extends `${string}:${infer P}/${infer R}`
//   ? ParseUrlParams<R, U | P>
//   : T extends `${string}:${infer P}`
//     ? U | P
//     : U;

// v2
type ParseUrlParams<T> = T extends `${string}:${infer R}`
  ? R extends `${infer P}/${infer Rest}`
    ? P | ParseUrlParams<Rest>
    : R
  : never;

/* 
type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
]
*/