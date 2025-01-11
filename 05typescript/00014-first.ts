/*
  14 - 第一个元素
  -------
  by Anthony Fu (@antfu) #简单 #array

  ### 题目

  实现一个`First<T>`泛型，它接受一个数组`T`并返回它的第一个元素的类型。

  例如：

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // 应推导出 'a'
  type head2 = First<arr2> // 应推导出 3
  ```

  > 在 Github 上查看：https://tsch.js.org/14/zh-CN
*/

type First<T extends any[]> = T extends [] ? never : T[0];

// https://github.com/type-challenges/type-challenges/issues/16315
/* 
  //answer2
  type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

  //answer3
  type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never
*/

/* 
  Q: Hey guys, can I ask why T extends [] works?

  A: T extends [] means "is T an empty array?".
*/

/*
  extends关键字在TS中的两种用法，即接口继承和条件判断
  
*/

// 1. extends用来做继承功能
interface T1 {
  name: string;
}

interface T2 {
  sex: number;
}

// 多重继承，逗号隔开
interface T3 extends T1, T2 {
  age: number;
}

// 合法
const t3: T3 = {
  name: 'Tom',
  sex: 1,
  age: 18
};

// 2. 条件判断
// 示例1
interface Animal {
  eat(): void;
}

interface Dog extends Animal {
  bite(): void;
}

// A的类型为string
type A = Dog extends Animal ? string : number;

const a1: A = 'this is string';

/* 
  extends用来条件判断的语法和JS的三元表达是很相似，如果问号前面的判断为真，则将第一个类型string赋值给A，否则将第二个类型number赋值给A。

  那么，接下来的问题就是，extends判断条件真假的逻辑是什么？

  很简单，如果extends前面的类型能够赋值给extends后面的类型，那么表达式判断为真，否则为假。

  上面的示例中，Dog是Animal的子类，父类比子类的限制更少，能满足子类，则一定能满足父类，Dog类型的值可以赋值给Animal类型的值，判断为真。
*/

// 示例2
interface A1 {
  name: string;
}

interface A2 {
  name: string;
  age: number;
}
// A的类型为string
type A3 = A2 extends A1 ? string : number;

const a2: A3 = 'this is string';
