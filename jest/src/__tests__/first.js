test("1 is 1", () => {
  expect(1).toBe(1);
});

test("return a user object", () => {
  function getUser(id) {
    return {
      id,
      email: `user${id}@test.com`,
    };
  }
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

test("string", () => {
  function getUser(id) {
    return {
      id,
      email: `user${id}@test.com`,
    };
  }
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});

test("throw when id is non negative", () => {
  function getUser(id) {
    if (id <= 0) throw new Error("Invalid ID");
    return {
      id,
      email: `user${id}@test.com`,
    };
  }
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid ID");
});
