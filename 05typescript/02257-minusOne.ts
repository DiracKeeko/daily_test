/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #中等 #math

  ### 题目

  给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。

  例如:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > 在 Github 上查看：https://tsch.js.org/2257/zh-CN
*/

/* _____________ 你的代码 _____________ */

// 数字N 转化为length为N的数组
type LengthToArray<N extends string, T extends any[] = []> = 
  `${T['length']}` extends N ? T : LengthToArray<N, [any, ...T]>;

// 10倍拓展，获取大数字对应的数组  `231` => ((2 x 10) + 3) x 10 + 1
type ReduceArray<S extends string, T extends any[] = []> = S extends `${infer F}${infer R}` 
  ? ReduceArray<R, [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...LengthToArray<F>]> 
  : T;

// v1 对100量级的输入，可以拿到结果。  但是到达1000量级的数据，就会报错 (层级过深)
// type MinusOne<T extends number> = LengthToArray<`${T}`> extends [infer _, ...infer R] ? R['length'] : -1;

// v2 通过ReduceArray 可以实现对大数的获取
type MinusOne<T extends number> = ReduceArray<`${T}`> extends [infer _, ...infer R] ? R['length'] : -1;

type MinusOneRes = MinusOne<3>; // 2
type MinusOneRes1 = MinusOne<100>; // 99
type MinusOneRes2 = MinusOne<0>; // -1

type MinusOneRes3 = MinusOne<1001>; // v1 超过1000 就没法推断了
// Type instantiation is excessively deep and possibly infinite.

// type MinusOneRes4 = MinusOne<9_007_199_254_740_992>; // 超大数字，v2也不能实现