console.log(Number.isNaN("Hello")); // false
console.log(isNaN("Hello")); // true

console.log(Number.isNaN(NaN)); // true
console.log(isNaN(NaN)); // true

console.log(Number.isNaN(123)); // false
console.log(isNaN(123)); // false

console.log(Number.isNaN("123")); // false
console.log(isNaN("123")); // false