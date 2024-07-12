/*
  8 - 对象部分属性只读
  -------
  by Anthony Fu (@antfu) #中等 #readonly #object-keys

  ### 题目

  实现一个泛型`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。

  类型 `K` 指定 `T` 中要被设置为只读 (readonly) 的属性。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。

  例如

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK
  ```

  > 在 Github 上查看：https://tsch.js.org/8/zh-CN
*/

/* 
  解释：
    因为第二个泛型可能为空，所以需要通过 = 来赋默认值
*/
// type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & { readonly [key in K]: T[key] };

/* 
  #总结

  遍历 联合类型 type K = 'title' | 'description';  => 使用 [key in K]     // 见本题 00008-readonly2

  遍历 key的数组 type K = ["title", "description"]; => 使用 [key in K[number]];     // 见 00898-includes
*/

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

type MyReadonly2Res1 = MyReadonly2<Todo2, 'title' | 'description'>;

interface Todo {
  title: string
  description: string
  completed: boolean
}

// const todo: MyReadonly2<Todo, 'title' | 'description'> = {
//   title: "Hey",
//   description: "foobar",
//   completed: false,
// }

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK