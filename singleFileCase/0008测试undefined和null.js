let a = undefined;
let b = null;

console.log('test undefined->', a === undefined); // true
console.log('test null->', b === null); // true
console.log("test undefined === null ->", a === b); // false
console.log("test undefined == null ->", a == b); // true

let c = 'undefined';
let d = 'null';

console.log('test str undefined->', c === undefined); // false
console.log('test str null->', d === null); // false
