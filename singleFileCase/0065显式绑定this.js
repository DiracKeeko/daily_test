//定义一个函数
function foo() {
  console.log(this);
}

// foo.call(window);
foo.call(global);
foo.call({ name: "Mi" }); // { name: 'Mi' }
foo.call(2333); // Number对象 [Number: 2333]


const obj = {
  name: "City"
}

const newFunc = foo.bind(obj);
console.log("newFunc() ↓");
newFunc();


function sayName(firstName, lastName) {
  console.log(firstName + lastName);
}

sayName.call(this, "why", "h");
sayName.apply(this, ["why", "i"]);

const newSayName = sayName.bind(this, "why", "k"); // 绑定, 同时传参
// newSayName(); // whyk
newSayName("1", "2"); // whyk // 无法再次传参

const newSayName2 = sayName.bind(this); // 绑定, 不传参
newSayName2("why", "l");
