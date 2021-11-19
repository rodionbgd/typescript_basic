import snail from "./3";

describe("Creating snail", () => {
  test("3x3 arr", () => {
    const arr = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    expect(snail(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test("3x4 arr", () => {
    const arr = [
      [1, 2, 3, 4],
      [10, 11, 12, 5],
      [9, 8, 7, 6],
    ];
    expect(snail(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
  test("Empty arr", () => {
    expect(snail([])).toStrictEqual([]);
  });
});
