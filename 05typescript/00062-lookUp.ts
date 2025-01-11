/*
  62 - 查找类型
  -------
  by Anthony Fu (@antfu) #中等 #union #map

  ### 题目

  有时，您可能希望根据某个属性在联合类型中查找类型。

  在此挑战中，我们想通过在联合类型`Cat | Dog`中通过指定公共属性`type`的值来获取相应的类型。换句话说，在以下示例中，`LookUp<Dog | Cat, 'dog'>`的结果应该是`Dog`，`LookUp<Dog | Cat, 'cat'>`的结果应该是`Cat`。

  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }

  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }

  type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  ```

  > 在 Github 上查看：https://tsch.js.org/62/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 这个不行
// type LookUp<U, T> = U.type extends T ? U : never; 

// v2 还是不行
// type LookUp<T extends { type: string }, U extends string> = T['type'] extends U ? T : never
/* 
  Because T['type'] is not a naked type and thus doesn't get distributed. And "dog" | "cat" doesn't extend neither "dog" nor "cat".
*/

// v3
type LookUp<U, T> = U extends { type: T } ? U : never;

/* 
  总结:
  不可以用 U.type  但是可以用 { type: T };

  前置知识是 联合类型T extends U 的结果 (00043 分配条件类型 (Distributive) )
*/

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type MyDog = LookUp<Cat | Dog, 'dog'>;
