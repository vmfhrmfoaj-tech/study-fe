import Customer from "./Customer";

class CustomerCollection {
  constructor(private data: Customer[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].name.localeCompare(this.data[rightIndex].name) > 0
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const temp: Customer = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}

export default CustomerCollection;
