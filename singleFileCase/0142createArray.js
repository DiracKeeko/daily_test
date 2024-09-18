// 按一定的规则 动态生成数组
const evenNumbers = Array.from({ length: 5 }, (v, i) => i * 2);
console.log(evenNumbers);  // [ 0, 2, 4, 6, 8 ]

const powerNumbers = Array.from({ length: 6 }, (v, i) => i ** 2);
console.log(powerNumbers);  // [ 0, 1, 4, 9, 16, 25 ]

const powerNumbers2 = Array(6).map((v, i) => i ** 2);
console.log(powerNumbers2);  // [ <6 empty items> ]

const powerNumbers3 = Array(6).fill(0).map((v, i) => i ** 2);
console.log(powerNumbers3);  // [ 0, 1, 4, 9, 16, 25 ]

/* 
解释 powerNumbers2

Array(6) 创建一个长度为 6的数组，但该数组是“稀疏数组”（也叫做稀疏矩阵），即它包含 6 个“empty slots”（空槽位），这些槽位没有被初始化。

当你对一个稀疏数组使用 .map() 时，JavaScript 不会对这些空槽位执行映射操作，因为空槽位实际上是“未定义”的位置，没有任何值。因此，.map() 不会对这些位置调用回调函数，
*/