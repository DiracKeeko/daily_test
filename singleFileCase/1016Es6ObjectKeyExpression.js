// Es6 对象新增特性

// 2、属性名表达式

let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word']; // "hello"
a[lastWord]; // "world"
a['last word']; // "world"

let obj = {
  ['h' + 'i']() {
    return 'hey';
  }
};

obj.hi(); // hey

/*
  注意：
  属性名表达式 与 属性简写不能同时使用
 */

/*
// 报错
const foo = 'bar';
const bar = 'abc';
const baz = { [foo] };

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'};
 */

// 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
const keyA = { a: 1 };
const keyB = { b: 2 };

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

console.log(myObject); // Object {[object Object]: "valueB"}  <- 就是这样的 'valueA' 消失了
