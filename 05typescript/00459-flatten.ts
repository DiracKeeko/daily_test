/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #中等 #array

  ### 题目

  在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

  例如:

  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```

  > 在 Github 上查看：https://tsch.js.org/459/zh-CN
*/

type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[] ? [...Flatten<F>, ...Flatten<R>] : [F, ...Flatten<R>]
  : [];

type FlattenRes = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]


// 理解infer 对元组的拆分 关联00612
type T1 = [1, 2, 3, 4] extends [infer F, infer R] ? R : never  // T = never
type T2 = [1, 2] extends [infer F, infer R] ? R : never  // T = 2

type T3 = [1, 2, 3, 4] extends [infer F, ...infer R] ? R : never  // T = [2, 3, 4]
type T4 = [1, 2] extends [infer F, ...infer R] ? R : never  // T = [2]
type T5 = [1] extends [infer F, ...infer R] ? R : never // T = []

/* 
  无扩展符时，表示当前元组索引位置的值：
    如果元组长度和位置无法匹配，即长度不一致，就会认为是 false
    如果长度一致，那么就和案例中 T2 中的 R 一样，表示当前元组中对应索引的值
    
  有扩展符时，即表示剩余值组成的元组，如果没有剩余值，则是 []
*/