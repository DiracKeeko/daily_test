function Student(name) {
  console.log(this); // Student {}
  this.name = name; // Student {name:"Mi"}
}

const obj = new Student('Mi');
console.log("obj->", obj);
