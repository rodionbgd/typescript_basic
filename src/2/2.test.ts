import sum from "./2";

describe("Summarizing any amount of brackets", () => {
  let alertMock: ReturnType<typeof jest.spyOn>;
  window.alert = (res) => res;
  beforeEach(() => {
    alertMock = jest.spyOn(window, "alert");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("No args", () => {
    const res = sum().toString();
    window.alert(res);
    expect(alertMock).toHaveBeenCalledWith(`0`);
  });
  test("One arg", () => {
    const res = sum(1).toString();
    window.alert(res);
    expect(alertMock).toHaveBeenCalledWith(`1`);
  });

  test("Three arg", () => {
    const res = sum(1)(4)(2).toString();
    window.alert(res);
    expect(alertMock).toHaveBeenCalledWith(`7`);
  });
});
