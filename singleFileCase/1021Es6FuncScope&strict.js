// Es6 函数新增特性

// 三、函数的作用域

/* 
  如果设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域
  等到初始化结束，这个作用域就会消失。(这种语法行为，在不设置参数默认值时，是不会出现的)
*/


const x = 1;
function testFunc(y = x) { 
  // 等同于 let y = x  
  let x = 2; 
  console.log(y); // 1
}

testFunc() // 1
// testFunc中 y=x会形成一个单独作用域，x没有被定义，所以指向全局变量x


// 四、函数的严格模式

/* 
  函数级别严格模式：
  
  要给某个函数开启严格模式，得把 "use strict"; (或 'use strict';) 声明一字不漏地放在函数体所有语句之前。
  function strict() {
    // 函数级别严格模式语法
    "use strict";
    // do something
    return "Hi!  I'm a strict mode function!  "
  }
 */

// 声明函数时，若函数的参数使用了默认值、解构赋值、扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错

/* 
  // 报错 SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
  function doSomething(a, b = a) {
    'use strict';
    // code
  }

  // 报错 SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
  const doSomething = function ({a, b}) {
    'use strict';
    // code
  };

  // 报错 SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
  const doSomething = (...a) => {
    'use strict';
    // code
  };

  const obj = {
    // 报错 SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
    doSomething({a, b}) {
      'use strict';
      // code
    }
  };
*/

