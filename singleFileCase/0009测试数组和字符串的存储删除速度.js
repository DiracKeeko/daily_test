const operationCount = 100000;

console.time("str plus");
let str = "hello";
for (let i = 0; i < operationCount; i++) {
  str += "w";
}
console.timeEnd("str plus"); // about 7.5ms

console.time("arr push");
let arr = ["h", "e", "l", "l", "o"];
for (let i = 0; i < operationCount; i++) {
  arr.push("w");
}
console.timeEnd("arr push"); // about 3.1ms

// 结论: "字符串+="" 的耗时大于"数组push()"的耗时

console.time("str subtract");
for (let i = 0; i < operationCount; i++) {
  str = str.slice(0, -1);
}
console.timeEnd("str subtract"); // about 3.1ms

console.time("arr pop");
for (let i = 0; i < operationCount; i++) {
  arr.pop();
}
console.timeEnd("arr pop"); // about 1.6ms

// 结论: "字符串从尾部去掉一个字符" 的耗时大于"数组pop()"的耗时


/* 
str plus: 7.875ms
arr push: 5.037ms
str subtract: 3.095ms
arr pop: 1.62ms

str plus: 9.593ms
arr push: 4.86ms
str subtract: 3.238ms
arr pop: 1.644ms

str plus: 7.708ms
arr push: 4.883ms
str subtract: 3.031ms
arr pop: 1.658ms

str plus: 7.64ms
arr push: 5.114ms
str subtract: 2.973ms
arr pop: 1.666ms

str plus: 7.889ms
arr push: 4.767ms
str subtract: 3.087ms
arr pop: 1.581ms
*/