//functions create function
function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction();
logger("your string");

function createLoggerClass() {
  return class MyLoggerClass {
    private comleteLog: string = "";
    log(str: string) {
      console.log(str);
      this.comleteLog += str + "\n";
    }

    dumpLog() {
      return this.comleteLog;
    }
  };
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();

logger2.log("Foo");
logger2.log("Bar");
console.log(logger2.dumpLog());

// functions creating a generic class
function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      this.db[id] = value;
    }

    get(id: string): T {
      return this.db[id];
    }

    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const sdb1 = new StringDatabase();
sdb1.set("a", "abc");
console.log(sdb1.getObject());

// createing a mixin
type Constructor<T> = new (...args: any[]) => T;

function Dumpable<
  T extends Constructor<{
    getObject(): object;
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabaase = Dumpable(StringDatabase);

const sdb2 = new DumpableStringDatabaase();
sdb2.set("jack", "hello jack");
sdb2.dump();
