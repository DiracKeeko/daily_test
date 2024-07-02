type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
}

/* 
  extends 在这里的作用其实是限制泛型。
*/

// 一个很好的中文解析讨论
// https://github.com/type-challenges/type-challenges/issues/13427

// keyof: 取interface的键后保存为联合类型
interface UserInfo {
  name: string
  age: number
}

type KeyofValue = keyof UserInfo
// keyofValue = "name" | "age"

/*
  in: 取联合类型的值，主要用于数组和对象的构建。
  切记: in 不要用于interface, 否则会报错
*/

type name = 'firstName' | 'lastName'
type TName = {
  [key in name]: string
}
// TName = { firstName: string, lastName: string }


// 用于实际开发，举个例子：
function getValue(o:object, key: string){
  return o[key]
}
const obj1 = { name: '张三', age: 18 }
const value1 = getValue(obj1, 'name');
const value2 = getValue(obj1, 'ha'); // 不报错


function getValueStrict<T, K extends keyof T> (o: T, key: K) {
  return o[key]
}

const obj2 = { name: '张三', age: 18 }
const value3 = getValueStrict(obj2, 'name');

// const value4 = getValueStrict(obj2, 'ha'); // 报错
/* 
  报错信息:
  Argument of type '"ha"' is not assignable to parameter of type '"name" | "age"'
*/