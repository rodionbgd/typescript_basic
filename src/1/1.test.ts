import { hof, sum } from "./1";

describe("Summarize arguments", () => {
  let fn: (...argsWrapped1: number[]) => any;
  beforeEach(() => {
    fn = hof(sum);
  });
  describe("Invalid input", () => {
    test("NaN input", () => {
      try {
        fn(1)(2, "3g", 4, 5, 6);
      } catch (e) {
        expect((e as Error).message).toBe("NaN"); // eslint-disable-line
      }
    });
    test("Not a 6-arg input", () => {
      expect(fn(1)(2)(3)).toBeInstanceOf(Function);
      expect(fn(1)(2)).toBeInstanceOf(Function);
    });
  });
  const arr = [
    { arr: [1, 2, 3, 4, 5, 6], res: 21 },
    { arr: [1, 1, 1, 1, 1, 1], res: 6 },
  ];
  test.each(arr)("Sum of $arr is $res", (val) => {
    expect(
      fn(val.arr[0])(val.arr[1], val.arr[2])(val.arr[3])(val.arr[4], val.arr[5])
    ).toBe(val.res);
    expect(
      fn(val.arr[0])(val.arr[1], val.arr[2], val.arr[3])(val.arr[4], val.arr[5])
    ).toBe(val.res);
  });
});
