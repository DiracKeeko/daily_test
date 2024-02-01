const reg1 = new RegExp("ab", "i");
const str1 = "a";
let result = reg1.test(str1);
console.log(result); // false
console.log(reg1.test("ab")); // true
console.log(reg1.test("Absic")); // true

const reg2 = /[0-9]{4}/g; // 匹配任意四个连续的数字 全局模式
const str2 = "ac1233cc8888";
const res2 = reg2.exec(str2);
console.log(res2); // [ '1233', index: 2, input: 'ac1233cc8888', groups: undefined ]


// const regStartWithAtSame = /^@(\/.*|$)/; 
// 上下两个正则没什么区别  (?: ...) 表示非捕获型分组
const regStartWithAt = /^@(?:\/.*|$)/;
console.log(regStartWithAt.test("@")); // true
console.log(regStartWithAt.test("@utils")); // false
console.log(regStartWithAt.test("@/utils")); // true
console.log(regStartWithAt.test("@/components/common")); // true
console.log(regStartWithAt.test("@/")); // true
