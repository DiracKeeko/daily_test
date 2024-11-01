const arr = [11, 22, 33];

// 数组形式解构
const [arrFirst, arrSecond] = arr;
console.log({ arrFirst, arrSecond });

// 对象形式解构
const { 0: objFirst, 1: objSecond } = arr;
console.log({ objFirst, objSecond });

const executionsCount = 100000;

console.time('[]解构数组');
for (let i = 0; i < executionsCount; i++) {
  const [first, second] = arr;
}
console.timeEnd('[]解构数组');

console.time('{}解构数组');
for (let i = 0; i < executionsCount; i++) {
  const { 0: first, 1: second } = arr;
}
console.timeEnd('{}解构数组');

/* 
  []解构数组: 4.277ms
  {}解构数组: 1.616ms

  在大数据量的循环里，想要对数组进行解构的话，最好是通过 {} 去解构，这样减少一点性能损耗

  对数组的结构，用对象型结构的执行效率大于数组型结构的执行效率。
  
  细究的话追溯到v8底层
  https://mp.weixin.qq.com/s/9bRMCDrKSJWHZ2GNWGPknQ
*/
