// 0018symbolAsObjectKey

const idKey = Symbol('id');

const obj = {
  [idKey]: '123',
  name: 'tom',
  age: 18
};

// ↓ for...in... 无法访问 Symbol 类型的属性
for (const key in obj) {
  console.log("key->", key); // 依次打印 name, age
  console.log("value->", obj[key]); // 依次打印 tom, 18
}

// for...of... 遍历Object.getOwnPropertySymbols(obj)得到的数组
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log("key->", key);
  console.log("coderId->", obj[key]);
}

console.log("obj[idKey] ->", obj[idKey]);