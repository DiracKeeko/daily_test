// 在进行 a + b 运算的时候，存在 boolean, null, undefined 时的隐式转换

console.log(true + 3); // 输出 4（true被转换为数字1）
console.log(false + '3'); // 输出"false3"

console.log(null + 2); //输出2（nuLL被转换为数字θ）
console.log(undefined + 2); //输出NaN（undefined被转换为数字NaN）
console.log('Hello, ' + null); //输出Hello, null (null被转换为字符串"null")
console.log('Hello, ' + undefined); //输出"Hello, undefined" (undefined 被转换为字符串"undefined")
