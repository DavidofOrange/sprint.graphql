const { gql } = require("apollo-server");

const allTypes = gql`
  type PokeType {
    types: [String]
  }
`;

module.exports = allTypes;
