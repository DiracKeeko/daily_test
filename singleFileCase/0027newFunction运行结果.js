function Student(name) {
  this.name = name; // Student {name:"Mi"}
}

const obj = new Student('Mi');
console.log("obj->", obj); // obj-> Student { name: 'Mi' }


function Student1(name) {
  this.name = name;
  return { age: "3" };
}
const obj1 = new Student1('Mi');
console.log("obj1->", obj1); // obj1-> { age: '3' }


function Student2(name) {
  this.name = name;
  return 666;
}
const obj2 = new Student2('Mi');
console.log("obj2->", obj2); // obj2-> Student2 { name: 'Mi' }
