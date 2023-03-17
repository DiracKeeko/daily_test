

let r = parseInt("10", 0);
console.log("r->", r);  // 10


let r1 = parseInt("10", 1);
console.log("r1->", r1);  // NaN   radix < 2  返回NaN
let r2 = parseInt("10", 37);
console.log("r2->", r2);  // NaN   radix > 36 返回NaN

let r3 = parseInt("3", 2);
console.log("r3->", r3);  // NaN  2进制中，出现了3，无法转换，返回值为NaN



let arr = ["1", "2", "3"]
let r4 = arr.map(stringPlus);
function stringPlus(str) {
  return str + "+";
}
console.log("r4->", r4);

