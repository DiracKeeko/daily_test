const arr = [0, 1, 2, 3];

arr[1] = undefined;

delete arr[2];

arr[3] = null;

console.log("arr->", arr); // arr-> [ 0, undefined, <1 empty item>, null ]