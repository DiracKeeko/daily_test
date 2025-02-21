let a = "111";
let b = new String("111");
// console.log("b->", b); // b-> [String: '111']
// console.log(typeof b); // object // 字符串对象
let c = "111"

let res = a == b; // true
let res1 = a === b; // false
let res2 = a === c; // true

console.log("res->", res);
console.log("res1->", res1);
console.log("res2->", res2);
