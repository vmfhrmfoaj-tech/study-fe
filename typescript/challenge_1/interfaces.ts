interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

type FilterFn = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: FilterFn): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: FilterFn): HouseWithID[];
function findHouses(input: string | House[], filter?: FilterFn): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;
  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

const houses = [
  { name: "Atreides", planets: "Calladan" },
  { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
  { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] },
];

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
