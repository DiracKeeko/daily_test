/*
  29785 - Deep Omit
  -------
  by bowen (@jiaowoxiaobala) #中等 #omit object-keys deep

  ### 题目

  Implement a type`DeepOmit`, Like Utility types [Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys), A type takes two arguments.

  For example:

  ```ts
  type obj = {
    person: {
      name: string;
      age: {
        value: number
      }
    }
  }

  type test1 = DeepOmit<obj, 'person'>    // {}
  type test2 = DeepOmit<obj, 'person.name'> // { person: { age: { value: number } } }
  type test3 = DeepOmit<obj, 'name'> // { person: { name: string; age: { value: number } } }
  type test4 = DeepOmit<obj, 'person.age.value'> // { person: { name: string; age: {} } }
  ```

  > 在 Github 上查看：https://tsch.js.org/29785/zh-CN
*/

/* _____________ 你的代码 _____________ */

type DeepOmit<T extends Record<string, any>, U extends string> = U extends `${infer F}.${infer R}`
? {
    [K in keyof T]: K extends F ? DeepOmit<T[K], R> : T[K]
  }
: Omit<T, U>

/* 
type obj = {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string, age: {} } }>>,
]

*/