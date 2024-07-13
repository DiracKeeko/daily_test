// ↓ 转化为map 一种很巧妙的方式
/* 
type Includes<T extends readonly any[], U> = {
  [P in T[number]]: true
}[U] extends true ? true : false;
 */
/* 
  Maps the array from { [index]: [itemValue] } to { [itemValue]: true } and returns whether the expected item value, U, is true. 
  This only allows U, to be a PropertyKey, so it won't pass all test cases.
*/

type IsEqual<T, U> = 
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2) 
    ? true
    : false;


type Includes<T extends readonly any[], U> = 
  IsEqual<T[0], U> extends true
  ? true
  : T extends [T[0], ...infer rest] // 如果 T[0] 不等于 U，则检查是否可以将数组 T 分解为 [T[0], ...infer rest] 的形式。
    ? Includes<rest, U> // 如果可以成功分解，递归地调用 Includes<rest, U>，继续在剩余的数组中查找类型 U。
    : false; // 如果无法成功分解（即数组 T 的长度为 0），则返回 false，表示数组 T 不包含类型 U。

/*
进一步解释上面的 `T extends [T[0], ...rest]`

如果写成 T extends [T[0], ...rest]，TypeScript 并不知道 rest 的确切类型，因为它没有被明确定义。这会导致类型推断错误，或者在条件类型中无法准确地进行下一步操作。

例如，假设 T 是一个数组类型 [number, string, boolean]，那么在 T extends [T[0], ...rest] 中，TypeScript 不知道 rest 的类型是什么，导致无法在条件类型中正确处理 rest 的递归。

(类型推断 or 提取类型)
在 ...rest 的位置使用 infer 允许 TypeScript 推断剩余部分 rest 的类型。也就是说，TypeScript 会尝试从 T 中推断出剩余数组的类型，并将其绑定到 rest 变量上。
*/


/* 
type Includes<T extends readonly any[], U> = T extends [infer P, ...infer rest] 
  ? IsEqual<P, U> extends true 
    ? true
    : Includes<rest, U>
  : false;
*/

type IncludesRes1 = Includes<[boolean, 2, 3, 5, 6, 7], false>;
type IncludesRes2 = Includes<[false, 2, 3, 5, 6, 7], false>;