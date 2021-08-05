const { gql } = require("apollo-server");

const attackSchema = gql`
  type FastAttack {
    name: String
    type: String
    damage: Int
  }

  type SpecialAttack {
    name: String
    type: String
    damage: Int
  }

  type Attack {
    fast: [FastAttack]
    special: [SpecialAttack]
  }

  type AttackByType {
    attack: [FastAttack]
  }
`;

module.exports = attackSchema;
