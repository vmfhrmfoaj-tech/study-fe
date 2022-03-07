import Sorter from "./Sorter";
import NumbersCollection from "./NumbersCollection";
import CharactersCollection from "./CharactersCollection";
import CustomerCollection from "./CustomerCollection";
import Customer from "./Customer";

let numCollection = new NumbersCollection([10, -7, 22, 3, 15]);
let charCollection = new CharactersCollection("TypeScript");
const customerCollection = new CustomerCollection([
  new Customer(1, "Kim"),
  new Customer(2, "Park"),
  new Customer(3, "Lee"),
  new Customer(4, "Andy"),
]);
let sorter;

sorter = new Sorter(numCollection);
sorter.sort().printCollection();

sorter = new Sorter(charCollection);
sorter.sort().printCollection();

sorter = new Sorter(customerCollection);
sorter.sort().printCollection();

// implements 하지는 않았지만 대상인터페이스의 내용을 모두 구현하고 있을경우
// 해당인터페이스를 구현한 것으로 인정한다 => 덕타이핑(duck typing)
