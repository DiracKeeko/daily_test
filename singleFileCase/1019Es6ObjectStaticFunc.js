// Es6 对象新增特性

/*  
  构造函数 Object 新增方法 (新增的 静态方法)
    - Object.is()
    - Object.assign()
    - Object.getOwnPropertyDescriptors()
    - Object.setPrototypeOf(), Object.getPrototypeOf()
    - Object.keys(), Object.values(), Object.entries(), Object.fromEntries()
*/


// 1. Object.is() 严格判断两个值是否相等
// 与严格比较运算符（===）的行为基本一致。不同之处只有两个：一是+0不等于-0，二是NaN等于自身

console.log("+0 === -0 ->", +0 === -0); // true
console.log("NaN === NaN ->", NaN === NaN); // false

console.log("Object.is(+0, -0) ->", Object.is(+0, -0)); // false
console.log("Object.is(NaN, NaN) ->", Object.is(NaN, NaN)); // true


// 2. Object.assign() 将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象。
/* 
  语法：
    Object.assign(target, ...sources)
*/

const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign({}, source1); // 两参数使用

Object.assign(target, source1, source2); // 三参数使用
console.log(target); // {a:1, b:2, c:3}


// 3. Object.getOwnPropertyDescriptors()
// 返回指定对象所有自身属性（非继承属性）的描述对象
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

console.log(Object.getOwnPropertyDescriptors(obj));
// { 
//   foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } 
// }

// 4.1. Object.setPrototypeOf()  可以将一个指定对象的原型（即内部的 [[Prototype]] 属性）设置为另一个对象或者null
/*
  语法：
    Object.setPrototypeOf(object, prototype)
 */

// 用法
const obj1 = {};
const parent = { foo: 'bar' };

console.log("without set proto -> ", obj1.foo);
// Expected output: undefined

Object.setPrototypeOf(obj1, parent);

console.log("after set proto -> ", obj1.foo);
// Expected output: "bar"

// 4.2. Object.getPrototypeOf() 读取一个对象的原型对象
const proto = Object.getPrototypeOf(obj1);
console.log("proto -> ", proto);
console.log("proto === parent ->", proto === parent); // true


// 5. Object.keys(), Object.values(), Object.entries()
/* 
  Object.keys()
    返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组

  Object.values()
    返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组

  Object.entries()
    返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组

  Object.fromEntries()
    将一个键值对数组转为对象
*/

const obj2 = { foo: 'bar', baz: 42 };
Object.keys(obj2)
// ["foo", "baz"]

Object.values(obj2)
// ["bar", 42]

Object.entries(obj2)
// [["foo", "bar"], ["baz", 42]]

Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }