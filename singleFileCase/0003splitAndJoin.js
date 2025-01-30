// arr.spilt(); split() 没有默认值

// 如果直接对str执行split 则结果是一个数组，数组中只有一个元素
let str = 'a bc def gggg';
let arr = str.split();
console.log('arr->', arr); // split-> [ 'a bc def gggg' ]

let arr1 = str.split(' ');
console.log('arr1->', arr1); // arr1-> [ 'a', 'bc', 'def', 'gggg' ]

let arr2 = 'abc'.split(''); // split('') 拆分每个元素
console.log('arr2->', arr2); // arr2-> [ 'a', 'b', 'c' ]

str = 'abc,bcd,efg,hij';
let result = str.split(',');
console.log('result->', result); // result-> [ 'abc', 'bcd', 'efg', 'hij' ]

// arr.join(); join有默认值","
const baseArr = ['a', 'b', 'c'];
const joinRes1 = baseArr.join(); // 等价于baseArr.join(",");
console.log('joinRes1->', joinRes1); // "a,b,c"

const joinRes2 = baseArr.join('');
console.log('joinRes2->', joinRes2); // "abc"

