// 对象的 属性描述符

const person = {
  firstName: "小",
  lastName: "黑子",

  get fullName() {
    return this.firstName + this.lastName;
  },

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

console.log(person.fullName);

person.fullName = "周 杰伦";

console.log(person.fullName);