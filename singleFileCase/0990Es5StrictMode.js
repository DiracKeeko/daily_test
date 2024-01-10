// 严格模式
// 开启文件级别的严格模式 
// 在文件第一行加入 "use strict" 或 'use strict'

/* 
  严格模式的效果：：
  第一，严格模式下无法创建全局变量。
    在普通的 JavaScript 里面给一个错误命名的变量名赋值会使全局对象新增一个属性并继续“工作”。严格模式中创建全局变量被抛出错误替代：
      // 假如有一个全局变量叫做 mistypedVariable
      mistypedVar = 17; // 因为变量名拼写错误
      // 这一行代码就会抛出 ReferenceError
  
  第二，严格模式会使引起静默失败的赋值操作抛出异常。 (silently fail，注：不报错也没有任何效果) 
    例如，NaN 是一个不可写的全局变量。在正常模式下，给 NaN 赋值不会产生任何作用; 开发者也不会受到任何错误反馈。但在严格模式下，给 NaN 赋值会抛出一个异常。

    任何在正常模式下引起静默失败的赋值操作 (给不可写属性赋值，给只读属性 (getter-only) 赋值，给不可扩展对象 (non-extensible object) 的新属性赋值) 都会抛出异常：

      "use strict";

      // 给不可写属性赋值
      var obj1 = {};
      Object.defineProperty(obj1, "x", { value: 42, writable: false });
      obj1.x = 9; // 抛出 TypeError 错误

      // 给只读属性赋值
      var obj2 = {
        get x() {
          return 17;
        },
      };
      obj2.x = 5; // 抛出 TypeError 错误

      // 给不可扩展对象的新属性赋值
      var fixed = {};
      Object.preventExtensions(fixed);
      fixed.newProp = "ohai"; // 抛出 TypeError 错误
  
  第三，在严格模式下，试图删除不可删除的属性时会抛出异常 (非严格模式下这种操作不会产生任何效果):
    "use strict";
    delete Object.prototype; // 抛出 TypeError 错误

  第四，在 Gecko 版本 34 之前，严格模式要求一个对象内的所有属性名在对象内必须唯一。
    正常模式下重名属性是允许的，最后一个重名的属性决定其属性值。因为只有最后一个属性起作用，当代码要去改变属性值而不是修改最后一个重名属性的时候，复制这个对象就产生一连串的 bug。在严格模式下，重名属性被认为是语法错误：
    "use strict";
    let o = { p: 1, p: 2 }; // !!! 语法错误

  第五，严格模式要求函数的参数名唯一。
    在正常模式下，最后一个重名参数名会掩盖之前的重名参数。
    之前的参数仍然可以通过 arguments[i] 来访问, 还不是完全无法访问。然而，这种隐藏毫无意义而且可能是意料之外的 (比如它可能本来是输入错误), 所以在严格模式下重名参数被认为是语法错误：

    function sum(a, a, c) {
      // !!! 语法错误
      "use strict";
      return a + a + c; // 代码运行到这里会出错
    }

  第六，严格模式禁止八进制数字语法。 (浏览器厂商实现的 0开头的八进制) 
    注意，严格模式允许ES6的八进制语法 ("0o"的前缀来表示八进制数)
    ECMAScript 并不包含八进制语法，但所有的浏览器都支持这种以 零 (0) 开头的八进制语法

    在 ECMAScript 6 中支持为一个数字加"0o"的前缀来表示八进制数。
    let a = 0o10; // ES6: 八进制   

    "use strict";
    var sum =
      015 + // !!! 语法错误
      197 +
      142;
*/

/* 
'use strict';
let sum =
  015 + // !!! 语法错误 Octal literals are not allowed in strict mode 在严格模式下不允许使用八进制字面量。
  197 +
  142;
console.log('sum->', sum);
 */


'use strict';
let sum =
  0o15 + // ES6的0o开头八进制语法在严格模式下允许使用
  0o15
console.log('sum->', sum); // 26

/* 
  第七，ECMAScript 6 中的严格模式禁止设置primitive值 (基本数据类型值) 的属性。
  不采用严格模式，设置属性将会简单忽略 (no-op),采用严格模式，将抛出TypeError错误

  "use strict";
  false.true = ""; // TypeError
  (14).sailing = "home"; // TypeError
  "with".you = "far away"; // TypeError
*/

