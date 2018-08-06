const express = require('express');
const app = express();
const port = 8080;
const restV1Routes = require('./rest-v1-routes');
const graphqlV1Routes = require('./graphql-v1-routes');
const initHandler = require('./init');
const mongoDb = require('./mongodb');

mongoDb.connect();

app.get('/', (req, res) => res.send('Hello world from cmdb-js server.'));

app.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ message: 'server is alive' });
});

app.get('/init', initHandler);

app.use('/rest/v1', restV1Routes);
app.use('/graphql/v1', graphqlV1Routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
