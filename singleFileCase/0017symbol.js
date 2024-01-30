// 0017symbol 最基本用法
const sy1 = Symbol();
const sy2 = Symbol();
console.log("sy1->", sy1); // Symbol()
console.log("sy1 === sy2 ->", sy1 === sy2); // false

const i1 = Symbol("一个id");
const i2 = Symbol("一个id");
console.log("i1->", i1); // Symbol(一个id)
console.log("i1 === i2 ->", i1 === i2); // false


// 若想在全局作用域中使用Symbol，可以使用Symbol.for方法，传入一个字符串，返回一个Symbol值
// (定义一个symbol, 且今后还想使用这个symbol变量)
const s1 = Symbol.for("sss");
console.log("s1->", s1); // Symbol(sss)
const s2 = Symbol.for("sss"); // 只要传递的字符串相同，就会返回之前定义的Symbol值
console.log("s1 === s2 ->", s1 === s2);

const description = Symbol.keyFor(s1); // keyFor获取描述，仅对Symbol.for()定义的Symbol有效
console.log("description->", description); // sss

console.log("base description->", Symbol.keyFor(i1)); // undefined

