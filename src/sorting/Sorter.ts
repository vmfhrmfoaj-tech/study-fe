class Sorter {
  constructor(private collection: number[] | string) {}

  sort(): number[] | string {
    const { length } = this.collection;

    // bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (typeof this.collection === "string") {
          if (
            this.collection[j].toLowerCase() >
            this.collection[j + 1].toLowerCase()
          ) {
            const characters = this.collection.split("");
            const temp = characters[j];
            characters[j] = characters[j + 1];
            characters[j + 1] = temp;

            this.collection = characters.join("");
          }
        }

        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            // swap
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }
    return this.collection;
  }
}

export default Sorter;
