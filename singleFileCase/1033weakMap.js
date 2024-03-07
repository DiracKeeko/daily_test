// WeakMap

/* 
  WeakMap 相较于Map

  1. WeakMap只接受引用数据类型作为键名 (object, array, function都可以，但是null不可以)
  2. WeakMap的键名(key)所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用
  3. 没有遍历操作的API (也不可以直接遍历操作)
  4. 没有clear清空方法
*/

/* 
  应用场景
    在网页的 DOM 元素上添加数据，就可以使用WeakMap结构，当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除
    const wm = new WeakMap();

    const element = document.getElementById('example');

    wm.set(element, 'some information');
    wm.get(element) // "some information"
*/

const map = new Map();

const key1 = "key1";
const key2 = 123;
const key3 = { name: "John" };

map.set(key1, "value1");
map.set(key2, "value2");
map.set(key3, "value3");

map.get(key1); // "value1"
map.get(key2); // "value2"

// 使用forEach遍历
console.log("forEach->");
map.forEach((value, key) => {
  console.log(key, value);
})

// 使用keys()遍历
console.log("map.keys()->");
for (let key of map.keys()) {
  console.log(key, map.get(key));
}

// clear()
map.clear();


// WeakMap 
const weakMap = new WeakMap();

// 不能使用基本数据类型作为key，否则会直接报错。
// weakMap.set(key1, "value1"); // TypeError: Invalid value used as weak map key
// weakMap.set(key2, "value2"); // TypeError: Invalid value used as weak map key
weakMap.set(key3, "value3");


let arr = [1, 2, 3];
weakMap.set(arr, 3);

// weakMap使用forEach遍历，会抛出异常 TypeError: weakMap.forEach is not a function
/* 
weakMap.forEach((value, key) => {
  console.log(key, value);
})
 */

// weakMap 使用keys()遍历  TypeError: weakMap.keys is not a function or its return value is not iterable
/* 
for (let key of weakMap.keys()) {
  console.log(key, weakMap.get(key));
}
 */

const res = weakMap.get(arr);
console.log("res->", res); // 3

arr = null;
const res2 = weakMap.get(arr);
console.log("res2->", res2); // undefined 自动删除了


// clear()
// weakMap.clear(); // TypeError: weakMap.clear is not a function

