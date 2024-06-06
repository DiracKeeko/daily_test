/* 
console.log('001');
setTimeout(function () {
  console.log('002');
}, 100);
console.log('003');
// 依次输出 001 003 002

function consoleMsg(msg) {
  console.log(msg);
}

setTimeout(consoleMsg, 100, '004');

setTimeout(() => {
  consoleMsg('005');
}, 100);
 */

/* 
  上面代码块的执行顺序

  从前到后
  001
  003
  002
  004
  005
*/


// for循环中的setTimeout (for循环 + setTimeout)
/* for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // i === 3?
    console.log(0);
  }, 100)
  console.log(5);
} */

/* 
  ↑ 上面代码块的 执行顺序 从前到后
  5
  5
  5
  0
  0
  1
  0
  2
  0
*/

class Animal {
  constructor() {
    this.type = "animal";
  }

  say(val) {
    console.log(`${this.type} says ${val}`);
  }

  delaySay(val) {
    setTimeout(() => {
      console.log(`${this.type} says ${val}`);
    }, 100);
  }

  delaySay1(val) {
    setTimeout(() => {
      console.log(`${this.animal} says ${val}`);
    }, 100);
  }

}

const animal = new Animal();
animal.say("hi"); // animal says hi
animal.delaySay("hi"); // animal says hi
animal.delaySay1("hi"); // undefined says hi