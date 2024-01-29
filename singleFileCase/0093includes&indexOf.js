const arr = [1, 2, NaN, 4];

console.log(arr.indexOf(NaN)); // 输出: -1  -> indexOf()不能检查NaN
console.log(arr.includes(NaN)); // 输出: true  -> includes()可以检查NaN

console.log("NaN===NaN ->", NaN === NaN); // false
console.log("Object.is(NaN, NaN) ->", Object.is(NaN, NaN)); // true