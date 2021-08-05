const { ApolloServer } = require("apollo-server");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs: vic } = require("./schema");
const attackSchema = require("./attacks");
const allPokemon = require("./AllPokemon");
const allTypes = require("./types");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs: [attackSchema, allPokemon, vic, allTypes],
  query: resolvers.Query,
  mutation: resolvers.Mutation,
});

const server = new ApolloServer({ schema });

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server with Apollo at localhost:${PORT}/graphql`
  );
});
