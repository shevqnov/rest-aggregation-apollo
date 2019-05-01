const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const dataSources = require("./datasources");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
