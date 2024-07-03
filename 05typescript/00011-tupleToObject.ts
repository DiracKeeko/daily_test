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