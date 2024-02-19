console.log("typeof(null)->", typeof(null)); // object
console.log("typeof(undefined)->", typeof(undefined)); // undefined
console.log("typeof(boolean)->", typeof(true)); // boolean
console.log("typeof(number)->", typeof(123)); // number
console.log("typeof(bigint)->", typeof(123n)); // bigint
console.log("typeof(string)->", typeof("123")); // string
console.log("typeof(symbol)->", typeof(Symbol(123))); // symbol

console.log("typeof(object)->", typeof({})); // object
console.log("typeof(array)->", typeof([])); // object
console.log("typeof(RegExp)->", typeof(/abc/)); // object
console.log("typeof(Date)->", typeof(new Date())); // object
console.log("typeof(Error)->", typeof(new Error())); // object
console.log("typeof(function)->", typeof(function(){})); // function

console.log("typeof(WeakSet)->", typeof(new WeakSet())); // object
console.log("typeof(WeakMap)->", typeof(new WeakMap())); // object
console.log("typeof(Set)->", typeof(new Set())); // object
console.log("typeof(Map)->", typeof(new Map())); // object
console.log("typeof(Promise)->", typeof(new Promise(function(resolve, reject) {}))); // object
console.log("typeof(Proxy)->", typeof(new Proxy({}, {}))); // object
console.log("typeof(Int8Array)->", typeof(new Int8Array())); // object
console.log("typeof(Uint8Array)->", typeof(new Uint8Array())); // object


