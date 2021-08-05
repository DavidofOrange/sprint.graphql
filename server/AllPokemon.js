const { gql } = require("apollo-server");

const allPokemon = gql`
  type Weight {
    minimum: String
    maximum: String
  }

  type Height {
    minimum: String
    maximum: String
  }
  type EvolutionRequirements {
    amount: Int
    name: String
  }

  type Evolutions {
    id: Int
    name: String
  }

  type Attacks {
    fast: [Fast]
    special: [Special]
  }
  type Fast {
    name: String
    type: String
    damage: Int
  }

  type Special {
    name: String
    type: String
    damage: Int
  }

  type Pokemon {
    id: String
    name: String!
    classification: String!
    types: [String]
    resistant: [String]
    weaknesses: [String]
    weight: Weight
    height: Height
    fleeRate: Float
    evolutionRequirements: EvolutionRequirements
    evolutions: [Evolutions]
    maxCP: Int
    maxHP: Int
    attacks: Attacks
  }
`;
module.exports = allPokemon;
