/*
  10 - 元组转合集
  -------
  by Anthony Fu (@antfu) #中等 #infer #tuple #union

  ### 题目

  实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

  例如

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > 在 Github 上查看：https://tsch.js.org/10/zh-CN
*/


// v1 直接通过 T[number] 实现
type TupleToUnion<T extends any[]> = T[number];

// v2 通过 infer来实现  可读性不如v1
// type TupleToUnion<T> = T extends Array<infer items> ? items : never

type tupleToUnionRes = TupleToUnion<[123, '456', true]>; // 123 | '456' | true
type tupleToUnionRes1 = TupleToUnion<[123]>; // 123
type tupleToUnionRes2 = TupleToUnion<[]>; // never
