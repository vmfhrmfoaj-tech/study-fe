// https://www.daleseo.com/jest-async/

function fetchUser(id, cb) {
  setTimeout(() => {
    // console.log("wait 0.1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }, 100);
}

test("fetch a user", (done) => {
  fetchUser(2, (user) => {
    expect(user).toEqual({
      id: 2,
      name: "User2",
      email: "2@test.com",
    });
  });

  done();
});

function fetchUserPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolve(user);
    }, 100);
  });
}

test("fetch a user (Promise return)", () => {
  return fetchUserPromise(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

test("fetch a user (Promise async/await)", async () => {
  const user = await fetchUserPromise(1);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});
