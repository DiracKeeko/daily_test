/*
  2946 - ObjectEntries
  -------
  by jiangshan (@jiangshanmeta) #中等 #object

  ### 题目

  Implement the type version of ```Object.entries```

  For example

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```

  > 在 Github 上查看：https://tsch.js.org/2946/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 失败 单纯有T, 无法通过 T extends x 分配率实现
/* 
type ObjectEntries<T extends Record<string, any>> = keyof T extends string
  ? [T, ]
  : never;
 */

// v11 加入变量K 通过分配率实现

/* 
// v11 初版
type ObjectEntries<T extends Record<string, any>, K = keyof T> = K extends string
  ? [K, T[K]]
  : never;
 */

// v12 使用PropertyKey 拓展key为string的情况  不能通过case2
// type ObjectEntries<T extends Record<PropertyKey, any>, K = keyof T> = K extends PropertyKey
//   ? [K, T[K]]
//   : never;

// v13 使用PropertyKey 拓展key为string的情况  不能通过case3
// type ObjectEntries<T extends Record<PropertyKey, any>, K = keyof Required<T>> = K extends PropertyKey
//   ? [K, Required<T>[K]]
//   : never;

// v14 可以通过全量case
/* type ObjectEntries<T extends Record<PropertyKey, any>, K = keyof Required<T>> = K extends PropertyKey
  ? [K, Required<T>[K] extends never ? undefined: Required<T>[K]]
  : never; */


// v21 不能通过全量case  会出现case2的问题
// type ObjectEntries<T extends Record<PropertyKey, any>> = {
//   [K in keyof T] -?: [K, T[K]]
// }[keyof T]

// v22 可以通过全量case
// type ObjectEntries<T extends Record<PropertyKey, any>, U = Required<T>> = {
//   [K in keyof U]: [K, U[K]]
// }[keyof U]

// v23 可以通过全量case
type ObjectEntries<T extends Record<PropertyKey, any>, U = Required<T>> = {
  [K in keyof U]: [K, U[K] extends never ? undefined: U[K]]
}[keyof U]

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

// case2 在v12, v21 的解法下，由于可选属性，会拓展出一个undefined
// type ObjectEntriesRes22 = ObjectEntries<Partial<Model>>;
// type ObjectEntriesRes22 = ["name", string | undefined] | ["age", number | undefined] | ["locations", string[] | null | undefined]

// case3 在v13, v22 的解法下，也会出问题
// type ObjectEntriesRes22 = ObjectEntries<{ key?: undefined }> // ["key", never]


/* 
  总结:
    联合类型的产生 (转为联合类型  toUnion) 有3种方式
    
    (第1,2种 分别是v1x  和 v2x的思路)
    1. 分配条件类型 (Distributive) (Union T) T extends something ? firstCase : secondCase
    2. 对象 Obj T  ->  {}[keyof T]
    3. 数组 T[number]
    
    此外 4. 要知道 Partial<T> 在case2情况下的结果 (多出一个undefined)
    
*/
