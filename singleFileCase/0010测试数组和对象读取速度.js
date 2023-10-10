const operationCount = 100000;

const arr = [0, 1, 2, 3, 4];
console.time("arr[str] load");
for (let i = 0; i < operationCount; i++) {
  let res = arr["2"];
}
console.timeEnd("arr[str] load"); // 1.945ms

console.time("arr[num] load");
for (let i = 0; i < operationCount; i++) {
  let res = arr[3];
}
console.timeEnd("arr[num] load"); // 1.22ms

const map = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4"
}
// map 和 map1的区别在于一个key是数字，另一个key是字符串，测试下来不论是数字还是字符串，访问map的读取速度没有明显的差距
/*
const map1 = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4"
} 
*/
console.time("map[str] load");
for (let i = 0; i < operationCount; i++) {
  let res = map["2"];
  // let res = map[Number("2")];
}
console.timeEnd("map[str] load"); // 1.3ms

console.time("map[num] load");
for (let i = 0; i < operationCount; i++) {
  let res = map[3];
}
console.timeEnd("map[num] load"); // 1.166ms


// 结论 
// 若key为num arr[key]和map[key] 访问速度基本一致
// 若key为str arr[key]的访问速度慢; map[key]的访问速度快

/* 
arr[str] load: 1.993ms
arr[num] load: 1.22ms
map[str] load: 1.3ms
map[num] load: 1.166ms

arr[str] load: 1.991ms
arr[num] load: 1.066ms
map[str] load: 1.214ms
map[num] load: 1.039ms

arr[str] load: 1.879ms
arr[num] load: 1.027ms
map[str] load: 1.167ms
map[num] load: 1.019ms

arr[str] load: 1.896ms
arr[num] load: 1.054ms
map[str] load: 1.208ms
map[num] load: 1.04ms
*/

