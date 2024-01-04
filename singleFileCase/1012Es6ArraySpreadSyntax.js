// Es6 数组新增的特性

// 1、扩展语法 (spread syntax)

// 用途1、数组合并
const arr1 = ["a", "b"];
const arr2 = ["c"];
const arr3 = ["d", "e"];
const res = [...arr1, ...arr2, ...arr3];

console.log("res->", res); // [ 'a', 'b', 'c', 'd', 'e' ]
arr1[0] = 1; // arr1[0] 指向的是基本数据类型，所以浅拷贝之后变更不会影响res数组。
console.log("res->", res); // [ 'a', 'b', 'c', 'd', 'e' ]

const arr11 = [[1, 2], "b"];
const arr12 = ["c"];

// 用途2、函数调用的时候，将一个数组变为参数序列
function myPush(array, ...items) {
  // 经过上面的扩展运算符"..."" 现在items是一个数组
  return array.concat(items);
}

const myPushRes = myPush([0], 1, 2);
console.log("myPushRes->", myPushRes); // [ 0, 1, 2 ]

// 用途3、将定义了遍历器（Iterator）接口的对象转为数组
/* 
const nodeList = document.querySelectorAll('div');
const nodeListToArray = [...nodeList]; // [ div, div, div ]
*/

const map = new Map([
  [1, 'one'],
  [2, 'two']
]);
map.set(3, 'three');
console.log("map->", map);
const mapToArray = [...map]; // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
console.log("mapToArray->", mapToArray);

const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
const setToArray = [...set]; // [ 1, 2, 3 ]
console.log("setToArray->", setToArray);

const stringArr = [...'hello']; // [ "h", "e", "l", "l", "o" ]

// 用途4、数组赋值 （不常用)
/* 
  const [first, ...rest] = [1, 2, 3, 4, 5];
  first // 1
  rest  // [2, 3, 4, 5]

  const [first, ...rest] = [];
  first // undefined
  rest  // []

  const [first, ...rest] = ["foo"];
  first  // "foo"
  rest   // []
*/


// 扩展运算符使用注意： 

// 通过扩展运算符实现的是浅拷贝。如果原数组的元素是引用数据类型，修改引用指向的值，会同步反映到新数组
const arr11Res = [...arr11, ...arr12];
console.log("arr11Res->", arr11Res); // [ [ 1, 2 ], 'b', 'c' ]
arr11[0][0] = 3;
console.log("arr11Res->", arr11Res); // [ [ 3, 2 ], 'b', 'c' ]


// 如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错
const obj = {
  foo: 1,
  bar: 2
};
const arr = [...obj]; // TypeError: obj is not iterable
 
