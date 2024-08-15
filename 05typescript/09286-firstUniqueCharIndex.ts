/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #中等 #string

  ### 题目

  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

  > 在 Github 上查看：https://tsch.js.org/9286/zh-CN
*/

/* _____________ 你的代码 _____________ */
/* 
// v1 效率不高，会层级过深无法推导结果
type AddOne<T extends number, U extends any[] = []> = U['length'] extends T
? [...U, 1]['length']
: AddOne<T, [...U, 1]>;

type CharCountMap<T extends string, U extends Record<string, number> = {}> = T extends `${infer F}${infer R}`
? F extends keyof U
  ? CharCountMap<R, U & Record<F, AddOne<U[F]>>>
  : CharCountMap<R, U & Record<F, 1>>
: U;

type FirstUniqueCharIndex<T extends string, U extends any[] = [], P = CharCountMap<T>> = T extends `${infer F}${infer R}`
? F extends keyof P
  ? P[F] extends 1
    ? U['length']
    : FirstUniqueCharIndex<R, [...U, 1], P>
  : -1
: -1;
 */

// v11 基于v1改进，map无需计数，只需记录是否有重复
type GetAppearMap<S extends string, M extends Record<string, boolean> = {}> = S extends `${infer F}${infer R}`
? F extends keyof M
  ? GetAppearMap<R, Omit<M, F> & Record<F, true>>
  : GetAppearMap<R, M & Record<F, false>>
: M;

/* 
// GetAppearMap的另一种写法
type GetAppearMap<S extends string, M extends Record<string, boolean> = {}> = S extends `${infer F}${infer R}`
? GetAppearMap<R, F extends keyof M ? Omit<M, F> & Record<F, true> : M & Record<F, false> > // 区别在这行
: M;
*/

type FirstUniqueCharIndex<T extends string, U extends any[] = [], M extends Record<string, boolean> = GetAppearMap<T>> = 
T extends `${infer F}${infer R}`
  ? M[F] extends false
    ? U['length']
    : FirstUniqueCharIndex<R, [...U, 1], M>
  : -1;

// v2 最佳实现
/* 
type FirstUniqueCharIndex<
  T extends string,
  U extends string[] = []
> = T extends `${infer F}${infer R}`
  ? F extends U[number] // 判断F 在不在 U 中存在相同的
    ? FirstUniqueCharIndex<R, [...U, F]> // 如果在U中存在相同的，就把F添加进去，此时也相当于索引+1了
    : R extends `${string}${F}${string}` // 如果U中不存在相同元素，继续判断F在不在R中存在  ##重点学习这种写法
      ? FirstUniqueCharIndex<R, [...U, F]> // F在R中存在相同，则继续递归判定
      : U['length'] // 双重判断后都不在，就可以返回索引了
  : -1
 */

// type Res = CharCountMap<'lee'>;
type FirstUniqueCharIndexRes = FirstUniqueCharIndex<'leetcode'>;
type FirstUniqueCharIndexRes1 = FirstUniqueCharIndex<'loveleetcode'>; // 2

/* 
  总结:
    1. 在TS类型推断中，如果判断元素是否已经存在，有两种方式，一种是数组，一种是Record，这里数组是最优解。U extends Array[number]
    2.  R extends `${string}${F}${string}` 学习这种判定F是否在R中的写法
*/