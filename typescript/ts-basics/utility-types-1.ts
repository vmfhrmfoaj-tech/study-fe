// Partial
interface MyUser {
  name: string;
  id: number;
  email?: string;
  phone?: string;
}

type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: 1,
      email: "vmfhrmfoaj@nate.com",
    },
    {
      email: "vmfhrmfoaj-overrides@nate.com",
    }
  )
);

// Required
type RequiredMyUser = Required<MyUser>;

// pick
type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Record
const mapById = (usres: MyUser[]): Record<MyUser["id"], MyUser> => {
  return usres.reduce((a, v) => {
    return {
      ...a,
      [v.id + 1]: v,
    };
  }, {});
};

console.log(
  mapById([
    { id: 1, name: "Mr. foo" },
    { id: 2, name: "Mr. baz" },
  ])
);

// omit

type UserWithoutID = Omit<MyUser, "id">;
const mapByIdOmit = (usres: MyUser[]): Record<number, UserWithoutID> => {
  return usres.reduce((a, v) => {
    const { id, ...other } = v;

    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  "mapByIdOmit",
  mapByIdOmit([
    { id: 1, name: "Mr. foo" },
    { id: 2, name: "Mr. baz" },
  ])
);

// types from field
