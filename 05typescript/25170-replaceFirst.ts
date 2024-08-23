/*
  25170 - Replace First
  -------
  by George Flinn (@ProjectFlinn) #中等

  ### 题目

  Implement the type ReplaceFirst<T, S, R> which will replace the first occurrence of S in a tuple T with R. If no such S exists in T, the result should be T.

  > 在 Github 上查看：https://tsch.js.org/25170/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ReplaceFirst<T extends readonly unknown[], S, P, U extends any[] = []> = U['length'] extends T['length']
? U
: T extends [infer F, ...infer R]
  ? F extends S
    ? [...U, P, ...R]
    : ReplaceFirst<R, S, P, [...U, F]>
  : U;

/* 
  逻辑梳理:
    1. U 和 T  length相同，则全部遍历完成，返回U
    2. T extends [infer F, ...infer R] ? case1 : case2 
      case2情况下，T已经为空了，遍历到了最后，此时需要返回U (对应没有匹配到S的情况)
    3. F extends S ? case11 : case 12, 判定是否匹配到S的情况。
*/
/* 
type cases = [
  Expect<Equal<ReplaceFirst<[1, 2, 3], 3, 4>, [1, 2, 4]>>,
  Expect<Equal<ReplaceFirst<['A', 'B', 'C'], 'C', 'D'>, ['A', 'B', 'D']>>,
  Expect<Equal<ReplaceFirst<[true, true, true], true, false>, [false, true, true]>>,
  Expect<Equal<ReplaceFirst<[string, boolean, number], boolean, string>, [string, string, number]>>,
  Expect<Equal<ReplaceFirst<[1, 'two', 3], string, 2>, [1, 2, 3]>>,
  Expect<Equal<ReplaceFirst<['six', 'eight', 'ten'], 'eleven', 'twelve'>, ['six', 'eight', 'ten']>>,
]
*/