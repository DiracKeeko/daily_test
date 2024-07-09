// v1
// type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : any;

// v2 antfu recommended 
type MyReturnType<T extends Function> =
  T extends (...args: any) => infer R
    ? R
    : never

/* 
// 这个可以
type MyReturnType<T extends Function> =
  T extends (...args: any[]) => infer R
    ? R
    : never
*/

/* 
// 这个可以
type MyReturnType =
  T extends (...args: any[]) => infer R
    ? R
    : never
*/

/* 
  1. 重点是"ts如何表示待推断的类型变量？" 答案是 infer，在类型变量前加上infer即可。
  2. 第二点是"如何约束传参为函数？" 函数类型为 (...args: any) => infer P，约束使用extends，即T extends (...args: any) => infer P。
*/