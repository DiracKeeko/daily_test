type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

function foo(arg1: string, arg2: number): void {};
type Foo = MyParameters<typeof foo>; // [string, number]