/*
  9898 - 找出目标数组中只出现过一次的元素
  -------
  by X.Q. Chen (@brenner8023) #中等

  ### 题目

  找出目标数组中只出现过一次的元素。例如：输入[1,2,2,3,3,4,5,6,6,6]，输出[1,4,5]

  > 在 Github 上查看：https://tsch.js.org/9898/zh-CN
*/

/* _____________ 你的代码 _____________ */
type GetOnceMap<T extends number[], M extends Record<number, boolean> = {}> = T extends [infer F, ...infer R extends number[]]
? F extends keyof M
  ? GetOnceMap<R, Omit<M, F> & Record<F, false>>
  : GetOnceMap<R, M & Record<F&PropertyKey, true>>
: M;

type FindEles<T extends number[], Res extends number[] = [], M extends Record<number, boolean> = GetOnceMap<T>> = 
T extends [infer F extends number, ...infer R extends number[]]
  ? M[F] extends true
    ? FindEles<R, [...Res, F], M>
    : FindEles<R, Res, M>
  : Res;

// type GetOnceMapRes = GetOnceMap<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>
type FindElesRes = FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>; // [1, 4, 5]