// WeakMap

/* 
  WeakMap 相较于Map

  1. WeakMap只接受引用数据类型作为键名 (object, array, function都可以，但是null不可以)
  2. 没有遍历操作的API (也不可以直接遍历操作)
  3. 没有clear清空方法
  4. WeakMap的键名(key)所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用
*/

/* 
  应用场景
    在网页的 DOM 元素上添加数据，就可以使用WeakMap结构，当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除
    const wm = new WeakMap();

    const element = document.getElementById('example');

    wm.set(element, 'some information');
    wm.get(element) // "some information"
*/

const map = new WeakMap();
let arr = [1, 2, 3];
map.set(arr, 3);

const res = map.get(arr);
console.log("res->", res); // 3

arr = null;
const res2 = map.get(arr);
console.log("res2->", res2); // undefined 自动删除了