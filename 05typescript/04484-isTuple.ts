/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #中等 #tuple

  ### 题目

  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.

  For example:

  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/4484/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 这个判断是分辨元组和数组的基础 但是还会有case不通过
// type IsTuple<T extends any> = T extends readonly any[]
//   ? number extends T["length"]
//     ? false // 是数组
//     : true // 是元组
//   : false; 

// v2 
type IsTuple<T extends any> = [T] extends [never]
? false
: T extends readonly any[]
    ? number extends T["length"]
      ? false
      : true
    : false; 

/* 
  解析：
    元组和数组的区别：
      元组的长度是有限的，数组的长度是无限的
      在TS中，元组和数组 ['length'] 返回的结果是不同的

        元组返回的是数字 (如: 2, 3)
        数组返回的是 number
    
        An array's "length" is number, but a tuple's "length" is a specific number;

  总结:
    元组的length 是一个真实的数字 (如: 2, 3)
    而数组的length 是number
*/

type Tuple1 = [string, number];
type Tuple2 = [number, number, number];

type TupleLength<T extends any[]> = T['length'];

type TupleLengthRes1 = TupleLength<Tuple1>; // 2
type TupleLengthRes2 = TupleLength<Tuple2>; // 3

type Array1 = number[];
type TupleLengthRes3 = TupleLength<Array1>; // number


type NumberExtends1 = number extends 1 ? true : false; // false
type NumberExtends2 = 1 extends number ? true : false; // true
type NumberExtends3 = number extends number ? true : false; // true



type TupleLengthRes4 = TupleLength<never>; // never

type NumberExtends4 = number extends never ? true : false; // false