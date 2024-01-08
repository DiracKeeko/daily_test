// Es6 对象新增特性

// 3、super关键字
const proto = {
  name: 'Tom'
};

const instance = {
  name: 'Jerry',
  sayName() {
    console.log('myName:', this.name); // this指向当前对象
    console.log('protoName: ', super.name); // super指向当前对象的原型对象
  }
};

console.log(instance.sayName());
/* 
myName: Jerry
protoName:  undefined
*/

Object.setPrototypeOf(instance, proto); // 设置prototype
console.log(instance.sayName());
/* 
myName: Jerry
protoName:  Tom
*/
