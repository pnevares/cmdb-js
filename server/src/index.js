const express = require('express');
const app = express();
const port = 8080;
const restV1Routes = require('./routes/rest/v1');
const graphqlV1Routes = require('./routes/graphql/v1');
const initHandler = require('./routes/init');
const mongoDb = require('./mongodb');

mongoDb.connect();

app.get('/', (req, res) => res.send('Hello world from cmdb-js server.'));

app.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ message: 'server is alive' });
});

app.get('/init/:count', initHandler);

app.use('/rest/v1', restV1Routes);
app.use('/graphql/v1', graphqlV1Routes);

app.listen(port, () => console.log(`cmdb-js server listening on port ${port}!`));
