interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

type DBKeyType = string | number: symbol;

// implementing interface
class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {}; // member visibility

  get(id: K): T {
    return this.db[id];
  }

  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class PersistentMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

// const myDB = new InMemoryDatabase();
const myDB = new PersistentMemoryDB<number, string>();
myDB.set("foo", 1);
// myDB.db["foo"] = "baz";
console.log(myDB.get("foo"));
const saved = myDB.saveToString();
myDB.set("foo", 23);
console.log(myDB.get("foo"));

const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);

console.log(myDB2.get("foo"));
