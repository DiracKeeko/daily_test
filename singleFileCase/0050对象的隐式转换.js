// 在进行 a == b 比较的时候，如果a或者b是对象，则会调用 valueOf() > toString() 方法进行隐式转换

let myObj = {
  valueOf() {
    return 1;
  },
  toString() {
    return '2';
  }
};

// 优先调用 valueOf() 方法
console.log(myObj == '2'); // false
console.log(myObj == 1); // true

myObj = {
  valueOf() {
    return {};
  },
  toString() {
    return '2';
  }
};

// 如果valueOf()返回的不是基本数据类型，则再调用toString()方法
console.log(myObj == '2'); // true
console.log(myObj == 1); // false