/*
  29650 - ExtractToObject
  -------
  by Maxim Bazuev (@bazuka5801) #中等 #object

  ### 题目

  Implement a type that extract prop value to the interface. The type takes the two arguments. The output should be an object with the prop values.
    Prop value is object.

    For example

  ```ts
  type Test = { id: '1', myProp: { foo: '2' }}
  type Result = ExtractToObject<Test, 'myProp'> // expected to be { id: '1', foo: '2' }
  ```

  > 在 Github 上查看：https://tsch.js.org/29650/zh-CN
*/

// v1
// type ExtractToObject<T extends Record<string, any>, U extends keyof T> = Omit<Omit<T, U> & T[U], never>;

// v2
type Merge<T> = {
  [K in keyof T]: T[K]
}

type ExtractToObject<T extends Record<string, any>, U extends keyof T> = Merge<Omit<T, U> & T[U]>;

/* 
  总结：
    1. 这题本身不难，要点在于 把 交集变为对象 (obj1 & obj2 -> obj12)
    2. 实现这个交集变对象可以有两种方式  
      2.1 Omit<obj1 & obj2, never>
      2.2 实现一个Merge<T>
*/