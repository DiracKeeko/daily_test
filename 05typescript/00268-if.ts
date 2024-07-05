type If<C extends boolean, T, F> = C extends true ? T : F;

type If1 = If<true, 'a', 'b'>;
type If2 = If<false, 'a', 2>;
