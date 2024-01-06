// Es6 数组新增的特性
/*  
  实例对象新增的方法 ( Array.prototype.Func() )
    - copyWithin()
    - find(), findIndex()
    - fill()
    - includes()
    - every(), some()
    - flat()

  == 不常用的
    - flatMap()
    - keys(), values(), entries()
*/

/* 
  1. copyWithin()
  复制数组的一部分到同一数组中的另一个位置，并返回该数组。 

  语法：arr.copyWithin(target, start, end)
  参数：
  target(必须)：从该位置开始替换数据。如果为负值，则从后往前计算。
  start(可选)：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
  end(可选)：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

  返回值：这个方法会修改原数组，并返回原数组。

  注意：
  1. 从数组中取出一个子数组，将该子数组复制到数组的指定位置，返回数组本身。
  2. 如果指定的起始位置和结束位置相同，或者结束位置小于起始位置，不会发生任何变化。

  示例：
  arr.copyWithin(0, 3);
  arr.copyWithin(0, 3, 4);
*/

const arr = [0, 1, 2, 3, 4];
console.log(arr.copyWithin(0, 3)); // [3, 4, 5, 3, 4]
console.log(arr); // [3, 4, 5, 3, 4] 因为原数组发生了变更

const arr1 = [0, 1, 2, 3, 4];
console.log(arr1.copyWithin(0, 2, 3)); // [2, 1, 2, 3, 4]

/* 
  2、find()
  3、findIndex()

  find() 方法返回数组中满足提供的测试函数的第一个元素的值, 如果找不到返回 undefined.
  findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引, 如果找不到返回 -1.

  语法：
  find([callback(currentValue, index, arr)])
  findIndex([callback(currentValue, index, arr)])
 */

/* 
  4、fill() 
  使用给定值，填充一个数组

  语法：
    fill(value[, start[, end]])
*/

console.log(['a', 'b', 'c'].fill(7)); // [7, 7, 7]
console.log(new Array(3).fill(7)); // [7, 7, 7]

/* 
  5、some()
  6、every()

  语法：
  some(callback(currentValue, index, arr))
  every(callback(currentValue, index, arr))

  some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。
  some() 返回一个布尔值，只要有一个符合条件就返回true；找到true，就不再继续查找。

  every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true
  every() 每一个都是true则返回true，如果有一个是false，那么直接返回false.(只要找到false，直接结束，不再继续向下查找)
 */


/* 
  7、flat()
  
  flat() 方法用于实现数组拍平
  语法：
    arr.flat([depth])

  depth：表示要提取嵌套数组的层数，默认为1。
  如果depth为正数，则会将嵌套的数组提取到对应的depth层。
  如果 depth 为 Infinity 则全部展开

  如果depth为0，则不展开。
  如果depth为负数，则不展开。

  flat() === flat(1)
  flat(Infinity) // 全部展开
*/

// ===flat===
console.log("===flat===");
const flatArray = [1, 2, [3, 4, [5, 6]]];

console.log(flatArray.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flatArray.flat(1)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flatArray.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

console.log("-1", flatArray.flat(-1)); // 无操作，返回结果与原数组相同 [1, 2, [3, 4, [5, 6]]];

console.log("null", flatArray.flat(null)); // 无操作，返回结果与原数组相同 [1, 2, [3, 4, [5, 6]]];

console.log(flatArray.flat(Infinity)); // 全部展开 [ 1, 2, 3, 4, 5, 6 ]


/* 
  8、flatMap()
*/
// ===flatMap===
// 等价于先map，再flat
console.log("===flatMap===");

let flatMapRes = [2, 3, 4].flatMap((x) => [x, x * 2]);
console.log("flatMapRes->", flatMapRes);
// [2, 4, 3, 6, 4, 8]


flatMapRes = [2, [3]].flatMap((x) => [x, x * 2]);
console.log("flatMapRes->", flatMapRes);
// 上下代码等价
console.log([2, [3]].map((item) => [item, item * 2]).flat());

// 注:
//  console.log([2, [3]].map((item) => [item, item * 2])); // [ [ 2, 4 ], [ [ 3 ], 6 ] ]


/* 
  keys(), values(), entries()
*/
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"