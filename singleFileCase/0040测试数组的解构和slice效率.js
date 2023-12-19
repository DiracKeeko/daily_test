const operationCount = 100000;

const originArr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr;
console.time("slice(0)");
for (let i = 0; i < operationCount; i++) {
  newArr = originArr.slice(0);
}
console.timeEnd("slice(0)"); // about 3.3ms

let newArr2;
console.time("[...]");
for (let i = 0; i < operationCount; i++) {
  newArr2 = [...originArr];
}
console.timeEnd("[...]"); // about 2.1ms

// 结论: "数组.slice(0)" 的耗时大于 解构数组 [...数组] 的耗时
// 浅拷贝时优先使用 [...]

/* 
slice(0): 3.266ms
[...]: 1.968ms

slice(0): 3.593ms
[...]: 2.049ms

slice(0): 3.318ms
[...]: 2.028ms
*/