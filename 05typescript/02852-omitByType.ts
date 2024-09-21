/*
  2852 - OmitByType
  -------
  by jiangshan (@jiangshanmeta) #中等 #object

  ### 题目

  From ```T```, pick a set of properties whose type are not assignable to ```U```.

  For Example

  ```typescript
  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
  ```

  > 在 Github 上查看：https://tsch.js.org/2852/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1
type OmitByType<T extends Record<string, any>, U> = {
  [K in keyof T as K]: T[K] extends U ? never : U;
}

// v2
// type OmitByType<T extends Record<string, any>, U> = {
//   [K in keyof T as T[K] extends U ? never : K]: T[K]
// }

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type OmitByTypeRes = OmitByType<Model, boolean>; // { name: string, count: number }

/* 
  关联 02595-pickByType 
*/