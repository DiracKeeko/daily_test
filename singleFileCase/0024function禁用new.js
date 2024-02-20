

function ForbiddenNew(a) {
  console.log("this->", this);
  if (this instanceof ForbiddenNew) {
    throw new Error('Uncaught TypeError: A is not a constructor');
  }
  return Number(a);
}

const aNumber = ForbiddenNew(1);
console.log("aNumber->", aNumber); // 1

// const test = new ForbiddenNew(1); // Error: Uncaught TypeError: A is not a constructor

/* 
  再复习一下class，class 创建的类型也是function，且只能通过new调用，应该函数内部也是加了类似上面的校验，
  当this instanceof 不等于当前class时，就直接抛异常

  总结：核心问题是 this 的指向问题，一般直接调用A()时this指向全局对象 (window || global)
  new A()时，this指向A()的实例对象
*/


function ClassLike() {
  if (!(this instanceof ClassLike)) {
    throw new Error('Uncaught TypeError: A is a class, use new');
  }
}
