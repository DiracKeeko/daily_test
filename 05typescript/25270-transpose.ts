/*
  25270 - Transpose
  -------
  by Apollo Wayne (@Shinerising) #中等 #array #math

  ### 题目

  The transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by A<sup>T</sup>.

  ```ts
  type Matrix = Transpose <[[1]]>; // expected to be [[1]]
  type Matrix1 = Transpose <[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
  type Matrix2 = Transpose <[[1, 2, 3], [4, 5, 6]]>; // expected to be [[1, 4], [2, 5], [3, 6]]
  ```

  > 在 Github 上查看：https://tsch.js.org/25270/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 我的实现
/* 
type ShiftFirst<M extends number[][]> = M extends [infer F, ...infer R extends number[][]]
? F extends [infer _, ...infer FR]
  ? [FR, ...ShiftFirst<R>]
  : []
: [];

type CollectFirst<M extends number[][]> = M extends [infer F, ...infer R extends number[][]]
? F extends [infer FF, ...infer _]
  ? [FF, ...CollectFirst<R>]
  : []
: [];

// Reduce会产生一个额外的'[]'   形如 [[res1], [res2], []]
type Reduce<M extends number[][]> = M['length'] extends 0
? []
: [CollectFirst<M>, ...Reduce<ShiftFirst<M>>];

type Transpose<M extends number[][], P = Reduce<M>> = P extends [...infer F, []]
? F
: P;


// 测试案例
type ShiftFirstRes = ShiftFirst<[[1, 2, 3], [4, 5, 6]]>;
type ShiftFirstRes1 = ShiftFirst<[[1, 4], [2, 5], [3, 6]]>;
type ShiftFirstRes2 = ShiftFirst<[]>; // []
type ShiftFirstRes3 = ShiftFirst<[[1]]>; // [[]]
type ShiftFirstRes4 = ShiftFirst<[[]]>; // []

type CollectFirstRes = CollectFirst<[[1, 2, 3], [4, 5, 6]]>;
type CollectFirstRes1 = CollectFirst<[[1, 4], [2, 5], [3, 6]]>;
type CollectFirstRes2 = CollectFirst<[]>; // []
type CollectFirstRes3 = CollectFirst<[[1]]>; // [1]
type CollectFirstRes4 = CollectFirst<[[]]>; // []

type ReduceRes = Reduce<[[1, 2]]>; // ReduceRes = [[1], [2], []]

 */


// v2 by jiangshanmeta
type Transpose<M extends number[][], R = M['length'] extends 0 ? [] : M[0]> = {
  [X in keyof R]: {
    [Y in keyof M]: X extends keyof M[Y]
      ? M[Y][X]
      : never
  }
}

// 测试v2的实现
type reduceArray<T extends any[]> = {
  [X in keyof T]: X
}

type reduceArrayRes = reduceArray<[0, 1, 2]> // ["0", "1", "2"]

/* 
  总结: 
    1. v2是一种巧妙的方法，[X in keyof R] R是一个数组，此时X在迭代时，它的值是字符串类型的Index  (参见reduceArrayRes的结果)
    2. 虽然是用对象形式的迭代实现，但是最终ts推断的结果是一个数组。

    3. 数组的对象形式迭代
*/

/* 
type cases = [
  Expect<Equal<Transpose<[]>, []>>,
  Expect<Equal<Transpose<[[1]]>, [[1]]>>,
  Expect<Equal<Transpose<[[1, 2]]>, [[1], [2]]>>,
  Expect<Equal<Transpose<[[1, 2], [3, 4]]>, [[1, 3], [2, 4]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6]]>, [[1, 4], [2, 5], [3, 6]]>>,
  Expect<Equal<Transpose<[[1, 4], [2, 5], [3, 6]]>, [[1, 2, 3], [4, 5, 6]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>, [[1, 4, 7], [2, 5, 8], [3, 6, 9]]>>,
]
*/

