
// parseInt(string, radix);
// radix 是 undefined、0 或 未指定 三种情况js会根据字符串的头部来决定采用哪种进制

console.log(parseInt(1/0, 19)); // 18
// console.log("1/0 ->", 1/0); // 1/0 -> Infinity

console.log(parseInt(false, 16)); // 250
// console.log(parseInt("fa", 16)); // 250


