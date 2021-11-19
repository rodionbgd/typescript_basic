import semverSort from "./4";

describe("Sorting semver", () => {
  test("Versions of 1.2.3 type", () => {
    const arr = ["1.0.2", "1.1.3", "1.0.1"];
    expect(semverSort(arr)).toStrictEqual(["1.0.1", "1.0.2", "1.1.3"]);
  });
  test("Versions of different sizes", () => {
    const arr = ["1.0.1", "2.1.1", "1.0.4", "1.3.4.2.6", "1.0.4.2", "2.2"];
    expect(semverSort(arr)).toStrictEqual([
      "1.0.1",
      "1.0.4",
      "1.0.4.2",
      "1.3.4.2.6",
      "2.1.1",
      "2.2",
    ]);
  });
  test("Empty array", () => {
    expect(semverSort([])).toStrictEqual([]);
  });
});
