// WeakSet
/*
  WeakSet 相较于Set
  1、WeakSet只能成员只能是引用类型数据，而不能是基本数据类型
  2、没有size属性
  3、没有遍历操作的API (WeakSet 不是可迭代的，不能直接遍历其中的值)
  4、WeakSet里面的引用只要在外部消失，它在 WeakSet里面的引用就会自动消失 
*/
// weakSet没有遍历的场景，如果需要遍历weakSet，那么需要用数组或者其他数据结构，记录key，value 再用ws.get(key)获取值
// 这种做法会影响对象的垃圾回收行为，因为对象会一直存在于数组 itemsArray 中

const a = [[1, 2], [3, 4]];
const weakSet = new WeakSet(a);
console.log("weakSet->", weakSet); // weakSet-> WeakSet { <items unknown> }
// WeakSet {[1, 2], [3, 4]}

// 不可以是基本数据类型的数据
// const b = new WeakSet([2,3]); // 报错 TypeError: Invalid value used in weak set 

const ws = new WeakSet();
const foo = {};
let bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // 从 set 中删除 foo 对象
console.log(ws.has(foo)); // false，foo 对象已经被删除了
console.log(ws.has(bar)); // true，bar 依然存在

console.log("=====");
bar = null;
console.log(ws.has(bar)); // false ，bar 对象已经被回收了