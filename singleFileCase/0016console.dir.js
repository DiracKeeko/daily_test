// console.dir(obj[, options])

const obj = {
  name: 'Jack',
  age: 20,
  city: 'Hangzhou',
  address: {
    province: 'Zhejiang',
    city: 'Hangzhou'
  },
  friends: [
    {
      name: 'Jack',
      age: 20
    },
    {
      name: 'Jack',
      age: 20,
      address: {
        province: 'Zhejiang',
        city: 'Hangzhou'
      }
    }
  ]
};

console.log("---1---")
console.dir(obj, { depth: 1 });

console.log("---2---")
console.dir(obj, { depth: 2, color: true });

console.log("---Infinity---")
console.dir(obj, { depth: Infinity }); // 展开深度为无限大