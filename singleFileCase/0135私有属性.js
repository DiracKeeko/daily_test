// 私有属性

// 1. symbol
let nameSymbol = Symbol("name");
let obj = {
  [nameSymbol]: "why",
  getName() {
    return this[nameSymbol];
  }
}

console.log("obj.getName() ->", obj.getName()); // why

console.log("obj.name->", obj["name"]); // undefined
console.log("obj.name->", obj[nameSymbol]); // why, 如果有nameSymbol的引用，则还是可以访问到这个属性

// 2. #号前缀 (ES12 || ES2021)
class MyClass {
  #name = "why";
  getPrivateName() {
    return this.#name;
  }
}

let obj2 = new MyClass();
console.log("obj2.getPrivateName() ->", obj2.getPrivateName()); // why
// console.log("obj2.#name->", obj2.#name); 
// 直接标红  Property '#name' is not accessible outside class 'MyClass' because it has a private identifier.
// 如果运行的话会报错: SyntaxError: Private field '#name' must be declared in an enclosing class

// 3. 闭包
let obj3 = (function() {
  let _name = "why";
  return {
    getName() {
      return _name;
    }
  }
})();

console.log("obj3.getName() ->", obj3.getName()); // why
console.log("obj3._name ->", obj3._name); // undefined