/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #中等 #object

  ### 题目

  将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

  例如

  ```ts
  type foo = {
    name: string;
    age: string;
  }

  type coo = {
    age: number;
    sex: string
  }

  type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
  ```

  > 在 Github 上查看：https://tsch.js.org/599/zh-CN
*/

/* _____________ 你的代码 _____________ */
type BaseObj = Record<string, any>;

// v1 简单粗暴
/* 
type Merge<F extends BaseObj, S extends BaseObj> = {
  [K in keyof F | keyof S]: K extends keyof S 
    ? S[K] 
    : K extends keyof F ? F[K] : never;
};
 */

// v2 巧妙运用 &
/* 
type Merge<F extends BaseObj, S extends BaseObj> = {
  [K in keyof (F & S)]: K extends keyof S 
    ? S[K] 
    : (F & S)[K];
}
 */

// v3 利用默认值，对v2进行精简
type Merge<F extends BaseObj, S extends BaseObj, O = F & S> = {
  [K in keyof O]: K extends keyof S 
    ? S[K] 
    : O[K];
}

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type MergeRes = Merge<Foo, Bar>;