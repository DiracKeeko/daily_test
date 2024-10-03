/*
  30970 - IsFixedStringLiteralType
  -------
  by 蛭子屋双六 (@sugoroku-y) #中等

  ### 题目

  Sometimes you may want to determine whether a string literal is a definite type. For example, when you want to check whether the type specified as a class identifier is a fixed string literal type.

  确定一个字符串字面值是否是一个明确的类型

  ```typescript
  type Action<ID extends string> = { readonly id: ID };
  ```

  Since it must be fixed, the following types must be determined as false.

  * never type
  * Union of string literal types
  * Template literal types with embedded string, number, bigint, boolean

  Determine whether the given type S is a definite string literal type.

  > 在 Github 上查看：https://tsch.js.org/30970/zh-CN
*/

/* _____________ 你的代码 _____________ */

/* 
type SingleCheck<S> = S extends ''
  ? true
  : S extends `${infer F}${infer R}`
    ? '0' | '1' extends F
      ? false
      : SingleCheck<R>
    : false;

type IsFixedStringLiteralType<S extends string, T = S> = [S] extends [never]
  ? false
  : S extends unknown
    ? [T] extends [S]
      ? SingleCheck<S>
      : false
    : false;
 */

/* 
type IsNumOrBool<S extends string> = S extends `${infer _ extends number}${any}` ? true :
  S extends `${infer _ extends bigint}${any}` ? true :
    S extends `${infer F extends boolean}${any}` ? F extends true | false ? false : true : false

type IsConst<S extends string> = S extends '' ? true :
  IsNumOrBool<S> extends false ? S extends `${infer F}${infer Rest}` ? string extends F ?  false : `${string & {}}` extends F ? false : IsConst<Rest> : false : false

type IsUnion<S extends string, T = S> = S extends T ? [T] extends [S] ? false : true : never

type IsFixedStringLiteralType<S extends string> = [S] extends [never] ? false : IsUnion<S> extends false ? IsConst<S> : false
*/