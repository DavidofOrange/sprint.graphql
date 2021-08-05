const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    Pokemons: [Pokemon]
    Pokemon(name: String, id: String): Pokemon
    Attacks: Attack
    AttacksByType(type: String!): AttackByType
    PokeType: PokeType
    PokemonByType(type: String!): [Pokemon]
    PokemonByAttack(attack: String!): [Pokemon]
  }
  type Mutation {
    changeName(id: String!, name: String!): [Pokemon]
    addPokemon(id: String!, name: String!): [Pokemon]
    removePokemon(id: String!): String
    changeType(index: Int, type: String!): PokeType
    removeType(pokeType: String!): [PokeType]
    addType(pokeType: String!): String
    changeAttack(index: Int, name: String!): Attack
    removeAttack(attack: String!): Attack
    addAttack(newAttack: String!): Attack
  }
`;

module.exports = { typeDefs };
