let arr = ['1', { name: '111' }, 0, -1, null, undefined];
console.log('arr->', arr);

let arrBoolean = [];
arr.forEach((item) => {
  arrBoolean.push(!!item);
});
console.log('arrBoolean->', arrBoolean);

let arrBooleanTrans = [];
arr.forEach((item) => {
  arrBooleanTrans.push(Boolean(item));
});
console.log('arrBooleanTrans->', arrBooleanTrans); // 与!!转Boolean结果相同

console.log("Boolean([])->", Boolean([])); // true