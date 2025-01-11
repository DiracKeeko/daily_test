/*
  11 - 元组转换为对象
  -------
  by sinoon (@sinoon) #简单 #object-keys

  ### 题目

  将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

  例如：

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > 在 Github 上查看：https://tsch.js.org/11/zh-CN
*/

type TupleToObject1<T extends readonly any[]> = {
  [K in T[number]]: K
}

// 它的效果是
/* 
将 const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
转化为 
type Obj = { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }
*/

type Obj = { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }


let a: any;
a['a'] //ok
a[0] // ok
a[Symbol()] //ok
// a[{}] // error -> Type '{}' cannot be used as an index type.

/* 
  ↓ 这个代码无法通过 error case
 */
// type TupleToObject<T extends readonly any[]> = {
//   [K in T[number]]: K
// }

/* 
  ↓ 这个代码可以
*/
// type TupleToObject<T extends readonly (keyof any)[]> = {
//   [K in T[number]]: K
// }

/* 
  ↓ 这个代码可以
*/
// type TupleToObject<T extends readonly (string | symbol | number)[]> = {
//   [P in T[number]]: P
// }

type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K
}

const tupleNumber = [1, 2, 3, 4] as const
// TupleToObject<typeof tupleNumber>, { 1: 1, 2: 2, 3: 3, 4: 4 }
