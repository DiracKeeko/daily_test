/*
  1097 - IsUnion
  -------
  by null (@bencor) #中等 #union

  ### 题目

  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

  For example:

  ```ts
  type case1 = IsUnion<string> // false
  type case2 = IsUnion<string | number> // true
  type case3 = IsUnion<[string | number]> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/1097/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 不行
/* 
type IsUnion<T, K = T> = [T] extends [never]
  ? false
  : [K] extends [T]
    ? false
    : true
*/

// v2 
type IsUnion<T, K = T> = [T] extends [never]
  ? false
  : T extends K // 这行代码的前置知识是 联合类型T extends U 的结果 (00043 分配条件类型 (Distributive) )
    ? [K] extends [T]
      ? false
      : true
    : never;

type IsUnionRes = IsUnion<string>; // false
type IsUnionRes1 = IsUnion<string | number>; // true
type IsUnionRes2 = IsUnion<{ a: string } | { a: number }>; // true

/* 
  一个分析过程
  https://github.com/type-challenges/type-challenges/issues/1140
*/

/* 
type IsUnionImpl<T, C extends T = T> = (T extends T ? C extends T ? true : unknown : never) extends true ? false : true;

// Example for single type:
IsUnion<string>
=> IsUnionImpl<string, string>
=> (string extends string ? string extends string ? true : unknown : never) extends true ? false : true
=> (string extends string ? true : unknown) extends true ? false : true
=> (true) extends true ? false : true
=> false

// Example for union type:
IsUnion<string|number>
=> IsUnionImpl<string|number, string|number>
=> (string|number extends string|number ? string|number extends string|number ? true : unknown : never) extends true ? false : true
=> (
  (string extends string|number ? string|number extends string ? true : unknown : never) |
  (number extends string|number ? string|number extends number ? true : unknown : never)
) extends true ? false : true
=> (
  (string|number extends string ? true : unknown) |
  (string|number extends number ? true : unknown)
) extends true ? false : true
=> (
  (
    (string extends string ? true : unknown) |
    (number extends string ? true : unknown)
  ) |
  (
    (string extends number ? true : unknown) |
    (number extends number ? true : unknown)
  )
) extends true ? false : true
=> (
  (
    (true) |
    (unknown)
  ) |
  (
    (unknown) |
    (true)
  )
) extends true ? false : true
=> (true|unknown) extends true ? false : true
=> (unknown) extends true ? false : true
=> true

*/
