function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [str3getter, str3setter] = simpleState(1);
console.log(str3getter());
str3setter(100);
console.log(str3getter());

// overriding inferred generic types
const [str4getter, str4setter] = simpleState<string | null>(null);
console.log(str4getter());
str4setter("Str");
console.log(str4getter());

// example #2 ranker
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

//
interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: "Bulbasaur", hp: 20 },
  { name: "Megaasaur", hp: 5 },
];

const ranks = ranker(pokemon, ({ hp }) => hp * -1);
console.log(ranks);
