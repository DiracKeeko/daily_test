/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #中等 #tuple

  ### 题目

  实现类型版本的数组反转 ```Array.reverse```

  例如：

  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```

  > 在 Github 上查看：https://tsch.js.org/3192/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1
// type Reverse<T extends any[], U extends any[] = []> = T extends [infer F, ...infer R]
//   ? Reverse<R, [F, ...U]>
//   : U;

// v2
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : T;

type ReverseRes1 = Reverse<['a', 'b', 'c']>; // ['c', 'b', 'a']
