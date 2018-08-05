const express = require('express');
const app = express();
const port = 8080;
const restV1Routes = require('./rest-v1-routes');

app.get('/', (req, res) => res.send('Hello world from cmdb-js server.'));

app.get('/api', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({ message: 'server is alive' });
});

app.use('/rest/v1', restV1Routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
