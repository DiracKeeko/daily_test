// Promise 创建和使用

// Promise的最常见使用方式是结合一个异步函数，返回一个promise对象（promise实例）
function getImg(imgUrl) {
  return new Promise((resolve, reject) => {
    axios
      .get(imgUrl)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.data);
      });
  });
}

// 上面这个也可以写成变量型定义
/* 
const getImg = (imgUrl) => {
  return new Promise((resolve, reject) => {
    axios.get(imgUrl)
      .then(response => { resolve(response.data); })
      .catch(error => {reject(error.data); })
  })
} 
*/

/* 
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};
 */

function axiosPromise(c) {
  return new Promise((resolve, reject) => {
    const a = Math.random();
    if (a > c) {
      resolve(`a=${a}, ok`);
    } else {
      reject(`a=${a}, error`);
    }
  });
}

// axiosPromise(0.5)
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result))
//   .finally(() => {
//     console.log('end');
//   });


// 总归是有一个promise实例，这个promise的状态在创建时就被确定

// getSettledPromiseInstance 返回一个状态确定的promise实例
function getSettledPromiseInstance() {
  return new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
      resolve();
    } else reject();
  });
}

function waitForSettledPromise() {
  return new Promise((resolve, reject) => {
    getSettledPromiseInstance()
      .then(() => {
        resolve('0000');
      })
      .catch(() => {
        reject('0001');
      });
  });
}

waitForSettledPromise()
  .then((result) => {
    console.log("then->", result);
  })
  .catch((result) => {
    console.log("catch->", result);
  });
