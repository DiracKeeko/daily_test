// Promise 创建和使用 

// Promise的最常见使用方式是结合一个异步函数，返回一个promise对象（promise实例）
function getImg(imgUrl) {
  return new Promise((resolve, reject) => {
    axios.get(imgUrl)
      .then(response => { resolve(response.data); })
      .catch(error => { reject(error.data); })
  })
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
