const arr = [0, 1, 2, 3, 4, 5];

console.log("arr.length ->", arr.length); // 6
console.log("arr[-1] ->", arr[-1]); // undefined
console.log("arr[-2] ->", arr[-2]); // undefined

console.log("arr[5] ->", arr[5]); // 5
console.log("arr[6] ->", arr[6]); // undefined

arr.length = 3;
console.log("arr[5] ->", arr[5]); // 5
console.log("arr->", arr);