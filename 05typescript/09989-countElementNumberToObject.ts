/*
  9989 - 统计数组中的元素个数
  -------
  by 凤之兮原 (@kongmingLatern) #中等

  ### 题目

  通过实现一个``CountElementNumberToObject``方法，统计数组中相同元素的个数
  ```ts
  type Simple1 = CountElementNumberToObject<[]> // return {}
  type Simple2 = CountElementNumberToObject<[1,2,3,4,5]>
  
   return {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1
  }
  
  type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]>
  
   return {
    1: 2,
    2: 2,
    3: 2,
    4: 1,
    5: 1
  }
  ```

  > 在 Github 上查看：https://tsch.js.org/9989/zh-CN
*/

/* _____________ 你的代码 _____________ */
type Flatten<T, U extends any[] = []> = T extends [infer F,...infer R]
? [F] extends [never]
  ? Flatten<R, U>
  : F extends any[]
    ? Flatten<R, [...U, ...Flatten<F>]>
    : Flatten<R, [...U, F]>
: U;


type Count<
  T,
  U extends Record<string | number, any[]> = {}
> = 
T extends [infer F extends string | number, ...infer R]
  ? F extends keyof U
    ? Count<R, Omit<U, F> & Record<F, [...U[F], 0]> >
    : Count<R, U & Record<F, [0]>>
  : {
    [K in keyof U]: U[K]['length']
  }

type CountElementNumberToObject<
  T
> = 
  Count<Flatten<T>>