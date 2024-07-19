/*
  191 - 追加参数
  -------
  by Maciej Sikora (@maciejsikora) #中等 #arguments

  ### 题目

  > 由 @antfu 翻译

  实现一个泛型 `AppendArgument<Fn, A>`，对于给定的函数类型 `Fn`，以及一个任意类型 `A`，返回一个新的函数 `G`。`G` 拥有 `Fn` 的所有参数并在末尾追加类型为 `A` 的参数。

  ```typescript
  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean>
  // 期望是 (a: number, b: string, x: boolean) => number
  ```

  > 本挑战来自于 [@maciejsikora](https://github.com/maciejsikora) 在 Dev.io 上的[文章](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c)

  > 在 Github 上查看：https://tsch.js.org/191/zh-CN
*/

/* _____________ 你的代码 _____________ */

type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer T) => infer K
  ? (...args: [...T, A]) => K
  : never;

type AppendArgumentRes1 = AppendArgument<(a: number, b: string) => number, boolean>;
// (a: number, b: string, x: boolean) => number

type AppendArgumentRes2 = AppendArgument<() => void, undefined>
// type Result2 = (x: undefined) => void

/* 
  总结:
    1. Fn extends Function 实现对 参数类型的校验
    
    2. Fn extends (...args: infer T) => infer K
      T, K 在下文都需要使用，因此需要加前缀infer做类型推断
 */