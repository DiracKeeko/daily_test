/*
  1130 - ReplaceKeys
  -------
  by 贱贱 (@lullabyjune) #中等 #object-keys

  ### 题目

  Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing,
  A type takes three arguments.

  For example:

  ```ts
  type NodeA = {
    type: "A"
    name: string
    flag: number
  }

  type NodeB = {
    type: "B"
    id: number
    flag: number
  }

  type NodeC = {
    type: "C"
    name: string
    flag: number
  }

  type Nodes = NodeA | NodeB | NodeC

  type ReplacedNodes = ReplaceKeys<
    Nodes,
    "name" | "flag",
    { name: number; flag: string }
  > 
  // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} 
  // would replace name from string to number, replace flag from number to string.

  type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }> 
  // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} 
  // would replace name to never

  ```

  > 在 Github 上查看：https://tsch.js.org/1130/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ReplaceKeys<U, T, Y extends Record<string, any>> = U extends Record<string, any>
  ? {
    [K in keyof U]: K extends T
                      ? K extends keyof Y ? Y[K] : never
                      : U[K];
  }
  : never;

// 为练习而出题，太过于特化，没啥实际意义
/* 
  总结:
    两个考点
    1. 分配条件类型 (Distributive)
    2. K in Union 遍历
*/