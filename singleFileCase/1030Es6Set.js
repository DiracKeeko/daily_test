// Es6 函数新增特性

// Set 集合  集合中的元素 无序、不重复的数据组成的
// 集合是以[值，值]的形式存储元素

/* 
  Set的实例关于增删改查的方法：

  add()
  添加某个值，返回 Set 结构本身
  当添加实例中已经存在的元素，set不会进行处理添加

  delete()
  删除某个值，返回一个布尔值，表示删除是否成功

  has()
  返回一个布尔值，判断该值是否为Set的成员

  clear()
  清除所有成员，没有返回值

  keys()：返回键名的遍历器
  values()：返回键值的遍历器
  entries()：返回键值对的遍历器
  forEach()：使用回调函数遍历每个成员
*/

const s = new Set();
s.add(1).add(2).add(2); // 2只被添加了一次

s.delete(1); // 返回值是 true

s.has(2); // true

s.clear(); // 没有返回值

// 遍历
const set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// forEach()用于对每个成员执行某种操作，没有返回值，键值、键名都相等，
// forEach方法有第二个参数，用于绑定处理函数的this  forEach(callbackFn, thisArg)

const set1 = new Set([1, 4, 9]);
set1.forEach((value, key) => console.log(key + ' : ' + value));
// 1 : 1
// 4 : 4
// 9 : 9
