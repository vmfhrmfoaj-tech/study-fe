import NumbersCollection from "./NumbersCollection";

interface Sortable {
  readonly length: number;

  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

class Sorter {
  constructor(private collection: Sortable) {}

  sort(): Sorter {
    const { length } = this.collection;

    // bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          // swap
          this.collection.swap(j, j + 1);
        }
      }
    }

    return this;
  }

  printCollection() {
    console.log(this.collection);
  }
}

export default Sorter;
