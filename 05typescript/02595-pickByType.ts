/*
  2595 - PickByType
  -------
  by jiangshan (@jiangshanmeta) #中等 #object

  ### 题目

  From `T`, pick a set of properties whose type are assignable to `U`.

  For Example

  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```

  > 在 Github 上查看：https://tsch.js.org/2595/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 最佳实现 
type PickByType<T extends Record<string, any>, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
}

// v1 变种
// type PickByType<T extends Record<string, any>, U> = {
//   [K in keyof T as T[K] extends U ? K : never]: U;
// }

// v2 借用内置Pick工具 核心还是T[K]的判断 
// 再通过 {}[keyof T] 转化为联合类型
// type PickByType<T extends Record<string, any>, U> = Pick<T, {
//   [K in keyof T]: T[K] extends U ? K : never;
// }[keyof T]>


/* 
  总结：
    1. 注意as赋值的使用
    2. 用 as 赋值 赋一个新值 T[K] 而 不是 T。

    3. 对象的key转联合类型
*/



interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type PickByTypeRes = PickByType<Model, boolean>; // { isReadonly: boolean, isEnable: boolean }

