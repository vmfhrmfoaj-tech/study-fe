https://gist.github.com/jherr/cd442b46070b39e99dd8bedc9eecff5c

```json
// houses.json
[
  { "name": "Atreides", "planets": "Calladan" },
  { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
  { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
]
```

```typescript
interface House {
...
}

interface HouseWithID {
...
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
```
