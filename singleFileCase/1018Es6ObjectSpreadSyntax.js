// Es6 对象新增特性

// 4、扩展运算符配合解构赋值，创建新对象
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log({ x, y, z }); // { x: 1, y: 2, z: { a: 3, b: 4 } }

/* 
  注意：
    1、解构赋值必须是最后一个参数
    2、解构赋值是浅拷贝
 */

const obj = { a: { b: 1 } };
const { ...newOb } = obj;
// 上下两行等价
// const newOb = Object.assign();

obj.a.b = 2; // 修改obj里面a属性中键值
console.log(newOb.a.b); // 2，影响到了结构出来x的值

