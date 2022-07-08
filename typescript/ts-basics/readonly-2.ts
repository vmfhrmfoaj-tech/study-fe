class Doggy {
  public readonly foo: number = 2;
  constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy("LG", 23);
// lgg.name = "Foo";
console.log(lgg.name);

class DogList {
  private doggies: Doggy[] = [];

  public static instance: DogList = new DogList();

  private constructor() {}

  public static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(lgg);

// const dl = new DogList();

console.log(DogList.instance.getDogs());
