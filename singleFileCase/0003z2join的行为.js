// join的行为
let fir = 'aaa';
let sec = 'bbb';
let res = [fir, sec, 3].join('-');

console.log('res->', res); // res-> aaa-bbb-3

fir = ['a'];
sec = ['b', 'c', 'd'];
const newArr = [fir, sec, 3];
console.log('newArr->', newArr); // [['a'], ['b', 'c', 'd'], 3];
res = newArr.join('-');
console.log('res2->', res); // res2-> a-b,c,d-3
