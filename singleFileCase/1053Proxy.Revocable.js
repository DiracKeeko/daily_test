// Proxy
// Proxy.revocable

/* 
  Proxy.revocable() 方法可以用来创建一个可撤销的代理对象。

  语法：
    const p = Proxy.revocable(target, handler);
  
  target
    要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

  handler
    一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

  返回值
    返回一个包含了代理对象本身和它的撤销方法的可撤销 Proxy 对象。
    其结构为： {"proxy": proxy, "revoke": revoke}，其中：

      proxy
        表示新生成的代理对象本身，和用一般方式 new Proxy(target, handler) 创建的代理对象没什么不同，只是它可以被撤销掉。

      revoke
        撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。

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

*/

// ↓ Proxy.revocable 例1
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return "[[" + name + "]]";
    },
  },
);
const proxyInstance = revocable.proxy;
console.log(proxyInstance.foo); // "[[foo]]"

revocable.revoke();

// console.log(proxyInstance.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
proxyInstance.foo = 1; // TypeError: Cannot perform 'set' on a proxy that has been revoked

// console.log(typeof proxyInstance); // object
