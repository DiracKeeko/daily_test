/*
  3188 - Tuple to Nested Object
  -------
  by jiangshan (@jiangshanmeta) #中等 #object #tuple

  ### 题目

  Given a tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively.

  ```typescript
  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
  ```

  > 在 Github 上查看：https://tsch.js.org/3188/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 错误
// type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
//   ? { `${F}`: TupleToNestedObject<R, U> } // 不可以直接 `${F}` 定义key
//   : U;

// v2 错误 这里会认为F没有范围限制，报错
// type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
//   ? { [K in F]: TupleToNestedObject<R, U> } // Type 'F' is not assignable to type 'string | number | symbol'.
//   : U;

// v3
type TupleToNestedObject<T, U> = T extends [infer F, ...infer R]
  ? { [K in F & string]: TupleToNestedObject<R, U> }
  : U;

type TupleToNestedObjectRes1 = TupleToNestedObject<['a'], string>; // { a: string }
type TupleToNestedObjectRes2 = TupleToNestedObject<[], boolean>; // boolean
type TupleToNestedObjectRes3 = TupleToNestedObject<['a', 'b'], number>; // { a: { b: number } }

/* 
  总结:
    1. 记住 [K in F & string] 这种通过 & string 缩小key范围的用法。
*/