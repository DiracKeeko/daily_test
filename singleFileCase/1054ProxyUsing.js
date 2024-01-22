// Proxy 使用场景

/* 
  Proxy 使用场景
    1、拦截外部对对象属性的写入和读取
      1.1、拦截写入  -> 表单验证 (校验写入数据的类型)
      1.2、拦截读取  -> 保护私有属性
*/

// 1.1、拦截写入  -> 表单验证 (校验写入数据的类型)
let numericDataStore = { count: 0, amount: 1234, total: 14 };
numericDataStore = new Proxy(numericDataStore, {
  set(target, key, value, proxy) {
    if (typeof value !== 'number') {
      throw Error('属性只能是number类型');
    }
    return Reflect.set(target, key, value, proxy);
  }
});

// numericDataStore.count = "foo"
// Error: 属性只能是number类型

numericDataStore.count = 333;
// 赋值成功

console.log(numericDataStore.count); // 333

const api = {
  _apiKey: '123abc456def',
  getUser(userId) {},
  setUser(userId, config) {}
};
const RESTRICTED = ['_apiKey'];
const apiWithLimit = new Proxy(api, {
  get(target, key, proxy) {
    if (RESTRICTED.includes(key)) {
      throw Error(`${key} 不可访问.`);
    }
    if (key === "getEncodeApiKey") { // 只有通过这个方法可以访问加密后的_apiKey
      return function () {
        // 在这个函数中访问 _apiKey
        return 'encode' + target._apiKey;
      };
    }
    return Reflect.get(target, key, proxy);
  },
  set(target, key, value, proxy) {
    if (RESTRICTED.includes(key)) {
      throw Error(`${key} 不可修改`);
    }
    return Reflect.get(target, key, value, proxy);
  }
});

console.log("inner func->", apiWithLimit.getEncodeApiKey());

// console.log(apiWithLimit._apiKey)
// apiWithLimit._apiKey = '987654321';
// 上述都抛出错误
