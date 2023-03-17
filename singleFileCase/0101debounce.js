function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);

    const _this = this;
    const _arguments = _arguments;
    timer = setTimeout(() => {
      func.apply(_this, _arguments);
    }, delay)
  }
}