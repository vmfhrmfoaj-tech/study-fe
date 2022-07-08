abstract class StreetFighter {
  constructor() {}

  move() {
    console.log(`${this.name} move with ${this.getSpecialAttack()}`);
  }
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  get name(): string {
    return "Ryu";
  }
  getSpecialAttack(): string {
    return "Hadoken";
  }
}

class ChunLi extends StreetFighter {
  get name(): string {
    return "Chun-Li";
  }
  getSpecialAttack(): string {
    return "Lightning Kick";
  }
}

const ryu = new Ryu();

console.log(ryu.getSpecialAttack());

ryu.fight();

const chunLi = new ChunLi();
chunLi.fight();
