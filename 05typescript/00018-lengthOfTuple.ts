/* 
  a plain type T doesn't have a length property
  普通类型 T 没有 length 属性
*/

// type Length<T extends readonly any[]> = T['length'];

type Length<T extends readonly unknown[]> = T['length'];