/*
  2 - 获取函数返回类型
  -------
  by Anthony Fu (@antfu) #中等 #infer #built-in

  ### 题目

  不使用 `ReturnType` 实现 TypeScript 的 `ReturnType<T>` 泛型。

  例如：

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
  ```

  > 在 Github 上查看：https://tsch.js.org/2/zh-CN
*/

// v1
// type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : any;

// v2 antfu recommended 
type MyReturnType<T extends Function> =
  T extends (...args: any) => infer R
    ? R
    : never;

/* 
// 这个可以
type MyReturnType<T extends Function> =
  T extends (...args: any[]) => infer R // 入参不是最主要的问题
    ? R
    : never
*/


/* 
  1. 重点是"ts如何表示待推断的类型变量？" 答案是 infer，在类型变量前加上infer即可。
  2. 第二点是"如何约束传参为函数？" 函数类型为 (...args: any) => infer P，约束使用extends，即T extends (...args: any) => infer P。
*/

/* 
type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}
*/