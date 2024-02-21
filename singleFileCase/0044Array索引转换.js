let a = new Array();

a[0] = 1;
a['0'] = 2;
a[0]++;

console.log('a["0"]的输出是', a['0']); // 3
console.log('a[0]的输出是', a[0]); // 3

// 当非字符串作为数组索引的时候，绝大多数类型(如 Object, Number, ...)都会被转为字符串，但Symbol类型不会

let arr = [];
arr[5] = "hello";
console.log("arr->", arr); // [ <5 empty items>, 'hello' ]
console.log(arr["5"]); // hello

const objKey = { c: 1 };
arr[objKey] = "an object element";
console.log("arr->", arr); // arr-> [ <5 empty items>, 'hello', '[object Object]': 'an object element' ]
console.log("arr[objKey] ->", arr[objKey]); // "an object element"
console.log('arr["[object Object]"] ->', arr["[object Object]"]); // "an object element"

function functionKey() {
  return "functionKey";
}
arr[functionKey] = "an function element";
console.log("arr->", arr);
/* 
arr-> [
  <5 empty items>,
  'hello',
  '[object Object]': 'an object element',
  'function functionKey() {\r\n  return "functionKey";\r\n}': 'an function element'
]
*/
console.log("arr[functionKey]->", arr[functionKey]); // "an function element"
const functionString = functionKey.toString();
console.log("functionString->", functionString);
console.log("arr[functionString]->", arr[functionString]); // "an function element"


const symbolKey = Symbol("index");
arr[symbolKey] = "an symbol element";
const symbolKeyStr = symbolKey.toString();
console.log("symbolKeyStr->", symbolKeyStr); // Symbol(index)
console.log("arr[symbolKeyStr] ->", arr[symbolKeyStr]); // undefined
console.log("arr[symbolKey] ->", arr[symbolKey]); // "an symbol element"

/* 
  Object 和 Function 在作为数组的索引时，均调用了自身的toString()方法

  但是Symbol 不会调用toString()
*/
