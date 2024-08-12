/*
  5310 - Join
  -------
  by Pineapple (@Pineapple0919) #中等 #array

  ### 题目

  Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.

  ```ts
  type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
  type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
  type Res3 = Join<["o"], "u">; // expected to be 'o'
  ```

  > 在 Github 上查看：https://tsch.js.org/5310/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 可以想到各种情况的王道解法
type Join<T extends any[], U extends string | number = ",", P extends string = ''> = T extends [infer F, ...infer R]
? R extends [] // 等价于 R['length'] extends 0
  ? P extends ''
    ? `${F&string}`
    : `${P}${U}${F&string}`
  : P extends ''
    ? Join<R, U, `${F&string}`>
    : Join<R, U, `${P}${U}${F&string}`>
: P;

// v2 更加精简
/* 
type Join<T extends any[], U extends string | number = ","> = T extends [infer F, ...infer R]
? R extends []
  ? `${F&string}`
  : `${F&string}${U}${Join<R, U>}`
: '';
*/

// v21 对v2的改进 (F为string的判定) 这个优化同样可以应用于v1
/* 
type Join<T extends any[], U extends string | number = ","> = T extends [infer F extends string, ...infer R]
? R extends []
  ? `${F}`
  : `${F}${U}${Join<R, U>}`
: '';
*/

type JoinRes = Join<['2', '2', '2'], 1>; // '21212'
type JoinRes1 = Join<['o'], 'u'>; // 'o'
type JoinRes2 = Join<[], 'u'>; // ''

/* 
  总结:
    1. `${F&string}`的使用 限定F的类型 (以及另外一种 [通过 extends] 限定F类型的方式)
*/