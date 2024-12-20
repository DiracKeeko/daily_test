/*
  9 - 对象属性只读（递归）
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys #deep

  ### 题目

  实现一个泛型 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

  您可以假设在此挑战中我们仅处理对象。不考虑数组、函数、类等。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。

  例如

  ```ts
  type X = {
    x: {
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Expected = {
    readonly x: {
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey'
  }

  type Todo = DeepReadonly<X> // should be same as `Expected`
  ```

  > 在 Github 上查看：https://tsch.js.org/9/zh-CN
*/

/* 
// v1 不能实现全部的case 
// 主要问题有两个 
  // 1. 没有处理Function 
  // 2. "extends object"中 object不是一个好的写法，要用Record<any, any>
type DeepReadonly<T extends object> = {
  readonly [K in keyof T]: T[K] extends object 
    ? DeepReadonly<T[K]> 
    : T[K];
}
 */

/* 
// v2 不能实现第一层是联合类型的case
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };
*/

// v3 可以通过的写法，写到这里就可以了
type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends Record<any, any>
    ? T[k] extends Function
      ? T[k]
      : DeepReadonly<T[k]>
    : T[k]
}

type X2 = { a: string } | { b: number };
type DeepReadonlyRes = DeepReadonly<X2>;


/* 
// v4 学习一下 from vue-next

type Primitive = string | number | boolean | bigint | symbol | undefined | null
type Builtin = Primitive | Function | Date | Error | RegExp
type DeepReadonly<T> = T extends Builtin
  ? T
  : T extends Map<infer K, infer V>
    ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
    : T extends ReadonlyMap<infer K, infer V>
      ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
      : T extends WeakMap<infer K, infer V>
        ? WeakMap<DeepReadonly<K>, DeepReadonly<V>>
        : T extends Set<infer U>
          ? ReadonlySet<DeepReadonly<U>>
          : T extends ReadonlySet<infer U>
            ? ReadonlySet<DeepReadonly<U>>
            : T extends WeakSet<infer U>
              ? WeakSet<DeepReadonly<U>>
              : T extends Promise<infer U>
                ? Promise<DeepReadonly<U>>
                : T extends {}
                  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
                  : Readonly<T>

*/
