/*
  3326 - BEM style string
  -------
  by Songhn (@songhn233) #中等 #template-literal #union #tuple

  ### 题目

  The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

  For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.

  Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, `E` and `M` are string arrays (can be empty).

  > 在 Github 上查看：https://tsch.js.org/3326/zh-CN
*/

/* _____________ 你的代码 _____________ */
// v1
// type BEM<B extends string, E extends string[], M extends string[]> = 
// `${B}${E['length'] extends 0 ? '' : `__${E[number]}`}${M['length'] extends 0 ? '': `--${M[number]}`}`;

// v12 拆分
type FormatE<E extends string[]> = E['length'] extends 0 ? '' : `__${E[number]}`;
type FormatM<M extends string[]> = M['length'] extends 0 ? '': `--${M[number]}`;
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${FormatE<E>}${FormatM<M>}`;
// 总结: `${string}${union}${union}` // 会自动展开

type BEMRes = BEM<'btn', [], ['small', 'medium', 'large']> // 'btn--small' | 'btn--medium' | 'btn--large'

// review 03326 objectEntries