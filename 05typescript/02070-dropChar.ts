/*
  2070 - Drop Char
  -------
  by CaptainOfPhB (@CaptainOfPhB) #中等 #template-literal #infer

  ### 题目

  从字符串中剔除指定字符。

  例如：

  ```ts
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
  ```

  > 在 Github 上查看：https://tsch.js.org/2070/zh-CN
*/

/* _____________ 你的代码 _____________ */

type DropChar<S extends string, C extends string> = S extends `${infer F}${infer R}`
  ? F extends C
    ? DropChar<R, C>
    : `${F}${DropChar<R, C>}`
  : S; // 只有空串'' 才会进入这行逻辑分支，进入即结束(遍历完所有的字符)


type DropCharRes = DropChar<'butter fly!', ' '>; // 'butterfly!'
type DropCharRes2 = DropChar<' b u t t e r f l y ! ', 'b'>; // '  u t t e r f l y ! '

/* 
  总结: 
   1. 理解infer 对字符串的拆分 (case 见 00612)
   2. 递归的逻辑
   3. 递归的终止条件
*/

type NullStrExtendsRes = ' ' extends '' ? true : false; // false
type NullStrExtendsRes1 = 'A' extends '' ? true : false; // false
type NullStrExtendsRes2 = '' extends '' ? true : false; // true
type NullStrExtendsRes3 = '' extends string ? true : false; // true




