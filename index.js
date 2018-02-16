const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./src/schemas/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(3001, () => {
  console.log('app listen on port 3001...')
});