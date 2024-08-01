/*
  2757 - PartialByKeys
  -------
  by jiangshan (@jiangshanmeta) #中等 #object

  ### 题目

  实现一个通用的`PartialByKeys<T, K>`，它接收两个类型参数`T`和`K`。

  `K`指定应设置为可选的`T`的属性集。当没有提供`K`时，它就和普通的`Partial<T>`一样使所有属性都是可选的。

  例如:

  ```ts
  interface User {
    name: string
    age: number
    address: string
  }

  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
  ```

  > 在 Github 上查看：https://tsch.js.org/2757/zh-CN
*/

/* _____________ 你的代码 _____________ */
type IntersectionToObj<T> = {
  [K in keyof T]: T[K]
}

type PartialByKeys<T extends Record<string, any>, K extends keyof T = keyof T> = IntersectionToObj<{
  [P in keyof T as P extends K ? P : never] ?: T[P]
} & {
  [P in keyof T as P extends K ? never : P] : T[P]
}>

interface User {
  name: string
  age: number
  address: string
}

type PartialByKeysRes = PartialByKeys<User, 'name' | 'age'>;
/* 
  type PartialByKeysRes = {
    name?: string | undefined;
    age?: number | undefined;
    address: string;
  }
*/

type PartialByKeysRes1 = PartialByKeys<User>; 
/* 
  type PartialByKeysRes1 = {
    name?: string | undefined;
    age?: number | undefined;
    address?: string | undefined;
  }
 */

/*
  总结:
    1. 可选类型的实现方式  [KEY] ?: VALUE。
    2. IntersectionToObj 在执行的过程中，会将对象的属性保留为可选属性。
*/

/* 
  解释：
    使用 {} & {} 拼接得到的是交叉类型，答案需要返回一个对象类型，对象类型和交叉类型是不相等的

    因此需要借助 IntersectionToObj<T> 实现类型转换
*/

/* 
import type { Equal, Expect } from "@type-challenges/utils";

type A = {
  name: string;
};

type B = {
  age: number;
};

type AB = {
  name: string;
  age: number;
};

type AandB = A & B;

// type result = false
type result = Equal<AandB, AB>;

*/

type PartialCase = {
  name: string;
  age?: number;
}

// age依然是可选属性
type PartialCaseCopy = {
  [K in keyof PartialCase]: PartialCase[K];
}