// 按一定的规则 动态生成数组
const evenNumbers = Array.from({ length: 5 }, (v, i) => i * 2);
console.log(evenNumbers);  // [ 0, 2, 4, 6, 8 ]

const powerNumbers = Array.from({ length: 6 }, (v, i) => i ** 2);
console.log(powerNumbers);  // [ 0, 1, 4, 9, 16, 25 ]