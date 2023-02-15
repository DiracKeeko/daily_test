function throttle(func, delay) {
  let timer;
  return function() {
    if (timer) {
      return;
    }

    const _this = this;
    const _arguments = arguments;
    timer = setTimeout(() => {
      func.apply(_this, _arguments);
      timer = null;
    }, delay);
  }
}

function throttleDateVersion(func, delay) {
  let prev = 0;
  
  return function() {
    const _this = this;
    const _arguments = arguments;

    const now = new Date();
    if (now - prev > delay) {
      func.apply(_this, _arguments);
      prev = now;
    }
  }
}