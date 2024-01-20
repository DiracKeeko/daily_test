// Proxy
// get set

/* 
  Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

  语法：
    const p = new Proxy(target, handler)
  
  target
    要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

  handler
    一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

    1. handler.get()
    handler.get() 方法接受三个参数，依次为目标对象、属性名和 proxy 实例本身，最后一个参数可选。

    var p = new Proxy(target, {
      get(target, property[, receiver]) {
      }
    });

    约束：
      如果违背了以下的约束，proxy 会抛出 TypeError:
      1.如果要访问的目标属性是不可写以及不可配置的，则返回的值必须与该目标属性的值相同。
      2.如果要访问的目标属性没有配置访问方法，即 get 方法是 undefined 的，则返回值必须为 undefined。
      (configurable, writable 这两个属性任何一个为true都不会报错。
                              这两个属性都为false就会报错)
      (见 handler.get 例2)

    2. handler.set()
    handler.set() 方法是设置属性值操作的捕获器，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身

    var p = new Proxy(target, {
      set(target, property, value[, receiver]) {
      }
    });

    注意: 
      1.如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用 (见 handler.set 例2)
      2.严格模式下，set代理如果没有返回true，就会报错

*/

// ↓ handler.get 例1
var p = new Proxy(
  {},
  {
    get: function (target, prop, receiver) {
      console.log('called: ' + prop);
      return 10;
    }
  }
);

console.log(p.a); // "called: a"; output 10

// ↓ handler.get 例2
var objGet = {};
Object.defineProperty(objGet, 'a', {
  // configurable: true, // configurable, writable 任一个为true都不会报错
  configurable: false,
  enumerable: false,
  value: 10,
  // writable: true // configurable, writable 任一个为true都不会报错
  writable: false
});

var p = new Proxy(objGet, {
  get(target, prop) {
    return 20;
  }
});

console.log(p.a); //会抛出 TypeError
// `TypeError: 'get' on proxy: property 'a' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual value (expected '10' but got '20')`

console.log("===分割线===");

// ↓ handler.set 例1
const monster1 = { eyeCount: 4 };
const handler1 = {
  set(obj, prop, value) {
    if (prop === 'eyeCount' && value % 2 !== 0) {
      console.log('Monsters must have an even number of eyes');
    } else {
      return Reflect.set(...arguments);
    }
  }
};

const proxy1 = new Proxy(monster1, handler1);

proxy1.eyeCount = 1;
// Expected output: "Monsters must have an even number of eyes"

console.log(proxy1.eyeCount);
// Expected output: 4

proxy1.eyeCount = 2;
console.log(proxy1.eyeCount);
// Expected output: 2

// ↓ handler.set 例2
const obj = {};
Object.defineProperty(obj, 'foo', {
  value: 'bar',
  writable: false
});

const handler = {
  set: function (obj, prop, value, receiver) {
    obj[prop] = 'baz';
  }
};

const proxy = new Proxy(obj, handler);
proxy.foo = 'baz'; // 由于obj.foo不可写，这里的设置会失效
console.log(proxy.foo); // "bar"
