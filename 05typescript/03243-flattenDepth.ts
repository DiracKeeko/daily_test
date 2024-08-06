/*
  3243 - FlattenDepth
  -------
  by jiangshan (@jiangshanmeta) #中等 #array

  ### 题目

  Recursively flatten array up to depth times.

  For example:

  ```typescript
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  ```

  If the depth is provided, it's guaranteed to be positive integer.

  > 在 Github 上查看：https://tsch.js.org/3243/zh-CN
*/

/* _____________ 你的代码 _____________ */

type FlattenDepth<T extends any[], N extends number = 1, U extends any[] = []> = U['length'] extends N
  ? T
  : T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...FlattenDepth<F, N, [...U, 1]>, ...FlattenDepth<R, N, U>]
      : [F, ...FlattenDepth<R, N, U>]
    : T;

type FlattenDepthRes = FlattenDepth<[1, [2]]>; // [1, 2]
type FlattenDepthRes1 = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]

/* 
  总结:
    1. 带depth的flatten，肯定要递归执行 flatten ，还要记录递归的次数。
    2. 考虑层数问题，ts 中需要比较具体的数字类型，通常都需要数组的 length 属性。那么我们可以增加一个数组类型参数 U，每次flatten操作都向它里面添加一个元素来达到 '+1' 的目的。
    3. 每次递归时，判断层数和它的 length 是否一致，如果一致，说明flatten层数够了，直接返回本身即可；否则继续递归。
    4. 需要注意，只有 ...F 的部分向 U 中添加了元素，进行了 '+1'，因为只有这部分是真正进行打平操作的，而剩余参数 R 部分的递归，并没有进行打平，只是继续向后传递参数，因此这部分不 '+1'。
*/