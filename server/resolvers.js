const data = require("./data");

module.exports = {
  Query: {
    Pokemons: () => {
      return data.pokemon;
    },

    Pokemon: (parent, args) => {
      const arg = Object.keys(args);
      console.log(arg[0]);
      if (arg[0] === "name") {
        return data.pokemon.find((pokemon) => pokemon.name === args.name);
      } else if (arg[0] === "id")
        return data.pokemon.find((pokemon) => pokemon.id === args.id);
    },

    Attacks: () => {
      return data.attacks;
    },

    PokeType: () => {
      return { types: data.types };
    },

    AttacksByType: (parent, args) => {
      if (args.type === "fast") {
        console.log("Im here");
        return { attack: data.attacks.fast };
      } else if (args.type === "special") {
        return { attack: data.attacks.special };
      }
    },
    PokemonByType: (parent, args) => {
      const filtered = data.pokemon.filter((poke) =>
        poke.types.includes(args.type)
      );
      return filtered;
    },
    PokemonByAttack: (parent, args) => {
      // console.log(args.attack);
      const filtered = data.pokemon.filter((poke) => {
        const flattenedAttacks = [
          ...poke.attacks.fast,
          ...poke.attacks.special,
        ];
        let hasAttack = false;
        const matching = flattenedAttacks.forEach((attack) => {
          if (attack.name === args.attack) {
            console.log(attack.name);
            hasAttack = true;
          }
        });
        if (hasAttack) {
          return poke;
        }
      });
      // console.log(filtered);
      return filtered;
    },
  },
  Mutation: {
    changeName: (parent, args) => {
      const pokemons = data.pokemon;
      const pokemon = [];

      const { id, name } = args;
      pokemons.map((poke) => {
        if (poke.id === id) {
          console.log("im here");
          poke.name = name;
          pokemon.push(poke);
        }
      });
      return pokemon;
    },
    removePokemon: (parent, args) => {
      const pokemons = data.pokemon;

      const { id } = args;
      pokemons.filter((poke) => poke.id !== id);
      return "deleted successfully";
    },
    addPokemon: (parent, args) => {
      const pokemons = data.pokemon;
      const { id, name } = args;
      const newPokemon = {
        id,
        name,
      };

      pokemons.push(newPokemon);
      return "added successfully";
    },
    changeType: (parent, args) => {
      const types = data.types;
      const { newType, index } = args;

      data.types[index] = newType;
      return "type successfully edited";
    },
    removeType: (parent, args) => {
      const { pokeType } = args;
      data.types.filter((type) => type !== pokeType);
      return "deleted successfully";
    },
    addType: (parent, args) => {
      const allTypes = data.types;
      const { pokeType } = args;
      allTypes.push(pokeType);

      return "added successfully";
    },
    changeAttack: (parent, args) => {
      const { index, name } = args;

      data.attacks[index] = name;
      return "type successfully edited";
    },
    removeAttack: (parent, args) => {
      const { attack } = args;
      data.attacks.filter((atk) => atk !== attack);
      return "deleted successfully";
    },
    addAttack: (parent, args) => {
      const allAttacks = data.types;
      const { newAttack } = args;
      allAttacks.push(newAttack);

      return "added successfully";
    },
  },
};
