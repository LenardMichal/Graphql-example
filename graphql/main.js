const graphqlHTTP = require("express-graphql");
const resolvers = require('./resolvers');
const schema = require('./schema');


module.exports = graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
});

