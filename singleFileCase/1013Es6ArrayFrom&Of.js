// Es6 数组新增的特性
/*  
  构造函数 Array 新增方法 (新增的 静态方法)
    - Array.from() 
    - Array.of()
*/

// Array.from() 
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
const arr1 = Array.from(arrayLike); // ['a', 'b', 'c']

function example() {
  return Array.from(arguments);
}
const arr2 = example(1, 2, 3); // 将函数的参数转为数组 [1, 2, 3]

// 可迭代对象转数组
const set = new Set([4, 5, 6]);
const arrFromSet = Array.from(set); // 将 Set 转为数组 [4, 5, 6]

const str = "hello";
const arrFromStr = Array.from(str); // 将字符串转为数组 ['h', 'e', 'l', 'l', 'o']

/* 
  注意: Array.from()还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组
*/
Array.from([1, 2, 3], (n) => n ** 2) // // [1, 4, 9]

// Array.of()
Array.of(3, 11, 8); // [3, 11, 8]
Array.of(3); // [3]


/* 
  Array.of()对比Array()
    Array()是构造函数 根据参数数量不同，会有不同的结果
*/
// 无参时，返回空数组。 
Array(); // []

// 当参数数量是一个且参数是整数时，Array() 会创建指定长度的空数组
Array(3); // [, , ,] 即 [empty × 3]

// 参数数量是一个，但是不是整数，有不同的表现
Array(3.2); // RangeError: Invalid array length
Array("b"); // ['b']
Array(true); // [true]
Array(null); // [null]

// 参数数量为多个，创建数组
Array(3.2, 11, 8); // [3.2, 11, 8]
Array("3", "a", 5); // ['3', 'a', 5]

