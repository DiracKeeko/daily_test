// 箭头函数
function foo() {
  console.log("this->", this);
  setTimeout(() => {
    console.log("id->", this.id);
  }, 100)
}

global.id = 22;
foo.call({ id: 123 })


function foo1() {
  const inner = () => {
     console.log("args:", arguments);
  };
  inner();
}

foo1(1, 2, 3); // args: [Arguments] { '0': 1, '1': 2, '2': 3 }