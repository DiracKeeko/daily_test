type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
}

// 不写as无法通过。
// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T extends K ? never : P]: T[P];
// }
/* 
  必须有as 
  在 TypeScript 中，as 关键字在类型映射中用于重新映射键。

  Without the as keyword, the keys would be interpreted as plain property keys, and the conditional type exclusion based on P extends K would not work as expected, so it's main goal is to map the keys of the index signature.
  -> 如果没有 as 关键字，键P将被解释为普通属性键，那么基于 P extends K 的判定将无法按预期工作，因此它的主要目标是映射索引签名的键。
*/

interface Todo {
  title: string
  description: string
  completed: boolean
}

type AfterMyOmit = MyOmit<Todo, 'description' | 'completed'>;


// 其他实现
type OmitSelf<T, K extends keyof T> = Pick<
  T,
  Exclude<keyof T, K>
>;