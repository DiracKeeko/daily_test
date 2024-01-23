// Es6 module

/* 
  模块(Module)，是能够单独命名并独立地完成一定功能的程序语句的集合（即程序代码和数据结构的集合体）。

    两个基本的特征：外部特征和内部特征
      1.外部特征是指模块跟外部环境联系的接口（即其他模块或程序调用该模块的方式，包括有输入输出参数、引用的全局变量）
        和模块的功能
      2.内部特征是指模块的内部环境具有的特点（即该模块的局部数据和程序代码）

    即: 
      1.模块对外需要暴露接口，能够让外部访问到模块内的参数或者从外部调用模块内的功能
      2.模块内部有自己的作用域。 (局部数据)

  为什么需要模块化
    1.代码封装
    2.代码复用
    3.依赖管理
*/

/* 
  模块化的方案
    1. Asynchronous ModuleDefinition（AMD） 异步模块定义  代表： require.js
    2. CommonJs (代表：node.js早期)
    3. ESM
*/

/* 
  2. CommonJs特点  (.cjs)
  所有代码都运行在模块作用域，不会污染全局作用域
  模块是同步加载的，即只有加载完成，才能执行后面的操作
  模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存
  require返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值

  // a.js
  module.exports={ foo , bar}
  // b.js
  const { foo,bar } = require('./a.js')

*/

/* 
  ESM 对比 cjs

  1.加载时机： 
    ESM模块在编译时加载，且是异步加载，支持动态导入，这意味着模块可以在运行时异步加载，提高了性能和并行性。
    CJS模块在运行时加载，是同步加载，只有加载完成，才能执行后面的操作。(在浏览器环境中，使用 CJS 可能会导致阻塞)

  2.静态分析： ESM是编译时加载，因此可以静态分析，可以在编译时进行优化。(编译工具和引擎可以更好地理解和优化代码)

  3.顶级作用域： 
    每个 ESM 模块都有自己的顶级作用域，不同于 CJS 中所有模块共享同一个顶级作用域。

  // 导入模块
  import moduleA from './moduleA';

  // 导出模块
  export default someFunction;
*/

/* 
  export使用
  // profile.js
  export var firstName = 'Michael';
  export var lastName = 'Jackson';
  export var year = 1958;

  或 
  // 建议使用下面写法，这样能瞬间确定输出了哪些变量
  var firstName = 'Michael';
  var lastName = 'Jackson';
  var year = 1958;

  export { firstName, lastName, year };


  export function multiply(x, y) {
    return x * y;
  };

  function v1() { ... }
  function v2() { ... }

  export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
  };
*/

/* 
  import使用

  // main.js
  import { firstName, lastName, year } from './profile.js';

  function setName(element) {
    element.textContent = firstName + ' ' + lastName;
  }

  同样如果想要输入变量起别名，通过as关键字
  import { lastName as surname } from './profile.js';


  当加载整个模块的时候，需要用到星号*
  // circle.js
  export function area(radius) {
    return Math.PI * radius * radius;
  }

  export function circumference(radius) {
    return 2 * Math.PI * radius;
  }

  // main.js
  import * as circle from './circle';
  console.log(circle)   // {area:area,circumference:circumference}
*/

/* 
  输入的变量都是只读的，不允许修改，但是如果是对象，允许修改属性

  import {a} from './xxx.js'

  a.foo = 'hello'; // 合法操作
  a = {}; // Syntax Error : 'a' is read-only;
  不过建议即使能修改，但我们不建议。因为修改之后，我们很难差错
*/

/* 
  动态加载
  允许您仅在需要时动态加载模块，而不必预先加载所有模块，这存在明显的性能优势

  这个新功能允许您将import()作为函数调用，将其作为参数传递给模块的路径。 它返回一个 promise，它用一个模块对象来实现，让你可以访问该对象的导出

  import('/modules/myModule.mjs')
    .then((module) => {
      // Do something with the module.
    });
*/

/* 
  导入导出的复合写法

  复合写法
  如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起
  
  export { foo, bar } from 'my_module';
  // 上面一行代码和下面两行代码等价
  import { foo, bar } from 'my_module';
  export { foo, bar };
*/
