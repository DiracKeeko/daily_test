// Es6 函数新增特性

// Set 字典  字典是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同
// 字典是以[键，值]的形式存储元素

// Map类型是键值对的有序列表，而键和值都可以是任意类型

/* 
  Set的实例关于增删改查的方法：

  size 属性
  size属性返回 Map 结构的成员总数。

  set()
  设置键名key对应的键值为value，然后返回整个 Map 结构
  如果key已经有值，则键值会被更新，否则就新生成该键
  同时返回的是当前Map对象，可采用链式写法

  get()
  get方法读取key对应的键值，如果找不到key，返回undefined

  has()
  has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

  delete()
  delete方法删除某个键，返回true。如果删除失败，返回false

  clear()
  clear方法清除所有成员，没有返回值

*/

const map1 = new Map();
map1.set('foo', true);
map1.set('bar', false);
console.log(map1.size); // 2

const m = new Map();
m.set('edition', 6); // 键是字符串
m.set(262, 'standard'); // 键是数值
m.set(undefined, 'nah'); // 键是 undefined
m.set(1, 'a').set(2, 'b').set(3, 'c'); // 链式操作

m.get('edition'); // 6

m.has('edition'); // true
m.has('years'); // false

m.has(undefined); // true
m.delete(undefined);
m.has(undefined); // false

/* 
  遍历
  Map结构原生提供三个遍历器生成函数和一个遍历方法：

  keys()：返回键名的遍历器
  values()：返回键值的遍历器
  entries()：返回所有成员的遍历器

  forEach()：遍历 Map 的所有成员

  遍历顺序就是插入顺序
*/
const map = new Map([
  ['F', 'no'],
  ['T', 'yes']
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

map.forEach(function (value, key, map) {
  console.log('Key: %s, Value: %s', key, value);
});
