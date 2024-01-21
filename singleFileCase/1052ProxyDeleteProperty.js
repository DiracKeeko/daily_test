// Proxy
// deleteProperty

/* 
  Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

  语法：
    const p = new Proxy(target, handler)
  
  target
    要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

  handler
    一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

    3. handler.deleteProperty()
    handler.deleteProperty() 方法用于拦截对对象属性的 delete 操作

    var p = new Proxy(target, {
      deleteProperty: function (target, property) {},
    });

    返回值：
    deleteProperty 必须返回一个 Boolean 类型的值，表示了该属性是否被成功删除

*/

// ↓ handler.deleteProperty 例1
var p = new Proxy(
  {},
  {
    deleteProperty(target, key) {
      console.log('called: ' + key);
      if (target.hasOwnProperty(key)) {
        console.log('do delete');
        Reflect.deleteProperty(target, key); // 这个是真正的 操作删除key的方式，用Reflect
        return true;
      } else {
        console.log('do not delete');
        return false;
      }
    }
  }
);

delete p.a; // "called: a"

// ↓ handler.deleteProperty 例2
var handler = {
  deleteProperty(target, key) {
    invariant(key);
    Reflect.deleteProperty(target, key);
    return true;
  }
};
function invariant(key) {
  if (key[0] === '_') {
    throw new Error(`无法删除私有属性`);
  }
}

var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop;
// Error: 无法删除私有属性
