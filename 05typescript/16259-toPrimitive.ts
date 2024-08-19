/*
  16259 - 将类型为字面类型（标签类型）的属性，转换为基本类型。
  -------
  by 前端子鱼 (@mwc) #中等

  ### 题目

  // 将类型为字面类型（标签类型）的属性，转换为基本类型。

  type PersonInfo = {
    name: 'Tom',
    age: 30,
    married: false,
    addr: {
      home: '123456',
      phone: '13111111111'
    }
  }

  // 要求结果如下：
  type PersonInfo = {
    name: string,
    age: number,
    married: boolean,
    addr: {
      home: string,
      phone: string
    }
  }

  > 在 Github 上查看：https://tsch.js.org/16259/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1 失败
/* 
type ArrayToPrimitive<T extends any[], U extends any[] = []> = T extends [infer F, ...infer R]
? F extends string
  ? ArrayToPrimitive<R, [...U, string]>
  : F extends number
    ? ArrayToPrimitive<R, [...U, number]>
    : F extends boolean
      ? ArrayToPrimitive<R, [...U, boolean]>
      : ArrayToPrimitive<R, [...U, F]>
: U;

type ToPrimitive<T extends Record<string, any>> = {
  [K in keyof T as K]: T[K] extends number
    ? number
    : T[K] extends string
      ? string
      : T[K] extends boolean
        ? boolean
        : T[K] extends Function
          ? Function
          : T[K] extends any[]
            ? ArrayToPrimitive<T[K]>
            : ToPrimitive<T[K]>
}

type ArrayToPrimitiveRes = ArrayToPrimitive<['sing', 'dance']>; 
*/


// v3 可通过全量case
/* 
type ToPrimitive<T> = 
T extends object 
  ? T extends (...args: never[]) => unknown 
    ? Function
    : {
        [K in keyof T]: ToPrimitive<T[K]>
      } 
  : T extends { valueOf: () => infer R } // 检查 T 是否有 valueOf 方法
    ? R // 如果有 则返回它的原始类型值R
    : T;
 */

// v31  
/* 
  1. 判断Function 的方式改为 T extends Function
  2. valueOf: () => infer R 变为 valueOf(): infer R
 */

type ToPrimitive<T> = 
T extends object 
  ? T extends Function
    ? Function
    : {
        [K in keyof T]: ToPrimitive<T[K]>
      } 
  : T extends { valueOf(): infer R }  // 检查 T 是否有 valueOf 方法
    ? R // 如果有 则返回它的原始类型值R
    : T;


type PersonInfo = {
  name: 'Tom'
  age: 30
  married: false
  addr: {
    home: '123456'
    phone: '13111111111'
  }
  hobbies: ['sing', 'dance']
  readonlyArr: readonly ['test']
  fn: () => any
}

type ToPrimitiveRes = ToPrimitive<PersonInfo>;