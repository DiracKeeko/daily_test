/*
  3196 - Flip Arguments
  -------
  by jiangshan (@jiangshanmeta) #中等 #arguments

  ### 题目

  Implement the type version of lodash's ```_.flip```.

  Type ```FlipArguments<T>``` requires function type ```T``` and returns a new function type which has the same return type of T but reversed parameters.

  For example:

  ```typescript
  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
  // (arg0: boolean, arg1: number, arg2: string) => void
  ```

  > 在 Github 上查看：https://tsch.js.org/3196/zh-CN
*/

/* _____________ 你的代码 _____________ */
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : T;

type FlipArguments<T extends Function> = T extends (...args: infer P) => infer U
  ? (...args: Reverse<P>) => U
  : never;

type FlipArgumentsRes = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>;
// (arg0: boolean, arg1: number, arg2: string) => void

/* 
  总结:
    1. T extends Function 验证入参T的type
    2. 参数值的 获取 和 翻转
*/