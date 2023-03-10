const studentArr = [
  { name: "John", id: 1 },
  { name: "Pony", id: 2 },
  { name: "Jack", id: 3 },
];

studentArr.forEach(({ name, id }) => {
  console.log(`name: ${name}, id: ${id}`);
});


// 结合函数使用
function getUsefulData(dataObj) {
  return [dataObj.name, dataObj.age];
}

const tooMuchMessageObj = {
  name: "Rookie",
  id: "1",
  age: 18,
  gender: "male",
  email: "admin@example.com",
};
const [theName, theAge] = getUsefulData(tooMuchMessageObj);
// ↑ 这个case里，可以直接使用对象解构，这个case有点为用而用的意思
// const { name: theName, age: theAge } = tooMuchMessageObj; // 这样就行了


// 解构: 取出字符串里的某一个字符
const str = "abc";
const [first, second, thrid] = str;
console.log(first, second, thrid); // "a", "b", "c"

// 有趣的现象
const strArr = ["axx", "bxx", "cxx"];
strArr.forEach(([item], index) => {
  console.log("item->", item);
});
/* 
  item-> a
  item-> b
  item-> c
*/

let map = new Map();
map.set("name1", "axx");
map.set("name2", "bxx");
map.set("name3", "cxx");
for (let [, value] of map) {
  console.log("value->", value);
}
/* 
  value-> axx
  value-> bxx
  value-> cxx
*/

// 在nodejs的CommonJS (CJS) 语法中也可以使用
// const { aFunction } = require("./functionLib.js");


// 配合正则表达式使用，取出结果
const str2 = "拜拜了886哈哈66";
const arrReg = /(\D+)(\d+)(\D+)(\d+)/;
const res = arrReg.exec(str2);
console.log("res->", res);
/* 
  res-> [
    '拜拜了886哈哈66',
    '拜拜了',
    '886',
    '哈哈',
    '66',
    index: 0,
    input: '拜拜了886哈哈66',
    groups: undefined
  ]
*/
const {1: bye, 3: haha} = res;
console.log("bye->", bye, "haha->", haha);
// bye-> 拜拜了 haha-> 哈哈
