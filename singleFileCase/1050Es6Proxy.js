// Proxy

/* 
  Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

  语法：
    const p = new Proxy(target, handler)
  
  target
    要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

  handler
    一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
*/

/* 
  handler
    包含捕捉器（trap）的占位符对象，可译为处理器对象。

  traps
    提供属性访问的方法。这类似于操作系统中捕获器的概念。

  target
    被 Proxy 代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。
*/

/* 
  handler解析
    关于handler拦截属性，有如下：

  get(target, propKey, receiver)：拦截对象属性的读取
  set(target, propKey, value, receiver)：拦截对象属性的设置
  has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值
  
  deleteProperty(target,propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值
  ownKeys(target)：拦截Object.keys(proxy)、for...in等循环，返回一个数组
  getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
  defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc），返回一个布尔值
  preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值
  getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象
  isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值
  setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值
  apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作
  construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作
*/

/* 
  Reflect
    若需要在Proxy内部调用对象的默认行为，建议使用Reflect，其是ES6中操作对象而提供的新 API

  基本特点：
    只要Proxy对象具有的代理方法，Reflect对象全部具有，以静态方法的形式存在
    修改某些Object方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回false）
    让Object操作都变成函数行为
*/

// 在下面简单示例中，当对象中不存在属性名时，默认返回值为 37。(展示 get handler 的使用场景)
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
  }
};

let p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log("c" in p, p.c); // false, 37

// 对一个数组get
function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1]); // c

// 无操作转发代理
// 在以下例子中，我们使用了一个原生 JavaScript 对象，代理会将所有应用到它的操作转发到这个对象上
let target = {};
let p1 = new Proxy(target, {});
p1.a = 22; // 操作转发到目标

console.log(target.a); // 22 操作已经被正确地转发

