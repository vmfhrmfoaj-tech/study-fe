// optional parameter
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "something more");

// optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }

  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

console.log(getEmail({ id: "0" }));
console.log(getEmail({ id: "0", info: {} }));
console.log(getEmail({ id: "0", info: { email: "email" } }));

console.log(getEmailEasy({ id: "0" }));
console.log(getEmailEasy({ id: "0", info: {} }));
console.log(getEmailEasy({ id: "0", info: { email: "email" } }));

// optional callback
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // if( callback ) callback();
  callback?.();
}
