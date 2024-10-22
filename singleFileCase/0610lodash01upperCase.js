const lodash = require("../common/lib/lodash4.17.15.js");

console.log("========01=========");
const case01 = "abc";
console.log("origin js toUpperCase ->", case01.toUpperCase()); // "ABC"
console.log("lodash upperCase ->", lodash.upperCase(case01)); // "ABC"


console.log("========02=========");
const case02 = "中文测试";
console.log("origin js toUpperCase ->", case02.toUpperCase()); // "中文测试"
console.log("lodash upperCase ->", lodash.upperCase(case02)); // "中文测试"


console.log("========03=========");
const case03 = "500";
console.log("origin js toUpperCase ->", case03.toUpperCase()); // "500"
console.log("lodash upperCase ->", lodash.upperCase(case03)); // "500"


console.log("========04=========");
const case04 = "中文500";
console.log("origin js toUpperCase ->", case04.toUpperCase()); // "中文500"
console.log("lodash upperCase ->", lodash.upperCase(case04)); // "中文 500"


console.log("========05=========");
const case05 = "中文abc";
console.log("origin js toUpperCase ->", case05.toUpperCase()); // "中文ABC"
console.log("lodash upperCase ->", lodash.upperCase(case05)); // "中文ABC"


console.log("========06=========");
const case06 = "中文abc500";
console.log("origin js toUpperCase ->", case06.toUpperCase()); // "中文ABC500"
console.log("lodash upperCase ->", lodash.upperCase(case06)); // "中文ABC 500"


console.log("========07=========");
const case07 = "中文500abc";
console.log("origin js toUpperCase ->", case07.toUpperCase()); // "中文500ABC"
console.log("lodash upperCase ->", lodash.upperCase(case07)); // "中文 500 ABC"

/* 
  总结: 
    1. 对单一的字母字符串，纯中文字符串，纯数字字符串，做toUpperCase处理时，js原生的toUpperCase与lodash.upperCase() 执行结果相同。
    2. 在 字母字符串、纯中文字符串、纯数字字符串 三者组合下 js原生toUpperCase仅处理字符串中的字母字符串部分，将字母字符串中的小写字母变为大写; 而lodash.upperCase()不仅会有对 字母字符串 进行小写->大写变换, 还会对字符串中的 数字字符串部分 进行(非首位、末位的)前后加空格处理。
*/
