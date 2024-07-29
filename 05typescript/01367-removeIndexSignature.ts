/*
  1367 - Remove Index Signature
  -------
  by hiroya iizuka (@hiroyaiizuka) #中等 #object-keys

  ### 题目

  Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.

  For example:

  ```ts
  type Foo = {
    [key: string]: any
    foo(): void
  }

  type A = RemoveIndexSignature<Foo> // expected { foo(): void }
  ```

  > 在 Github 上查看：https://tsch.js.org/1367/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IndexKey = string | number | symbol; // 等于内置的PropertyKey

// v1 这种写法会不通过
// type RemoveIndexSignature<T> = {
//   [K in keyof T as K extends IndexKey ? never : K]: T[K]
// }

// v2 可以通过 没看懂
// https://github.com/type-challenges/type-challenges/issues/14662
// type RemoveIndexSignature<T, P = PropertyKey> = {
//   [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
// };

// v3
// type ExcludeIndexSignature<T> = string extends T ? never : number extends T ? never : symbol extends T ? never : T
// type RemoveIndexSignature<T> = {
//   [P in keyof T as ExcludeIndexSignature<P>]: T[P]
// }

// v4 能通过，没看出和00003omit区别   (need review)
type RemoveIndexSignature<T extends Record<PropertyKey, any>>
  = {
      [
        Key in keyof T
          as string extends Key ? never
            : number extends Key ? never
            : symbol extends Key ? never
            : Key
      ]: T[Key]
    }


type Foo = {
  [key: string]: any
  foo(): void
}

type A = RemoveIndexSignature<Foo> // expected { foo(): void }