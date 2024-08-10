/*
  4518 - Fill
  -------
  by キリサメ qianxi (@qianxi0410) #中等 #tuple

  ### 题目

  `Fill`, a common JavaScript function, now let us implement it with types.
  `Fill<T, N, Start?, End?>`, as you can see,`Fill` accepts four types of parameters, of which `T` and `N` are required parameters, and `Start` and `End` are optional parameters.
  The requirements for these parameters are: `T` must be a `tuple`, `N` can be any type of value, `Start` and `End` must be integers greater than or equal to 0.

  ```ts
  type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
  ```
  In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

  > 在 Github 上查看：https://tsch.js.org/4518/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 最佳实现 (晦涩)
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  L extends any[] = [],
> = 
  T extends [infer F, ...infer R]
    ? [...L, 0][Start] extends undefined
      ? Fill<R, N, Start, End, [...L, F]>
      : [...L, 0][End] extends undefined
        ? Fill<R, N, Start, End, [...L, N]>
        : Fill<R, N, Start, End, [...L, F]>
    : L

