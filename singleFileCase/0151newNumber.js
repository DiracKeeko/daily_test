let num1 = 123;
let num2 = new Number(123);

console.log(num1 == num2);  // true
console.log(num1 === num2); // false
console.log(typeof num1);   // "number"
console.log(typeof num2);   // "object"