// yarn add node-fetch@2.6.7 @types/node-fetch
import fetch from "node-fetch";

namespace conditionals {
  interface PokemonResults {
    count: number;
    next?: string;
    previous?: string;
    results: {
      name: string;
      url: string;
    }[];
  }

  type FetchPokemonResult<T> = T extends undefined
    ? Promise<PokemonResults>
    : void;

  function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
    url: string,
    cb?: T
  ): FetchPokemonResult<T> {
    if (cb) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => cb(data as PokemonResults));

      return undefined as FetchPokemonResult<T>;
    } else {
      return fetch(url).then((resp) => resp.json()) as FetchPokemonResult<T>;
    }
  }

  //   fetchPokemon(
  //     "https://pokeapi.co/api/v2/pokemon?limit=10",
  //     (data: PokemonResults) => {
  //       data.results.forEach((p) => console.log(p.name));
  //     }
  //   );

  (async function () {
    const data = <PokemonResults>(
      await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10")
    );

    data.results.forEach((p) => console.log(p.name));
  })();
}
