// ### 对象的浅拷贝
const originObj = {
  name: '张三',
  age: 18,
  hobbies: ['吃饭', '睡觉'],
  address: {
    province: '江苏',
    city: '南京'
  }
};

const copyObj1 = Object.assign({}, originObj);
const copyObj2 = { ...originObj };

const copyObj3 = {};
Object.keys(originObj).forEach((key) => {
  copyObj3[key] = originObj[key];
});
console.log('copyObj3->', copyObj3);

const copyObj4 = {};
for (const key in originObj) {
  if (originObj.hasOwnProperty(key)) {
    // 为什么需要加hasOwnProperty()?
    copyObj4[key] = originObj[key];
  }
}
console.log('copyObj4->', copyObj4);

// 为什么for key in做对象的拷贝需要加hasOwnProperty()?
function Person() {
  this.name = '小明';
  this.age = '18';
}

function School() {
  this.school = '交通大学';
}

Person.prototype = new School();

const example = new Person();

const copyObjPlus = {};
for (const key in example) {
  if (example.hasOwnProperty(key)) {
    // 加上hasOwnProperty()
    copyObjPlus[key] = example[key];
  }
}
console.log('copyObjPlus->', copyObjPlus); // { name: '小明', age: '18' }

const copyObjPlusWithoutHasOwnProperty = {};
for (const key in example) {
  // 不加hasOwnProperty()
  copyObjPlusWithoutHasOwnProperty[key] = example[key];
}
console.log('copyObjPlusWithoutHasOwnProperty->', copyObjPlusWithoutHasOwnProperty);
// { name: '小明', age: '18', school: '交通大学' }

// 日常工作时候一般遍历let obj = {}这种对象，其实可以省略，但是如果我们开发一些工具库的时候还是严谨点好。

const copyObjPlus2 = {};
Object.keys(example).forEach((key) => {
  copyObjPlus2[key] = example[key];
});
console.log('copyObjPlus2->', copyObjPlus2); // { name: '小明', age: '18' }

// ### 数组的浅拷贝
const originArr = [1, 2, 3, { a: 5 }];

const copyArr1 = originArr.slice();
const copyArr2 = [].concat(originArr);
const copyArr3 = originArr.map((item) => item);
const copyArr4 = [...originArr];

originArr[3].a = 6;
console.log("copyArr4->", copyArr4); // [ 1, 2, 3, { a: 6 } ]
