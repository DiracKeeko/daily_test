// 箭头函数
function foo() {
  console.log("this->", this);
  setTimeout(() => {
    console.log("id->", this.id);
  }, 100)
}

global.id = 22;
foo.call({ id: 123 })
