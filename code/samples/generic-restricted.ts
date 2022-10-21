function myFunc<T extends string | number>(a: Array<T>, b: T) {}

// accepted
myFunc([], "abc");
myFunc(["a", "b", "c"], "abc");
myFunc([1, 2, 3], 123);

// not-accepted
myFunc(["a", "b", "c"], 123);
myFunc([1, 2, 3], "123");
