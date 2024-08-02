/*
  2759 - RequiredByKeys
  -------
  by jiangshan (@jiangshanmeta) #中等 #object

  ### 题目

  实现一个通用的`RequiredByKeys<T, K>`，它接收两个类型参数`T`和`K`。

  `K`指定应设为必选的`T`的属性集。当没有提供`K`时，它就和普通的`Required<T>`一样使所有的属性成为必选的。

  例如:

  ```ts
  interface User {
    name?: string
    age?: number
    address?: string
  }

  type UserRequiredName = RequiredByKeys<Us2er, 'name'> // { name: string; age?: number; address?: string }

  ```

  > 在 Github 上查看：https://tsch.js.org/2759/zh-CN
*/

/* _____________ 你的代码 _____________ */
type IntersectionToObj<T> = {
  [K in keyof T]: T[K]
}

// v1 正统做法 用 "-?" 实现 required
// type RequiredByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = IntersectionToObj<{
//   [P in keyof T as P extends K ? P : never]-?: T[P]
// } & {
//   [P in keyof T as P extends K ? never : P]: T[P]
// }>

// v2 简化代码  必选值和非必选值取交集，必选key结果还是必选
type RequiredByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = IntersectionToObj<{
  [P in keyof T as P extends K ? P : never]-?: T[P]
} & T>

/* 
// v21 v21结果和v2相同，T的前后位置不影响交集的 必选key
type RequiredByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = IntersectionToObj<T & {
  [P in keyof T as P extends K ? P : never]-?: T[P]
}>
*/

// v3 对比 v21
// type RequiredByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = IntersectionToObj<T & 
//   Required<Pick<T, K extends keyof T ? K : never>>
// >

/* 
  总结:
    1. 使用 "-?" 去除可选属性。(将可选属性变为比选属性)
    2. 必选值和非必选值取交集，必选key结果还是必选状态
*/
