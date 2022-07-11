// yarn add node-fetch@2.6.7 @types/node-fetch
import fetch from "node-fetch";

namespace conditionals_redone {
  interface PokemonResults {
    count: number;
    next?: string;
    previous?: string;
    results: {
      name: string;
      url: string;
    }[];
  }

  function fetchPokemon(url: string, cb: (data: PokemonResults) => void): void;
  function fetchPokemon(url: string): Promise<PokemonResults>;
  function fetchPokemon(
    url: string,
    cb?: (data: PokemonResults) => void
  ): unknown {
    if (cb) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => cb(data as PokemonResults));

      return undefined;
    } else {
      return fetch(url).then((resp) => resp.json());
    }
  }

  //   fetchPokemon(
  //     "https://pokeapi.co/api/v2/pokemon?limit=10",
  //     (data: PokemonResults) => {
  //       data.results.forEach((p) => console.log(p.name));
  //     }
  //   );

  (async function () {
    const data = await fetchPokemon(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );

    data.results.forEach((p) => console.log(p.name));
  })();
}
