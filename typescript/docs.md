reference : https://www.typescriptlang.org/docs/handbook/intro.html

### 변수 type정의

```typescript
const str: string = "HelloWorld";
const word = "HelloWorld"; // type추론됨;
const alignment: "left" | "right" | "center" = "center";
const rtnVal: -1 | 0 | 1 = 0;

function fn(x: number, y?: number = 2): number {
    return x * y;
}
// use
fn(2, 3);  // 6
fn(2);     // 4
```

### type alias
``` typescript
type ID = number | string;
const param1: ID = 1;
const param2: ID = 'hi';
```

### interface
``` typescript
interface Point {
  x: number;
  readonly y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```


### Null
``` typescript
function liveDangerously(x?: number | null) {
  // Compiler No error

  console.log(x?.toFixed()); // if x = null ignore
  //
  // console.log(x === null || x === void 0 ? void 0 : x.toFixed());

  console.log(x!.toFixed()); // if x = null throw exception
  //
  // console.log(x.toFixed());
}

liveDangerously(null);
```

### never return type 
``` typescript
type Shape = 'Circle' | 'Square';

function getArea(shape: Shape) {
  switch (shape) {
    case "Circle":
      return Math.PI * 10 ** 2;
    case "Square":
      return 20 ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

function neverFunction(): never {
  throw new Error("error!!!!!!!");
}

neverFunction();
```


### typeof, instanceof
```typescript
/**
 * string
 * number
 * bigint
 * boolean
 * symbol
 * undefined
 * object
 * function
 */
console.log(typeof "str" === "string");

const voidFn = () => {};
console.log(typeof voidFn === "function");

class Point {
  constructor(x: number, y: number) {}
}

const point: Point = { x: 1, y: 2 };
console.log(point instanceof Point); // false

console.log(new Point(2, 3) instanceof Point); //true

interface IPoint {
  x: number;
  y: number;
}

const ipoint: IPoint = { x: 1, y: 2 };
console.log(typeof ipoint); // object
// console.log(ipoint instanceof IPoint); // compile error

```


### function type expressions
``` typescript
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

//
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

//
type SomeConstructor = {
  new (s: string): DescribableFunction;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

//
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

```


### optional
``` typescript
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

### Rest Parameter
``` typescript
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4);

console.log(a);  // [10, 20, 30, 40]
```

### Parameter Destructuring
``` typescript
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}

sum({ a: 1, b: 2, c: 3 }); // 6

const obj = { a: 3, b: 2, c: 1 };

sum(obj); // 6

const { a, b, c } = obj;
console.log(a); // 3
console.log(b); // 2
console.log(c); // 1

const [d, e, ...etc] = [10, 11, 12, 13];
console.log(d); // 10
console.log(e); // 11
console.log(etc); // [ 12, 13 ]
```


### readonly
``` typescript
interface SomeType {
  readonly prop: string;
}
 
function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);
 
  // But we can't re-assign it.
  obj.prop = "hello"; // Cannot assign to 'prop' because it is a read-only property.
}

const arr: readonly [number, number] = [0, 1];
console.log(arr); // [0, 1]
arr[0] = 100; // compile error
```


### class
``` typescript
class C {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
const c = new C();
console.log(c.length);
c.length = 4;
console.log(c.length);
```