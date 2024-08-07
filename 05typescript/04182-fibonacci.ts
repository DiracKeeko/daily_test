/*
  4182 - 斐波那契序列
  -------
  by windliang (@wind-liang) #中等

  ### 题目

  Implement a generic Fibonacci\<T\> takes an number T and returns it's corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```js
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > 在 Github 上查看：https://tsch.js.org/4182/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Fibonacci<T extends number, C extends any[] = [1, 1, 1], A extends any[] = [1], B extends any[] = [1]> = 
  T extends 1
    ? 1
    : T extends 2
      ? 1
      : T extends C['length']
        ? [...A, ...B]['length']
        : Fibonacci<T, [...C, 1], B, [...A, ...B]>


type FibonacciRes = Fibonacci<8>; // 21

/* 
  总结：
    1. TS 没有计算能力，遇到这种 TS 计算的题目，我们应该第一时间想到采用数组的 length 进行计算
*/