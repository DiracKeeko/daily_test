// 异步编程的实现方式

// 1、回调函数
// 2、Promise
// 3、async/await
// 4、生成器、迭代器

// 1、回调函数
function getUserInfo(callback) {
  // 前面有若干代码
  setTimeout(() => {
    const user = { name: "why", age: 18 };
    callback(user);
  }, 500);
  // 后面有若干代码

  console.log("继续执行了代码，没有阻塞");
}

getUserInfo((user) => {
  console.log("user->", user.name);
})


// 2、Promise
function getUserInfo2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { name: "why2", age: 18 };
      resolve(user);
    }, 500);
  })
}

getUserInfo2().then((user) => {
  console.log("user->", user.name);
})

console.log("2 继续执行了代码，没有阻塞");


// 3、async/await
function getUserInfo3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { name: "why3", age: 18 };
      resolve(user);
    }, 500);
  })
}

async function test() {
  const user = await getUserInfo3();
  console.log("user->", user.name);
}

test();
console.log("3 继续执行了代码，没有阻塞");


// 4、生成器、迭代器
function* getUserInfo4() {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { name: "why4", age: 18 };
      resolve(user);
    }, 500);
  })
}

const iterator = getUserInfo4();
iterator.next().value.then((user) => {
  console.log("user->", user.name);
})

console.log("4 继续执行了代码，没有阻塞");