/*
  43 - 实现 Exclude
  -------
  by Zheeeng (@zheeeng) #简单 #built-in #union

  ### 题目

  实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。

  > 从联合类型 `T` 中排除 `U` 中的类型，来构造一个新的类型。

  例如：

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > 在 Github 上查看：https://tsch.js.org/43/zh-CN
*/

// "extends" can be used in two ways
// one is a real extends
// another is like a ternary expression with the traverse of T, called Distributive Conditional Types
// second one can be used in a fun way, like Flatten
// type Flatten<T> = T extends any[] ? T[number]: T;


type MyExclude<T, U> = T extends U ? never : T
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

/* 
  分配条件类型 (Distributive)  
  还是先来看示例

  type A1 = 'x' extends 'x' ? string : number; // string
  type A2 = 'x' | 'y' extends 'x' ? string : number; // number
  
  type P<T> = T extends 'x' ? string : number;
  type A3 = P<'x' | 'y'> // ?

  答案：
  type A3 = P<'x' | 'y'>  // A3的类型是 string | number

  这个反直觉结果的原因就是所谓的分配条件类型（Distributive Conditional Types）
  When conditional types act on a generic type, they become distributive when given a union type
*/

/* 
  对于使用extends关键字的条件类型（即上面的三元表达式类型），如果extends前面的参数是一个泛型类型，当传入该参数的是联合类型，则使用分配律计算最终的结果。分配律是指，将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
*/

type P<T> = T extends 'x' ? string : number;
type A33 = P<'x' | 'y'>  // A3的类型是 string | number
/* 
  type P<T> = T extends 'x' ? string : number;
  type A3 = P<'x' | 'y'>  // A3的类型是 string | number

  该例中，extends的前参为T，T是一个泛型参数。在A3的定义中，给T传入的是'x'和'y'的联合类型'x' | 'y'，满足分配律，于是'x'和'y'被拆开，分别代入P<T>

  P<'x' | 'y'> => P<'x'> | P<'y'>

  'x'代入得到

  'x' extends 'x' ? string : number => string

  'y'代入得到

  'y' extends 'x' ? string : number => number

  然后将每一项代入得到的结果联合起来，得到string | number

  总之，满足两个要点即可适用分配律：第一，参数是泛型类型，第二，代入参数的是联合类型
*/

// 特殊的never
/* 
  // never是所有类型的子类型
  type A1 = never extends 'x' ? string : number; // string

  type P<T> = T extends 'x' ? string : number;
  type A2 = P<never> // never

  上面的示例中，A2和A1的结果竟然不一样，看起来never并不是一个联合类型，所以直接代入条件类型的定义即可，获取的结果应该和A1一直才对啊？

  实际上，这里还是条件分配类型在起作用。never被认为是空的联合类型，也就是说，没有联合项的联合类型，所以还是满足上面的分配律，然而因为没有联合项可以分配，所以P<T>的表达式其实根本就没有执行，所以A2的定义也就类似于永远没有返回的函数一样，是never类型的。
*/


// 防止条件判断中的分配
/* 
  type P<T> = [T] extends ['x'] ? string : number;
  type A1 = P<'x' | 'y'> // number
  type A2 = P<never> // string
*/