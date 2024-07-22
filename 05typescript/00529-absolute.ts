/*
  529 - Absolute
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中等 #math #template-literal

  ### 题目

  实现一个接收string,number或bigInt类型参数的`Absolute`类型,返回一个正数字符串。

  例如

  ```ts
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  ```

  > 在 Github 上查看：https://tsch.js.org/529/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer R}`
  ? F extends "-" ? R : `${F}${R}`
  : '';

// v2 是v1的简化版 `-${infer U}` 表示 拆分为'-'加U
// type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}` ? U : `${T}`;

type AbsoluteRes = Absolute<-0>; // '0'
type AbsoluteRes1 = Absolute<-1_000_000n>; // '1000000'

/* 
  解析：
  Absolute 需要能接受任意合法的 number / bigint 类型，那么我们则要考虑到这些情况：

  普通数字：123
  分组数字：1_2345（等价于 12345）
  十六进制：0xF123
  八进制：0o123
  科学计数法：1e10
  bigint：123n（末尾有 n）
  看着很麻烦，需要考虑这么多种情况。不过在 TypeScript 中，通过模板字符串将数组转换为字符串时，编译器会自动进行转换：

  type NumToStr<
    T extends number | bigint
  > = `${T}`

  type A = NumToStr<123> // "123"
  type B = NumToStr<1_2345> // "12345"
  type C = NumToStr<0xF123> // "61731"
  type D = NumToStr<0o123> // 83
  type E = NumToStr<1e5> // "100000"
  type F = NumToStr<123n> // 123


编译器已经帮我们做了基本的自动转换，那么我们仅仅需要考虑将负数转换为正数既可。
  由于不能直接判断正负，所以可以采取如下方法：

  将数字转换为字符串
  判断字符串第一个字符是否为 '-'
  若第一个字符为 '-'，则保留剩余字符
  若第一个字符不为 '-'，则保留全部字符
*/
