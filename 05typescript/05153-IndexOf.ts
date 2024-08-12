/*
  5153 - IndexOf
  -------
  by Pineapple (@Pineapple0919) #中等 #array

  ### 题目

  Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

  ```ts
  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
  ```

  > 在 Github 上查看：https://tsch.js.org/5153/zh-CN
*/

/* _____________ 你的代码 _____________ */
// 要自行实现 isEqual
type IsEqual<T, U> = 
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) 
    ? true
    : false;

type IndexOf<T extends any[], U, P extends any[] = []> = T extends [infer F, ...infer R]
  ? IsEqual<U, F> extends true
    ? P['length']
    : IndexOf<R, U, [...P, 1]>
  : -1;

type IndexOfRes = IndexOf<[string, 1, number, 'a'], number>; // 2
type IndexOfRes1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 8>; // 3
