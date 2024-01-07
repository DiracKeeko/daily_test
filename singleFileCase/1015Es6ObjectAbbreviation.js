// Es6 对象新增特性

// 对象键名对应的是匿名函数 可以进行简写
const student1 = {
  name: "Tom",
  action: function () {
    console.log("sleep");
  },
};

// 上下两种方式等价
const student2 = {
  name: "Tom",
  action() {
    // 方法的简写
    console.log("sleep");
  },
};

/* 
  注意：简写的对象方法不能作为构造函数使用，否则会报错
 */

const st1 = new student1.action(); // sleep
const st2 = new student2.action(); // TypeError: student.action is not a constructor

/* 
  st1 没有报错 
    可能是因为运行环境不同导致的的差异。但根据 ECMAScript 规范，普通函数作为构造函数（使用 new 关键字）时通常会产生错误
    (new 一个普通函数，执行函数本身)

  st2 这里是属性，不是方法，所以报错 
*/

