/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #中等 #tuple

  ### 题目

  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```

  > 在 Github 上查看：https://tsch.js.org/4471/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1
// type Zip<T extends any[], U extends any[]> = 
// T extends [infer TF, ...infer TR]
//   ? U extends [infer UF, ...infer UR]
//     ? [[TF, UF], ...Zip<TR, UR>]
//     : []
//   : [];

// v2
type Zip<T extends any[], U extends any[]> =
[T, U] extends [[infer TF, ...infer TR], [infer UF, ...infer UR]]
  ? [[TF, UF], ...Zip<TR, UR>]
  : []

type ZipRes = Zip<[1, 2], [true, false]>; // [[1, true], [2, false]]
type ZipRes1 = Zip<[1, 2, 3], ['1', '2']>; // [[1, '1'], [2, '2']]
type ZipRes2 = Zip<[], [1, 2, 3]>; // []
