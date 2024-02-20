// instanceof
console.log('null instanceof Object->', null instanceof Object); // false
console.log('undefined instanceof Object->', undefined instanceof Object); // false

// console.log("undefined instanceof Object->", undefined instanceof undefined); // 报错 Right-hand side of 'instanceof' is not an object

// instanceof这个运算符是用来测试一个对象的原型链上是否有该原型的构造函数，
// 即instanceof左表达式要是一个对象，右侧表达式要是一个构造函数，并且左侧是右侧实例化出来的对象才会返回true
console.log('12 instanceof Number->', 12 instanceof Number); // false
console.log('Number(12) instanceof Number->', Number(12) instanceof Number); // false
console.log('new Number(12) instanceof Number->', new Number(12) instanceof Number); // true

console.log("'1' instanceof String->", '1' instanceof String); // false
console.log("String('1') instanceof String->", String('1') instanceof String); // false
console.log("new String('1') instanceof String->", new String('1') instanceof String); // true

console.log('true instanceof Boolean->', true instanceof Boolean); // false
console.log('Boolean(true) instanceof Boolean->', Boolean(true) instanceof Boolean); // false
console.log('new Boolean(true) instanceof Boolean->', new Boolean(true) instanceof Boolean); // true

console.log('123n instanceof BigInt->', 123n instanceof BigInt); // false
console.log('BigInt(123) instanceof BigInt->', BigInt(123) instanceof BigInt); // false
// console.log('new BigInt(123) instanceof BigInt->', new BigInt(123) instanceof BigInt); // 报错: BigInt is not a constructor 也就是说 不可以new
console.log('Object(123n) instanceof BigInt->', Object(123n) instanceof BigInt); // true
console.log('Object(BigInt(123)) instanceof BigInt->', Object(BigInt(123)) instanceof BigInt); // true


console.log('Symbol(123) instanceof Symbol->', Symbol(123) instanceof Symbol); // false
// console.log('new Symbol(123) instanceof Symbol->', new Symbol(123) instanceof Symbol); // 报错: Symbol is not a constructor
console.log('Object(Symbol(123)) instanceof Symbol->', Object(Symbol(123)) instanceof Symbol); // true


console.log('{} instanceof Object->', {} instanceof Object); // true
console.log('new Object() instanceof Object->', new Object() instanceof Object); // true

console.log('[] instanceof Array->', [] instanceof Array); // true
console.log('Array() instanceof Array->', Array() instanceof Array); // true
console.log('new Array() instanceof Array->', new Array() instanceof Array); // true
console.log('Array.of(3) instanceof Array->', Array.of(3) instanceof Array); // true
console.log('[] instanceof Object->', [] instanceof Object); // true


console.log('function(){} instanceof Function->', function () {} instanceof Function); // true
console.log('function(){} instanceof Object->', function () {} instanceof Object); // true


console.log('new Date() instanceof Date->', new Date() instanceof Date); // true
console.log('new Date() instanceof Object->', new Date() instanceof Object); // true


console.log('new Error() instanceof Error->', new Error() instanceof Error); // true
console.log('new Error() instanceof Object->', new Error() instanceof Object); // true


console.log('new Promise((res, rej) => {}) instanceof Promise->', new Promise((res, rej) => {}) instanceof Promise); // true
console.log('new Promise((res, rej) => {}) instanceof Object->', new Promise((res, rej) => {}) instanceof Object); // true


console.log('/abc/ instanceof RegExp->', /abc/ instanceof RegExp); // true
console.log('new RegExp("abc") instanceof RegExp->', new RegExp("abc") instanceof RegExp); // true
console.log('/abc/ instanceof Object->', /abc/ instanceof Object); // true

console.log('new Set() instanceof Set->', new Set() instanceof Set); // true
console.log('new Set() instanceof Object->', new Set() instanceof Object); // true

console.log('new Map() instanceof Map->', new Map() instanceof Map); // true
console.log('new Map() instanceof Object->', new Map() instanceof Object); // true

console.log('new Int8Array() instanceof Int8Array->', new Int8Array() instanceof Int8Array); // true
console.log('new Int8Array() instanceof Object->', new Int8Array() instanceof Object); // true
