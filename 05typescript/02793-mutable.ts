/*
  2793 - Mutable
  -------
  by jiangshan (@jiangshanmeta) #中等 #readonly #object-keys

  ### 题目

  实现一个通用的类型 ```Mutable<T>```，使类型 `T` 的全部属性可变（非只读） (注: 就是去掉只读属性，让key可写)。

  例如：

  ```typescript
  interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }

  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }

  ```

  > 在 Github 上查看：https://tsch.js.org/2793/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Mutable<T extends Record<string, any>> = {
  -readonly [K in keyof T]: T[K] extends Record<string, any> ? Mutable<T[K]> : T[K];
}

/* 
  总结: 
    1. 用 '-readonly' 去掉'readonly';
    2. 入参要有类型检查，还要考虑key对应的value也是Obj。(如果是Obj，递归调用Mutable<T>)
*/