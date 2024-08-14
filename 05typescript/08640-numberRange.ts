/*
  8640 - Number Range
  -------
  by AaronGuo (@HongxuanG) #中等

  ### 题目

  Sometimes we want to limit the range of numbers...
  For examples.
  ```ts
  type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  ```

  > 在 Github 上查看：https://tsch.js.org/8640/zh-CN
*/

/* _____________ 你的代码 _____________ */
type NumberToArray<N extends number, T extends any[] = []> = T['length'] extends N ? T : NumberToArray<N, [...T, 1]>;

type NumberRange<L extends number, H extends number, T extends any[] = NumberToArray<L>, R = H> = 
T['length'] extends L
  ? NumberRange<L, H, [...T, 1], R | L>
  : T['length'] extends H
    ? R
    : NumberRange<L, H, [...T, 1], R | T['length']>

type NumberRangeRes = NumberRange<2, 9>;