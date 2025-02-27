
const x = 1;
const codeStr = "console.log(x)"

// 动态执行：setTimeout() node环境报错
setTimeout(codeStr, 0); // TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received 'console.log(x)'