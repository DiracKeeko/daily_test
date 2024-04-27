const obj = {
  a: 1,
  b: 2
};

Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false
});

console.log(Object.keys(obj)); // ['a', 'b']
console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b', 'c']
