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

// get set 简化写法 结合对象字面量
let obj1 = {
  _age: 18,
  _name: "Rookie",
  // ↓ 访问age属性的时候，会触发 get age()方法; 这里age虽然像是函数，但是使用的时候是当做属性来使用的。
  get age() {
    return this._age;
  },
  set age(val) {
    this._age = val;
  },
  get name() {
    return this._name;
  },
  set name(val) {
    this._name = val;
  }
}

console.log("obj1._age->", obj1._age); // 18
console.log(obj1.age); // 18
console.log(obj1.name); // Rookie

obj1.age = 28;
console.log("obj1-change->", obj1.age); // change-> 28