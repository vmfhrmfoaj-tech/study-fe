// https://www.daleseo.com/jest-fn-spy-on/

test("mock basic(call, return)", () => {
  const expectValue = "test";
  const mockFn = jest.fn();
  mockFn.mockReturnValue(expectValue);

  mockFn();
  mockFn(1);
  mockFn("a");
  const returnValue = mockFn([1, 2], { a: "b" });

  expect(mockFn).toBeCalledTimes(4);
  expect(returnValue).toEqual(expectValue);
});

test("mock basic(promise)", async () => {
  const expectValue = "test";
  const mockFn = jest.fn();
  mockFn.mockResolvedValue(expectValue);

  mockFn();
  mockFn(1);
  mockFn("a");
  const returnValue = await mockFn([1, 2], { a: "b" });

  expect(mockFn).toBeCalledTimes(4);
  expect(returnValue).toEqual(expectValue);
});

test("mock implement", async () => {
  const mockFn = jest.fn();
  mockFn.mockImplementation((name) => {
    return `test ${name}`;
  });

  const returnValue = mockFn("vmfhrmfoaj");

  expect(mockFn).toBeCalledTimes(1);
  expect(returnValue).toEqual("test vmfhrmfoaj");
});

test("spyOn basic", async () => {
  const calculator = {
    add: (a, b) => a + b,
  };

  const spyFn = jest.spyOn(calculator, "add");

  const result = calculator.add(2, 3);

  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
  expect(result).toBe(5);
});

describe("endpoint axios mocking test", () => {
  const axios = require("axios");
  const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

  const findOne = (id) =>
    axios.get(`${API_ENDPOINT}/users/${id}`).then((res) => res.data);

  test("spyOn test", async () => {
    const spyAxiosGet = jest.spyOn(axios, "get");
    const user = await findOne(1);

    expect(spyAxiosGet).toBeCalledTimes(1);
    expect(spyAxiosGet).toBeCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    console.log(user);
  });

  test("mock axios", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        name: "Vmfhrmfoaj",
      },
    });
    const user = await findOne(1);
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name", "Vmfhrmfoaj");
  });
});
