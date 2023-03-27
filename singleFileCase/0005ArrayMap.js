// 0005 ArrayMap
let arr1 = [];
let arr11 = arr1.map((item) => {
  console.log('001');
  return { name: item.name };
});
// console.log("arr11->",arr11);
// 表现：输出一个空数组,不打印001
// 结论：空数组不会执行map,直接返回一个空数组

let arr2 = [
  { name: 'xx', age: 12 },
  { name: 'zz', age: 13 }
];
let arr22 = arr2.map((item) => {
  console.log('002');
  return { name: item.name };
});
console.log("arr22->", arr22); // arr22-> [ { name: 'xx' }, { name: 'zz' } ]

let und = undefined;
try {
  let und11 = (und).map((item) => {
    console.log("003");
    return {name: item.name}
  });
  console.log("und11->",und11);
} catch (e) {
  console.log("e->", e);
}
// ↑ 报错 Uncaught TypeError: Cannot read property 'map' of undefined
// 不能对undefined执行.map操作

let und12 = (und || []).map((item) => {
  console.log('003');
  return { name: item.name };
});
console.log("und12->", und12);  // 输出空数组，不输出"003"

// let nuStr = "";
// let nuStr22 = (nuStr).map((item) => {
//   console.log("004");
//   return {name: item.name}
// });
// console.log("nuStr22->", nuStr22);
// 报错 Uncaught TypeError: nuStr.map is not a function

let nuStr = '';
let nuStr22 = (nuStr || []).map((item) => {
  console.log('004');
  return { name: item.name };
});
// console.log("nuStr22->", nuStr22);  // 输出空数组，不输出"004"

let arr3 = ['1', '2', '3'];
let arr33 = arr3.map((item) => {
  // console.log("005");
  if (item !== '2') {
    return item;
  }
});
console.log('arr33->', arr33); 
// ["1", undefined, "3"]
// map的callback中不显示的returen, 则默认输出undefined
