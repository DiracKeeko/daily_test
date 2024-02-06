
// parseInt(string, radix);
// radix 是 undefined、0 或 未指定 三种情况js会根据字符串的头部来决定采用哪种进制

let r = parseInt("5", 0);
console.log("r->", r);  // 5


let r1 = parseInt("5", 1);
console.log("r1->", r1);  // NaN   radix < 2  返回NaN
let r2 = parseInt("5", 37);
console.log("r2->", r2);  // NaN   radix > 36 返回NaN

let r3 = parseInt("5", 2);
console.log("r3->", r3);  // NaN  2进制中，出现了5，无法转换，返回值为NaN
// 注意：数字5 不是有效的 二进制 数据

let r4 = parseInt("5", 3);
console.log("r4->", r4); // NaN

let r5 = parseInt("5", 8);
console.log("r5->", r5); // 5

let r6 = parseInt("5", 10);
console.log("r6->", r6); // 5

let arr = ["1", "2", "3"]
let rMap = arr.map(stringPlus);
function stringPlus(str) {
  return str + "+";
}
console.log("rMap->", rMap); // rMap-> [ '1+', '2+', '3+' ]

