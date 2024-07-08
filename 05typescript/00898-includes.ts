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


type Includes<Value extends any[], Item> =
IsEqual<Value[0], Item> extends true
  ? true
  : Value extends [Value[0], ...infer rest]
    ? Includes<rest, Item>
    : false;

/* 
  type Includes<T extends readonly any[], U> = 
    IsEqual<T[0], U> extends true
    ? true
    : T extends [T[0], ...infer rest]
      ? Includes<rest, U>
      : false;
*/

/* 
type Includes<T extends readonly any[], U> = T extends [infer P, ...infer rest] 
  ? IsEqual<P, U> extends true 
    ? true
    : Includes<rest, U>
  : false;
*/