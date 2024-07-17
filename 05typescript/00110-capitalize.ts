/*
  110 - Capitalize
  -------
  by Anthony Fu (@antfu) #中等 #template-literal

  ### 题目

  实现 `Capitalize<T>` 它将字符串的第一个字母转换为大写，其余字母保持原样。

  例如

  ```ts
  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
  ```

  > 在 Github 上查看：https://tsch.js.org/110/zh-CN
*/

/* _____________ 你的代码 _____________ */

// v1 很巧妙 ${infer F}${infer R} 等价于 F + rest
// type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S;

// v2 
type ToUpperCase = {
  a: "A"
  b: "B"
  c: "C"
  d: "D"
  e: "E"
  f: "F"
  g: "G"
  h: "H"
  i: "I"
  j: "J"
  k: "K"
  l: "L"
  m: "M"
  n: "N"
  o: "O"
  p: "P"
  q: "Q"
  r: "R"
  s: "S"
  t: "T"
  u: "U"
  v: "V"
  w: "W"
  x: "X"
  y: "Y"
  z: "Z"
}

type MyCapitalize<S extends string> = S extends `${infer F}${infer L}` ? F extends keyof ToUpperCase ? `${ToUpperCase[F]}${L}` : S : S
/* 
  总结：
    内置的 Uppercase<T> 可以把所有的字符变为大写
*/

type UppercaseRes = Uppercase<'hello world'>; // "HELLO WORLD"