// 对象的 属性描述符 get & set

let obj = Object.create(Object.prototype, {
  _age: {
    value: 18,
    writable: true
  },
  age: {
    get() {
      return this._age;
    },
    set(val) {
      this._age = val;
    }
  }
})

console.log("obj._age->", obj._age); // 18
console.log(obj.age); // 18

obj.age = 28;
console.log("change->", obj.age); // change-> 28

/* 
  思考：
    let obj = Object.create(Object.prototype, {}) 与 let obj = {} 创建对象有什么不同？
*/