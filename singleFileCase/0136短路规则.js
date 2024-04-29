
// && 运算符的短路操作
console.log("hello" && 5); // 5
console.log(0 && "world"); // 0
console.log("" && false); // ""
console.log(false && ""); // false
console.log(true && "h"); // "h"

// || 运算符的短路操作
console.log("hello" || 5); // "hello"
console.log(0 || "world"); // "world"
console.log("" || false); // false
console.log(false || ""); // ""
console.log(true || "h"); // true